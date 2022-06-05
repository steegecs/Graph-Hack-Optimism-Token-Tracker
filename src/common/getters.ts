import { Address, ethereum } from "@graphprotocol/graph-ts";
import { tokenContract } from "../../generated/tokenContract/tokenContract";
import { Account, AccountDailySnapshot, Token, TokenDailySnapshot, TokenHourlySnapshot } from "../../generated/schema";
import { BIGDECIMAL_ZERO, BIGINT_ZERO, DEFAULT_DECIMALS, SECONDS_PER_DAY, SECONDS_PER_HOUR } from "./constants";
import { NetworkConfigs } from "../../configurations/configure";

export function getOrCreateToken(address: string): Token {
    let token = Token.load(address);
    if (!token) {
        token = new Token(address);
        let erc20Contract = tokenContract.bind(Address.fromString(address));
        let decimals = erc20Contract.try_decimals();
        // Using try_cause some values might be missing
        let name = erc20Contract.try_name();
        let symbol = erc20Contract.try_symbol();
        // TODO: add overrides for name and symbol
        token.subgraphVersion = NetworkConfigs.getSubgraphVersion();
        token.methodologyVersion = NetworkConfigs.getMethodologyVersion();
        token.schemaVersion = NetworkConfigs.getSchemaVersion();
        token.network = NetworkConfigs.getNetwork();
        token.type = NetworkConfigs.getType();
        token.name = name.reverted ? "" : name.value;
        token.symbol = symbol.reverted ? "" : symbol.value;
        token.decimals = decimals.reverted ? DEFAULT_DECIMALS : decimals.value;
        token.cumulativeAmountMinted = BIGDECIMAL_ZERO;
        token.cumulativeAmountBurned = BIGDECIMAL_ZERO;
        token.cumulativeAmountBurnedUSD = BIGDECIMAL_ZERO;
        token.cumulativeVolume = BIGDECIMAL_ZERO;
        token.cumulativeVolumeUSD = BIGDECIMAL_ZERO;
        token.lastPriceUSD = BIGDECIMAL_ZERO;
        token.lastPriceBlockNumber = BIGINT_ZERO;
        token.save();
    }
    return token as Token;
}

export function getOrCreateAccount(address: string): Account {
    let account = Account.load(address);
    if (!account) {
        account = new Account(address);
        account.network = NetworkConfigs.getNetwork();
        account.token = getOrCreateToken(NetworkConfigs.getTokenAddress()).id;
        account.balance = BIGDECIMAL_ZERO
        account.balanceUSD = BIGDECIMAL_ZERO
        account.cumulativeVolume = BIGDECIMAL_ZERO
        account.cumulativeVolumeUSD = BIGDECIMAL_ZERO
        account.cumulativeTransfersInCount = BIGINT_ZERO
        account.cumulativeTransfersOutCount = BIGINT_ZERO
        
        account.save();
    }
    return account as Account;
}

