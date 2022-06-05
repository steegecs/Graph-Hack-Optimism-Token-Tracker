# Graph-Hack-Optimism-Token-Tracker
This repository is used to store code for indexing a subgraph for an optimism token tracker

- See the schema.graphql file for a complete list of all fields that are being indexed with a description of their values.
- This subgraph tracks 3 main entities (transfer, account, and token) with in-depth data describing the movement of tokens and accounts.
- There are also daily and hourly snapshots for accounts and tokens that keep historical accounts of these entities.
- While this is my submission for the graph hack, it is incomplete. What I would have like to have completed is to connect the subgraph with an oracle like uniswap to get pricing data.
- The infrastructure has begun to be laid out for this including fields in the schema and code to index, but it is incomplete.
- Therefore, there are fields that track the USD value of tokens, volume, and balances, but they are all zero.
- Once an oracle is in place, all the code is already present to properly index the remaining fields.
- I attempted to design this program to be very composable for indexing optimism on other chains in addition to other ERC20 tokens
- Finally, there is a set of deployment scripts and configurations liad out in the deployments folder to make continuous updates and deployment of one or many tokens easy and efficient.
- Please let me know if you have any questions!
- The current deployment that is indexing the OP token on Optimism is located on the Hosted Service at: https://thegraph.com/hosted-service/subgraph/steegecs/optimism-optimism?selected=playgroundThis repository is used to store code for indexing a subgraph for an optimism token tracker

# Folder Structure
- Abis - contains all abis for deployment
- deployment - contains deployment scripts to make deplouyment easier and more efficient
- src - Contains all source code for general token tracing
- tokens - Contains token specific code and templates
- results.txt - contains console logs generated from deployment scrips 
