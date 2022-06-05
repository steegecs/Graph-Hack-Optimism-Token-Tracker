import { ethereum, BigInt } from "@graphprotocol/graph-ts";
import { Account, Token } from "../../generated/schema";
import { BIGINT_ONE, ZERO_ADDRESS } from "./constants";
import { getOrCreateAccountDailySnapshot, getOrCreateTokenMetricsDailySnapshot, getOrCreateTokenMetricsHourlySnapshot } from "./getters";
import { convertTokenToDecimal } from "./utils";

// Update UsagePoolDailySnapshot entity
export function updateTokenMetrics(event: ethereum.Event, token: Token, from: String, to: String, value: BigInt): void {

    // get or create pool metrics
    let tokenMetricsHourly = getOrCreateTokenMetricsHourlySnapshot(event, token);
    let tokenMetricsDaily = getOrCreateTokenMetricsDailySnapshot(event, token);
  
    let amountToken = convertTokenToDecimal(value, token.decimals)
  
    // Handle hourly token metrics
    if (from == ZERO_ADDRESS) {
      tokenMetricsHourly.hourlyAmountMinted = tokenMetricsHourly.hourlyAmountMinted.plus(amountToken)
    } else if (to == ZERO_ADDRESS) {
      tokenMetricsHourly.hourlyAmountBurned = tokenMetricsHourly.hourlyAmountBurned.plus(amountToken)
    }
    tokenMetricsHourly.cumulativeAmountMinted = token.cumulativeAmountMinted
    tokenMetricsHourly.cumulativeAmountBurned = token.cumulativeAmountBurned
    tokenMetricsHourly.hourlyAmountBurnedUSD = tokenMetricsHourly.hourlyAmountBurned.times(token.lastPriceUSD)
    tokenMetricsHourly.cumulativeAmountBurnedUSD = token.cumulativeAmountBurnedUSD
    tokenMetricsHourly.hourlyVolume = tokenMetricsHourly.hourlyVolume.plus(amountToken)
    tokenMetricsHourly.cumulativeVolume = token.cumulativeVolume
    tokenMetricsHourly.hourlyVolumeUSD = tokenMetricsHourly.hourlyVolume.times(token.lastPriceUSD)
    tokenMetricsHourly.cumulativeVolumeUSD = token.cumulativeVolumeUSD
    tokenMetricsHourly.circulatingAmount = token.circulatingAmount
    tokenMetricsHourly.marketCapitalization = token.marketCapitalization
    tokenMetricsHourly.lastPriceUSD = token.lastPriceUSD
    tokenMetricsHourly.lastPriceTimestamp = event.block.timestamp
    tokenMetricsHourly.lastPriceBlockNumber = event.block.number
  
    // Handle daily token metrics
    if (from == ZERO_ADDRESS) {
      tokenMetricsDaily.dailyAmountMinted = tokenMetricsDaily.dailyAmountMinted.plus(amountToken)
    } else if (to == ZERO_ADDRESS) {
      tokenMetricsDaily.dailyAmountBurned = tokenMetricsDaily.dailyAmountBurned.plus(amountToken)
    }
    tokenMetricsDaily.cumulativeAmountMinted = token.cumulativeAmountMinted
    tokenMetricsDaily.cumulativeAmountBurned = token.cumulativeAmountBurned
    tokenMetricsDaily.dailyAmountBurnedUSD = tokenMetricsDaily.dailyAmountBurned.times(token.lastPriceUSD)
    tokenMetricsDaily.cumulativeAmountBurnedUSD = token.cumulativeAmountBurnedUSD
    tokenMetricsDaily.dailyVolume = tokenMetricsDaily.dailyVolume.plus(amountToken)
    tokenMetricsDaily.cumulativeVolume = token.cumulativeVolume
    tokenMetricsDaily.dailyVolumeUSD = tokenMetricsDaily.dailyVolume.times(token.lastPriceUSD)
    tokenMetricsDaily.cumulativeVolumeUSD = token.cumulativeVolumeUSD
    tokenMetricsDaily.circulatingAmount = token.circulatingAmount
    tokenMetricsDaily.marketCapitalization = token.marketCapitalization
    tokenMetricsDaily.lastPriceUSD = token.lastPriceUSD
    tokenMetricsDaily.lastPriceTimestamp = event.block.timestamp
    tokenMetricsDaily.lastPriceBlockNumber = event.block.number
  
    tokenMetricsHourly.save();
    tokenMetricsDaily.save();
  }
  
  export function updateAccountMetrics(event: ethereum.Event, token: Token, sender: Account, receiver: Account, value: BigInt): void {
    let accountReceiverMetrics = getOrCreateAccountDailySnapshot(event, receiver);
    let accountSenderMetrics = getOrCreateAccountDailySnapshot(event, sender);
  
    let amountToken = convertTokenToDecimal(value, token.decimals)
  
    // Update metrics for the receiver in the transer event
    accountReceiverMetrics.balance = receiver.balance
    accountReceiverMetrics.balanceUSD = receiver.balanceUSD
    accountReceiverMetrics.dailyVolume = accountReceiverMetrics.dailyVolume.plus(amountToken)
    accountReceiverMetrics.cumulativeVolume = receiver.cumulativeVolume
    accountReceiverMetrics.dailyVolumeUSD = accountReceiverMetrics.dailyVolume.times(token.lastPriceUSD)
    accountReceiverMetrics.cumulativeVolumeUSD = receiver.cumulativeVolumeUSD
    accountReceiverMetrics.dailyTransfersInCount = accountReceiverMetrics.dailyTransfersInCount.plus(BIGINT_ONE)
    accountReceiverMetrics.cumulativeTransfersInCount = receiver.cumulativeTransfersInCount
    accountReceiverMetrics.timestamp = event.block.timestamp
    accountReceiverMetrics.blockNumber = event.block.number
  
    // Update metrics for the sender in the transer event
    accountSenderMetrics.balance = sender.balance
    accountSenderMetrics.balanceUSD = sender.balanceUSD
    accountSenderMetrics.dailyVolume = accountSenderMetrics.dailyVolume.plus(amountToken)
    accountSenderMetrics.cumulativeVolume = sender.cumulativeVolume
    accountSenderMetrics.dailyVolumeUSD = accountSenderMetrics.dailyVolume.times(token.lastPriceUSD)
    accountSenderMetrics.cumulativeVolumeUSD = sender.cumulativeVolumeUSD
    accountSenderMetrics.dailyTransfersOutCount = accountSenderMetrics.dailyTransfersInCount.plus(BIGINT_ONE)
    accountSenderMetrics.cumulativeTransfersOutCount = sender.cumulativeTransfersInCount
    accountSenderMetrics.timestamp = event.block.timestamp
    accountSenderMetrics.blockNumber = event.block.number
  
    accountReceiverMetrics.save()
    accountSenderMetrics.save()
  }
  