export function getOrCreateTokenMetricsDailySnapshot(event: ethereum.Event, token: Token): TokenDailySnapshot {
    // Number of days since Unix epoch
    let id = event.block.timestamp.toI32() / SECONDS_PER_DAY;
    let dayId = id.toString();
    let tokenDayId = token.id + ' - ' + dayId;

    // Create unique id for the day
    let tokenMetrics = TokenDailySnapshot.load(tokenDayId);
  
    if (!tokenMetrics) {
        tokenMetrics = new TokenDailySnapshot(tokenDayId);

        tokenMetrics.network = token.network
        tokenMetrics.type = token.type
        tokenMetrics.name = token.name
        tokenMetrics.symbol = token.symbol
        tokenMetrics.decimals = token.decimals
        tokenMetrics.dailyAmountMinted = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountMinted = token.cumulativeAmountMinted
        tokenMetrics.dailyAmountBurned = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountBurned = token.cumulativeAmountBurned
        tokenMetrics.dailyAmountBurnedUSD = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountBurnedUSD = token.cumulativeAmountBurnedUSD
        tokenMetrics.dailyVolume = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeVolume = token.cumulativeVolume
        tokenMetrics.dailyVolumeUSD = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeVolumeUSD = token.cumulativeVolumeUSD
        tokenMetrics.circulatingAmount = BIGDECIMAL_ZERO
        tokenMetrics.marketCapitalization = token.marketCapitalization
        tokenMetrics.lastPriceUSD = token.lastPriceUSD
        tokenMetrics.lastPriceBlockNumber = event.block.number
  
        tokenMetrics.save();
    }
  
    return tokenMetrics;
  }

  export function getOrCreateTokenMetricsHourlySnapshot(event: ethereum.Event, token: Token): TokenHourlySnapshot {
    // Number of days since Unix epoch
    let hour = event.block.timestamp.toI32() / SECONDS_PER_HOUR;
    let hourId = hour.toString();
    let tokenHourId = token.id + ' - ' + hourId;
  
    // Create unique id for the day
    let tokenMetrics = TokenHourlySnapshot.load(tokenHourId);
  
    if (!tokenMetrics) {
        tokenMetrics = new TokenHourlySnapshot(tokenHourId);

        tokenMetrics.network = token.network
        tokenMetrics.type = token.type
        tokenMetrics.name = token.name
        tokenMetrics.symbol = token.symbol
        tokenMetrics.decimals = token.decimals
        tokenMetrics.hourlyAmountMinted = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountMinted = token.cumulativeAmountMinted
        tokenMetrics.hourlyAmountBurned = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountBurned = token.cumulativeAmountBurned
        tokenMetrics.hourlyAmountBurnedUSD = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeAmountBurnedUSD = token.cumulativeAmountBurnedUSD
        tokenMetrics.hourlyVolume = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeVolume = token.cumulativeVolume
        tokenMetrics.hourlyVolumeUSD = BIGDECIMAL_ZERO
        tokenMetrics.cumulativeVolumeUSD = token.cumulativeVolumeUSD
        tokenMetrics.circulatingAmount = BIGDECIMAL_ZERO
        tokenMetrics.marketCapitalization = token.marketCapitalization
        tokenMetrics.lastPriceUSD = token.lastPriceUSD
        tokenMetrics.lastPriceBlockNumber = event.block.number

        tokenMetrics.save();
    }
  
    return tokenMetrics;
  }

export function getOrCreateAccountDailySnapshot(event: ethereum.Event, account: Account): AccountDailySnapshot {
    // Number of days since Unix epoch
    let id = event.block.timestamp.toI32() / SECONDS_PER_DAY;
    let dayId = id.toString();
    let accountDayId = account.id + ' - ' + dayId;

    // Create unique id for the day
    let accountMetrics = AccountDailySnapshot.load(accountDayId);

    if (!accountMetrics) {
        accountMetrics = new AccountDailySnapshot(accountDayId);
        accountMetrics.network = account.network
        accountMetrics.token = account.token
        accountMetrics.balance = account.balance
        accountMetrics.balanceUSD = account.balanceUSD
        accountMetrics.dailyVolume = BIGDECIMAL_ZERO
        accountMetrics.cumulativeVolume = account.cumulativeVolume
        accountMetrics.dailyVolumeUSD = BIGDECIMAL_ZERO
        accountMetrics.cumulativeVolumeUSD = account.cumulativeVolumeUSD
        accountMetrics.dailyTransfersInCount = BIGINT_ZERO
        accountMetrics.cumulativeTransfersInCount = account.cumulativeTransfersInCount
        accountMetrics.dailyTransfersOutCount = BIGINT_ZERO
        accountMetrics.cumulativeTransfersOutCount = account.cumulativeTransfersOutCount
        accountMetrics.timestamp = event.block.timestamp
        accountMetrics.blockNumber = event.block.number

        
        accountMetrics.save();
    }
  
    return accountMetrics;
}
