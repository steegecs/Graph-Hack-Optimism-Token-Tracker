import { OptimismOptimismConfigurations } from "../../tokens/optimism/config/networks/optimism/optimism";
import { OptimismMainnetConfigurations } from "../../tokens/optimism/config/networks/mainnet/mainnet";
import { Configurations } from "./interface";
import { Deploy } from "./deploy";
import { log } from "@graphprotocol/graph-ts";

export function getNetworkConfigurations(deploy: i32): Configurations {
    switch(deploy) {

        case Deploy.OPTIMISM_OPTIMISM: {
            return new OptimismOptimismConfigurations();
        } case Deploy.OPTIMISM_MAINNET: {
            return new OptimismMainnetConfigurations();
        } default: {
            log.critical("No configurations found for deployment protocol/network", []);
            return new OptimismMainnetConfigurations();
        }
    }
}
