import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-circom";
// circuits
import circuits = require('./circuits.config.json')
import 'dotenv/config'
// set env var to the root of the project
//const INFURA_API_KEY = "KEY";
//const SEPOLIA_PRIVATE_KEY = "YOUR SEPOLIA PRIVATE KEY";
process.env.BASE_PATH = __dirname;
import 'dotenv/config';
// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks:{
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: ["289b80ff6b375a1aa73f1a83b3b2b1476dc50d1e37e193601c936e422f944e06"]
    },
  },
   
  
  

  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
