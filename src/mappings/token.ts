import { Address, log } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
} from "../../generated/tokenContract/tokenContract"
import { Transfer } from "../../generated/schema"
import { BIGDECIMAL_ZERO, BIGINT_ONE, TransferType, ZERO_ADDRESS } from "../common/constants"
import { getOrCreateAccount, getOrCreateToken } from "../common/getters"
import { getUsdPricePerToken } from "../prices"
import { updateAccountMetrics, updateTokenMetrics } from "../common/updateMetrics"
import { convertTokenToDecimal } from "../common/utils"
import { NetworkConfigs } from "../../configurations/configure"

export function handleTransfer(event: TransferEvent): void {
  let from = event.params.from.toHexString()
  let to = event.params.to.toHexString()

  let token = getOrCreateToken(NetworkConfigs.getTokenAddress())
  let receiver = getOrCreateAccount(to)
  let sender = getOrCreateAccount(from)

  let amountToken = convertTokenToDecimal(event.params.value, token.decimals)

  let transfer = new Transfer(event.transaction.hash.toHexString())

  token.lastPriceUSD = BIGDECIMAL_ZERO

  // let fetchPrice = getUsdPricePerToken(Address.fromString(token.id));

  // if (!fetchPrice.reverted) {
  //   token.lastPriceUSD = fetchPrice.usdPrice.div(
  //     fetchPrice.decimalsBaseTen
  //   );
  // } else {
  //   // default value of this variable, if reverted is BigDecimal Zero
  //   token.lastPriceUSD = fetchPrice.usdPrice
  // }

  // Handle Account and Token entities
  receiver.cumulativeTransfersInCount = receiver.cumulativeTransfersInCount.plus(BIGINT_ONE)
  receiver.balance = receiver.balance.plus(amountToken) 
  receiver.balanceUSD = receiver.balance.times(token.lastPriceUSD)
  receiver.cumulativeVolume = receiver.cumulativeVolume.plus(amountToken)
  receiver.cumulativeVolumeUSD = receiver.cumulativeVolumeUSD.times(token.lastPriceUSD)  
  receiver.cumulativeTransfersInCount = receiver.cumulativeTransfersInCount.plus(BIGINT_ONE)
  receiver.timestamp = event.block.timestamp
  receiver.blockNumber = event.block.number
  receiver.save()

  sender.cumulativeTransfersOutCount = sender.cumulativeTransfersOutCount.plus(BIGINT_ONE)
  sender.balance = sender.balance.minus(amountToken)
  sender.balanceUSD = sender.balance.times(token.lastPriceUSD)
  sender.cumulativeVolume = sender.cumulativeVolume.plus(amountToken)
  sender.cumulativeVolumeUSD = sender.cumulativeVolume.times(token.lastPriceUSD)
  sender.cumulativeTransfersOutCount = sender.cumulativeTransfersOutCount.plus(BIGINT_ONE)
  sender.timestamp = event.block.timestamp
  sender.blockNumber = event.block.number

  transfer.hash = event.transaction.hash.toHexString()
  transfer.from = from
  transfer.to = to
  transfer.amount = amountToken
  transfer.amountUSD = amountToken.times(token.lastPriceUSD)
  transfer.timestamp = event.block.timestamp
  transfer.blockNumber = event.block.number

  if (from == ZERO_ADDRESS && to == ZERO_ADDRESS) {
    log.warning("Transaction Hash: " + event.transaction.hash.toHexString() + " Amount: " + amountToken.toString() + " Is both sent from and recieved by null address",[])
    transfer.type = TransferType.UNKNOWN
  } else if (from == ZERO_ADDRESS) {
    transfer.type = TransferType.MINT
    token.cumulativeAmountMinted = token.cumulativeAmountMinted.plus(amountToken)
    token.circulatingAmount = token.circulatingAmount.plus(amountToken)
  } else if (to == ZERO_ADDRESS) {
    transfer.type = TransferType.BURN
    token.cumulativeAmountBurned = token.cumulativeAmountBurned.plus(amountToken)
    token.cumulativeAmountBurnedUSD = token.cumulativeAmountBurned.times(token.lastPriceUSD)
    token.circulatingAmount = token.circulatingAmount.minus(amountToken)
  } else {
    transfer.type = TransferType.TRANSFER
  }

  token.cumulativeVolume = token.cumulativeVolume.plus(amountToken)
  token.cumulativeVolumeUSD = token.cumulativeVolume.times(token.lastPriceUSD)
  token.marketCapitalization = token.circulatingAmount.times(token.lastPriceUSD)
  token.lastPriceTimestamp = event.block.timestamp
  token.lastPriceBlockNumber = event.block.number

  updateTokenMetrics(event, token, from, to, event.params.value)
  updateAccountMetrics(event, token, sender, receiver, event.params.value)

  // Handle Snapshots 
  sender.save()
  receiver.save()
  transfer.save()
  token.save()
}
