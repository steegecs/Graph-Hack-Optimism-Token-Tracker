import { Network, TokenType, TOKEN_SCHEMA_VERSION } from '../../../../../src/common/constants';
import { Configurations } from '../../../../../configurations/configurations/interface';
import { TOKEN_SUBGRAPH_VERSION, TOKEN_METHODOLOGY_VERSION } from '../../../src/common/constants';

export class OptimismMainnetConfigurations implements Configurations {
    getSubgraphVersion(): string {
        return TOKEN_SUBGRAPH_VERSION;
    }
    getMethodologyVersion(): string {
        return TOKEN_METHODOLOGY_VERSION;
    }
    getSchemaVersion(): string {
        return TOKEN_SCHEMA_VERSION;
    }
    getNetwork(): string {
        return Network.MAINNET;
    }
    getType(): string {
        return TokenType.ERC20
    }
    getTokenAddress(): string {
        return "0x4200000000000000000000000000000000000042";
    }
}