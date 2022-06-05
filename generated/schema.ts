// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("network", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromI32(0));
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "cumulativeAmountBurnedUSD",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("cumulativeVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("circulatingAmount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("marketCapitalization", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("lastPriceBlockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get cumulativeAmountMinted(): BigDecimal {
    let value = this.get("cumulativeAmountMinted");
    return value!.toBigDecimal();
  }

  set cumulativeAmountMinted(value: BigDecimal) {
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurned(): BigDecimal {
    let value = this.get("cumulativeAmountBurned");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurned(value: BigDecimal) {
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurnedUSD(): BigDecimal {
    let value = this.get("cumulativeAmountBurnedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurnedUSD(value: BigDecimal) {
    this.set("cumulativeAmountBurnedUSD", Value.fromBigDecimal(value));
  }

  get cumulativeVolume(): BigDecimal {
    let value = this.get("cumulativeVolume");
    return value!.toBigDecimal();
  }

  set cumulativeVolume(value: BigDecimal) {
    this.set("cumulativeVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolumeUSD(): BigDecimal {
    let value = this.get("cumulativeVolumeUSD");
    return value!.toBigDecimal();
  }

  set cumulativeVolumeUSD(value: BigDecimal) {
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(value));
  }

  get circulatingAmount(): BigDecimal {
    let value = this.get("circulatingAmount");
    return value!.toBigDecimal();
  }

  set circulatingAmount(value: BigDecimal) {
    this.set("circulatingAmount", Value.fromBigDecimal(value));
  }

  get marketCapitalization(): BigDecimal {
    let value = this.get("marketCapitalization");
    return value!.toBigDecimal();
  }

  set marketCapitalization(value: BigDecimal) {
    this.set("marketCapitalization", Value.fromBigDecimal(value));
  }

  get lastPriceUSD(): BigDecimal {
    let value = this.get("lastPriceUSD");
    return value!.toBigDecimal();
  }

  set lastPriceUSD(value: BigDecimal) {
    this.set("lastPriceUSD", Value.fromBigDecimal(value));
  }

  get lastPriceTimestamp(): BigInt {
    let value = this.get("lastPriceTimestamp");
    return value!.toBigInt();
  }

  set lastPriceTimestamp(value: BigInt) {
    this.set("lastPriceTimestamp", Value.fromBigInt(value));
  }

  get lastPriceBlockNumber(): BigInt {
    let value = this.get("lastPriceBlockNumber");
    return value!.toBigInt();
  }

  set lastPriceBlockNumber(value: BigInt) {
    this.set("lastPriceBlockNumber", Value.fromBigInt(value));
  }
}

export class TokenDailySnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("network", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromI32(0));
    this.set("dailyAmountMinted", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyAmountBurned", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyAmountBurnedUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "cumulativeAmountBurnedUSD",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("dailyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("circulatingAmount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("marketCapitalization", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("lastPriceBlockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenDailySnapshot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenDailySnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenDailySnapshot", id.toString(), this);
    }
  }

  static load(id: string): TokenDailySnapshot | null {
    return changetype<TokenDailySnapshot | null>(
      store.get("TokenDailySnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get dailyAmountMinted(): BigDecimal {
    let value = this.get("dailyAmountMinted");
    return value!.toBigDecimal();
  }

  set dailyAmountMinted(value: BigDecimal) {
    this.set("dailyAmountMinted", Value.fromBigDecimal(value));
  }

  get cumulativeAmountMinted(): BigDecimal {
    let value = this.get("cumulativeAmountMinted");
    return value!.toBigDecimal();
  }

  set cumulativeAmountMinted(value: BigDecimal) {
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(value));
  }

  get dailyAmountBurned(): BigDecimal {
    let value = this.get("dailyAmountBurned");
    return value!.toBigDecimal();
  }

  set dailyAmountBurned(value: BigDecimal) {
    this.set("dailyAmountBurned", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurned(): BigDecimal {
    let value = this.get("cumulativeAmountBurned");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurned(value: BigDecimal) {
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(value));
  }

  get dailyAmountBurnedUSD(): BigDecimal {
    let value = this.get("dailyAmountBurnedUSD");
    return value!.toBigDecimal();
  }

  set dailyAmountBurnedUSD(value: BigDecimal) {
    this.set("dailyAmountBurnedUSD", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurnedUSD(): BigDecimal {
    let value = this.get("cumulativeAmountBurnedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurnedUSD(value: BigDecimal) {
    this.set("cumulativeAmountBurnedUSD", Value.fromBigDecimal(value));
  }

  get dailyVolume(): BigDecimal {
    let value = this.get("dailyVolume");
    return value!.toBigDecimal();
  }

  set dailyVolume(value: BigDecimal) {
    this.set("dailyVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolume(): BigDecimal {
    let value = this.get("cumulativeVolume");
    return value!.toBigDecimal();
  }

  set cumulativeVolume(value: BigDecimal) {
    this.set("cumulativeVolume", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value!.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get cumulativeVolumeUSD(): BigDecimal {
    let value = this.get("cumulativeVolumeUSD");
    return value!.toBigDecimal();
  }

  set cumulativeVolumeUSD(value: BigDecimal) {
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(value));
  }

  get circulatingAmount(): BigDecimal {
    let value = this.get("circulatingAmount");
    return value!.toBigDecimal();
  }

  set circulatingAmount(value: BigDecimal) {
    this.set("circulatingAmount", Value.fromBigDecimal(value));
  }

  get marketCapitalization(): BigDecimal {
    let value = this.get("marketCapitalization");
    return value!.toBigDecimal();
  }

  set marketCapitalization(value: BigDecimal) {
    this.set("marketCapitalization", Value.fromBigDecimal(value));
  }

  get lastPriceUSD(): BigDecimal {
    let value = this.get("lastPriceUSD");
    return value!.toBigDecimal();
  }

  set lastPriceUSD(value: BigDecimal) {
    this.set("lastPriceUSD", Value.fromBigDecimal(value));
  }

  get lastPriceTimestamp(): BigInt {
    let value = this.get("lastPriceTimestamp");
    return value!.toBigInt();
  }

  set lastPriceTimestamp(value: BigInt) {
    this.set("lastPriceTimestamp", Value.fromBigInt(value));
  }

  get lastPriceBlockNumber(): BigInt {
    let value = this.get("lastPriceBlockNumber");
    return value!.toBigInt();
  }

  set lastPriceBlockNumber(value: BigInt) {
    this.set("lastPriceBlockNumber", Value.fromBigInt(value));
  }
}

export class TokenHourlySnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("network", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromI32(0));
    this.set("hourlyAmountMinted", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("hourlyAmountBurned", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("hourlyAmountBurnedUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "cumulativeAmountBurnedUSD",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("hourlyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("hourlyVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("circulatingAmount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("marketCapitalization", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastPriceTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("lastPriceBlockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenHourlySnapshot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenHourlySnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenHourlySnapshot", id.toString(), this);
    }
  }

  static load(id: string): TokenHourlySnapshot | null {
    return changetype<TokenHourlySnapshot | null>(
      store.get("TokenHourlySnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get hourlyAmountMinted(): BigDecimal {
    let value = this.get("hourlyAmountMinted");
    return value!.toBigDecimal();
  }

  set hourlyAmountMinted(value: BigDecimal) {
    this.set("hourlyAmountMinted", Value.fromBigDecimal(value));
  }

  get cumulativeAmountMinted(): BigDecimal {
    let value = this.get("cumulativeAmountMinted");
    return value!.toBigDecimal();
  }

  set cumulativeAmountMinted(value: BigDecimal) {
    this.set("cumulativeAmountMinted", Value.fromBigDecimal(value));
  }

  get hourlyAmountBurned(): BigDecimal {
    let value = this.get("hourlyAmountBurned");
    return value!.toBigDecimal();
  }

  set hourlyAmountBurned(value: BigDecimal) {
    this.set("hourlyAmountBurned", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurned(): BigDecimal {
    let value = this.get("cumulativeAmountBurned");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurned(value: BigDecimal) {
    this.set("cumulativeAmountBurned", Value.fromBigDecimal(value));
  }

  get hourlyAmountBurnedUSD(): BigDecimal {
    let value = this.get("hourlyAmountBurnedUSD");
    return value!.toBigDecimal();
  }

  set hourlyAmountBurnedUSD(value: BigDecimal) {
    this.set("hourlyAmountBurnedUSD", Value.fromBigDecimal(value));
  }

  get cumulativeAmountBurnedUSD(): BigDecimal {
    let value = this.get("cumulativeAmountBurnedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeAmountBurnedUSD(value: BigDecimal) {
    this.set("cumulativeAmountBurnedUSD", Value.fromBigDecimal(value));
  }

  get hourlyVolume(): BigDecimal {
    let value = this.get("hourlyVolume");
    return value!.toBigDecimal();
  }

  set hourlyVolume(value: BigDecimal) {
    this.set("hourlyVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolume(): BigDecimal {
    let value = this.get("cumulativeVolume");
    return value!.toBigDecimal();
  }

  set cumulativeVolume(value: BigDecimal) {
    this.set("cumulativeVolume", Value.fromBigDecimal(value));
  }

  get hourlyVolumeUSD(): BigDecimal {
    let value = this.get("hourlyVolumeUSD");
    return value!.toBigDecimal();
  }

  set hourlyVolumeUSD(value: BigDecimal) {
    this.set("hourlyVolumeUSD", Value.fromBigDecimal(value));
  }

  get cumulativeVolumeUSD(): BigDecimal {
    let value = this.get("cumulativeVolumeUSD");
    return value!.toBigDecimal();
  }

  set cumulativeVolumeUSD(value: BigDecimal) {
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(value));
  }

  get circulatingAmount(): BigDecimal {
    let value = this.get("circulatingAmount");
    return value!.toBigDecimal();
  }

  set circulatingAmount(value: BigDecimal) {
    this.set("circulatingAmount", Value.fromBigDecimal(value));
  }

  get marketCapitalization(): BigDecimal {
    let value = this.get("marketCapitalization");
    return value!.toBigDecimal();
  }

  set marketCapitalization(value: BigDecimal) {
    this.set("marketCapitalization", Value.fromBigDecimal(value));
  }

  get lastPriceUSD(): BigDecimal {
    let value = this.get("lastPriceUSD");
    return value!.toBigDecimal();
  }

  set lastPriceUSD(value: BigDecimal) {
    this.set("lastPriceUSD", Value.fromBigDecimal(value));
  }

  get lastPriceTimestamp(): BigInt {
    let value = this.get("lastPriceTimestamp");
    return value!.toBigInt();
  }

  set lastPriceTimestamp(value: BigInt) {
    this.set("lastPriceTimestamp", Value.fromBigInt(value));
  }

  get lastPriceBlockNumber(): BigInt {
    let value = this.get("lastPriceBlockNumber");
    return value!.toBigInt();
  }

  set lastPriceBlockNumber(value: BigInt) {
    this.set("lastPriceBlockNumber", Value.fromBigInt(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("network", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("balance", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("balanceUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeTransfersInCount", Value.fromBigInt(BigInt.zero()));
    this.set("cumulativeTransfersOutCount", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get balanceUSD(): BigDecimal {
    let value = this.get("balanceUSD");
    return value!.toBigDecimal();
  }

  set balanceUSD(value: BigDecimal) {
    this.set("balanceUSD", Value.fromBigDecimal(value));
  }

  get dailyVolume(): BigDecimal {
    let value = this.get("dailyVolume");
    return value!.toBigDecimal();
  }

  set dailyVolume(value: BigDecimal) {
    this.set("dailyVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolume(): BigDecimal {
    let value = this.get("cumulativeVolume");
    return value!.toBigDecimal();
  }

  set cumulativeVolume(value: BigDecimal) {
    this.set("cumulativeVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolumeUSD(): BigDecimal {
    let value = this.get("cumulativeVolumeUSD");
    return value!.toBigDecimal();
  }

  set cumulativeVolumeUSD(value: BigDecimal) {
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(value));
  }

  get cumulativeTransfersInCount(): BigInt {
    let value = this.get("cumulativeTransfersInCount");
    return value!.toBigInt();
  }

  set cumulativeTransfersInCount(value: BigInt) {
    this.set("cumulativeTransfersInCount", Value.fromBigInt(value));
  }

  get cumulativeTransfersOutCount(): BigInt {
    let value = this.get("cumulativeTransfersOutCount");
    return value!.toBigInt();
  }

  set cumulativeTransfersOutCount(value: BigInt) {
    this.set("cumulativeTransfersOutCount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class AccountDailySnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("network", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("balance", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("balanceUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyTransfersInCount", Value.fromBigInt(BigInt.zero()));
    this.set("cumulativeTransfersInCount", Value.fromBigInt(BigInt.zero()));
    this.set("dailyTransfersOutCount", Value.fromBigInt(BigInt.zero()));
    this.set("cumulativeTransfersOutCount", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountDailySnapshot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccountDailySnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccountDailySnapshot", id.toString(), this);
    }
  }

  static load(id: string): AccountDailySnapshot | null {
    return changetype<AccountDailySnapshot | null>(
      store.get("AccountDailySnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get balanceUSD(): BigDecimal {
    let value = this.get("balanceUSD");
    return value!.toBigDecimal();
  }

  set balanceUSD(value: BigDecimal) {
    this.set("balanceUSD", Value.fromBigDecimal(value));
  }

  get dailyVolume(): BigDecimal {
    let value = this.get("dailyVolume");
    return value!.toBigDecimal();
  }

  set dailyVolume(value: BigDecimal) {
    this.set("dailyVolume", Value.fromBigDecimal(value));
  }

  get cumulativeVolume(): BigDecimal {
    let value = this.get("cumulativeVolume");
    return value!.toBigDecimal();
  }

  set cumulativeVolume(value: BigDecimal) {
    this.set("cumulativeVolume", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value!.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get cumulativeVolumeUSD(): BigDecimal {
    let value = this.get("cumulativeVolumeUSD");
    return value!.toBigDecimal();
  }

  set cumulativeVolumeUSD(value: BigDecimal) {
    this.set("cumulativeVolumeUSD", Value.fromBigDecimal(value));
  }

  get dailyTransfersInCount(): BigInt {
    let value = this.get("dailyTransfersInCount");
    return value!.toBigInt();
  }

  set dailyTransfersInCount(value: BigInt) {
    this.set("dailyTransfersInCount", Value.fromBigInt(value));
  }

  get cumulativeTransfersInCount(): BigInt {
    let value = this.get("cumulativeTransfersInCount");
    return value!.toBigInt();
  }

  set cumulativeTransfersInCount(value: BigInt) {
    this.set("cumulativeTransfersInCount", Value.fromBigInt(value));
  }

  get dailyTransfersOutCount(): BigInt {
    let value = this.get("dailyTransfersOutCount");
    return value!.toBigInt();
  }

  set dailyTransfersOutCount(value: BigInt) {
    this.set("dailyTransfersOutCount", Value.fromBigInt(value));
  }

  get cumulativeTransfersOutCount(): BigInt {
    let value = this.get("cumulativeTransfersOutCount");
    return value!.toBigInt();
  }

  set cumulativeTransfersOutCount(value: BigInt) {
    this.set("cumulativeTransfersOutCount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("type", Value.fromString(""));
    this.set("hash", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("amountUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal {
    let value = this.get("amountUSD");
    return value!.toBigDecimal();
  }

  set amountUSD(value: BigDecimal) {
    this.set("amountUSD", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class _LiquidityPoolAmount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("inputTokens", Value.fromStringArray(new Array(0)));
    this.set("inputTokenBalances", Value.fromBigDecimalArray(new Array(0)));
    this.set("tokenPrices", Value.fromBigDecimalArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _LiquidityPoolAmount entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _LiquidityPoolAmount must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_LiquidityPoolAmount", id.toString(), this);
    }
  }

  static load(id: string): _LiquidityPoolAmount | null {
    return changetype<_LiquidityPoolAmount | null>(
      store.get("_LiquidityPoolAmount", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inputTokens(): Array<string> {
    let value = this.get("inputTokens");
    return value!.toStringArray();
  }

  set inputTokens(value: Array<string>) {
    this.set("inputTokens", Value.fromStringArray(value));
  }

  get inputTokenBalances(): Array<BigDecimal> {
    let value = this.get("inputTokenBalances");
    return value!.toBigDecimalArray();
  }

  set inputTokenBalances(value: Array<BigDecimal>) {
    this.set("inputTokenBalances", Value.fromBigDecimalArray(value));
  }

  get tokenPrices(): Array<BigDecimal> {
    let value = this.get("tokenPrices");
    return value!.toBigDecimalArray();
  }

  set tokenPrices(value: Array<BigDecimal>) {
    this.set("tokenPrices", Value.fromBigDecimalArray(value));
  }
}
