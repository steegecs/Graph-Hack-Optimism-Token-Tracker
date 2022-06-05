import * as tokenNetworkData from './deploymentConfigurations.json' assert {type: "json"}
import {getDeploymentNetwork, runCommands, scripts} from './execution.js'

const tokenNetworkMap = JSON.parse(JSON.stringify(tokenNetworkData))['default']['tokens'] 
const configurations = JSON.parse(JSON.stringify(tokenNetworkData))['default']['configurations'] 

let allScripts = new Map()
let results = "RESULTS:\n"

if (process.argv.length == 2) {
    console.log('Error: please at least specify hosted service account to deploy all subgraphs (i.e. messari, steegecs, etc.)')
} else if (process.argv.length == 3) {
    if (!process.argv[2] in configurations['deployment']['locations']) {
        console.log('Error: please specify a deployment location only to deploy all subgraphs (i.e. steegecs, messari, etc.)')
    } else {
        for (const token in tokenNetworkMap) {
            for (const network in tokenNetworkMap[token]) {

                let template = tokenNetworkMap[token][network]['template']
                let location = ""

                // Get location for configurations or derive using standard naming convention
                if (process.argv[2] in tokenNetworkMap[token][network]) {
                    location = tokenNetworkMap[token][network][process.argv[2]]
                } else {
                    location = process.argv[2] + '/' + token + '-' + getDeploymentNetwork(network)
                }
                
                // Check if deployment is ignored in configurations
                if ([true, undefined].includes(tokenNetworkMap[token][network]['deploy-on-merge']) | process.argv[2] != 'messari') {
                    allScripts.set(location, scripts(token, network, template, location))
                } else {
                    results += "Ignored in Deployment Configurations: " + location + '\n'
                }
            }
        } 

        runCommands(allScripts, results, function(results) {});

    }
} else if (process.argv.length == 4) {
    if (!process.argv[2] in tokenNetworkMap) {
        console.log('Error: please specify a valid token as 1st argument (i.e. uniswap-v2, sushiswap, etc.)')
        console.log('To deploy all networks of a specified token, pass 2 arguements (token/location)')
    } else if (!process.argv[3] in configurations['deployment']['locations']) {
        console.log('Error: please specify a deployment location as 3rd argument (i.e. steegecs, messari, etc.)')
        console.log('To deploy a token to a specific network, pass 3 arguements (token/network/location)')
    } else {
        let token = process.argv[2]
        for (const network in tokenNetworkMap[token]) {
            let template = tokenNetworkMap[token][network]['template']
            let location = ""

            // Get location for configurations or derive using standard naming convention
            if (process.argv[3] in tokenNetworkMap[token][network]) {
                location = tokenNetworkMap[token][network][process.argv[3]]
            } else {
                location = process.argv[3] + '/' + token + '-' + getDeploymentNetwork(network)
            }
            
            // Check if deployment is ignored in configurations
            if ([true, undefined].includes(tokenNetworkMap[token][network]['deploy-on-merge']) | process.argv[3] != 'messari') {
                allScripts.set(location, scripts(token, network, template, location))
            } else {
                results += "Ignored in Deployment Configurations: " + location + '\n'
            }
        } 

        runCommands(allScripts, results, function(results) {});
    }
 } else if (process.argv.length == 5) {
    if (!process.argv[2] in tokenNetworkMap) {
        console.log('Error: please specify a valid token as 1st argument (i.e. uniswap-v2, sushiswap, etc.)')
        console.log('To deploy a token to a specific network, pass 3 arguements (token/network/location)')
    } else if (!process.argv[3] in tokenNetworkMap[process.argv[2]]) {
        console.log('Error: please specify a valid network as 2nd argument (i.e. mainnet, ropsten, etc.)')
        console.log('To deploy a token to a specific network, pass 3 arguements (token/network/location)')
    } else if (!process.argv[4] in configurations['deployment']['locations']) {
        console.log('Error: please specify a deployment location as 3rd argument (i.e. steegecs, messari, etc.)')
        console.log('To deploy a token to a specific network, pass 3 arguements (token/network/location)')
    } else {
        let token = process.argv[2]
        let network = process.argv[3]
        let template = tokenNetworkMap[token][network]['template']
        let location = ""
        
        // Get location for configurations or derive using standard naming convention
        if (process.argv[4] in tokenNetworkMap[token][network]) {
            location = tokenNetworkMap[token][network][process.argv[4]]
        } else {
            location = process.argv[4] + '/' + token + '-' + getDeploymentNetwork(network)
        }

        // Check if deployment is ignored in configurations
        if ([true, undefined].includes(tokenNetworkMap[token][network]['deploy-on-merge']) | process.argv[4] != 'messari') {
            allScripts.set(location, scripts(token, network, template, location))
        }else {
            results += "Ignored in Deployment Configurations: " + location + '\n'
        }
        runCommands(allScripts, results, function(results) {});
    } 
} else {
    console.log('Error: Too many arguments')
}
