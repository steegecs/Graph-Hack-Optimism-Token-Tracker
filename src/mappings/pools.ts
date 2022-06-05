// import { WETH_DAI_POOL, WETH_OP_POOL, WETH_USDC_POOL } from "../common/constants";
// import { Swap as SwapEvent} from "../../generated/templates/Pool/Pool";
// import { Pool as PoolTemplate } from "../../generated/templates";
// import { Address } from "@graphprotocol/graph-ts";


// PoolTemplate.create(Address.fromString(WETH_USDC_POOL));
// PoolTemplate.create(Address.fromString(WETH_DAI_POOL));

// export function sqrtPriceX96ToTokenPrices(sqrtPriceX96: BigInt, token0: Token, token1: Token): BigDecimal[] {
//     let num = sqrtPriceX96.times(sqrtPriceX96).toBigDecimal();
//     let denom = BigDecimal.fromString(Q192.toString());
//     let price1 = num
//       .div(denom)
//       .times(exponentToBigDecimal(token0.decimals))
//       .div(exponentToBigDecimal(token1.decimals));
  
//     let price0 = safeDiv(BIGDECIMAL_ONE, price1);
//     return [price0, price1];
//   }

// export function handleSwap(event: SwapEvent): void {
    
// }