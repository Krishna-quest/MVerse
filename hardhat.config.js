require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
// require("@openzeppelin/hardhat-upgrades");

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 1337
    // },
    // klaytn: {
    //   host: '127.0.0.1',
    //   port: 8551,
    //   from: '0xa5ca377e618ac91a1fc2aafdb11857112a85e484', // enter your account address
    //   network_id: '1001', // Baobab network id
    //   gas: 20000000, // transaction gas limit
    //   gasPrice: 25000000000, // gasPrice of Baobab is 25 Gpeb
    // },
    
    klaytn: {
      url: `https://kaikas.baobab.klaytn.net:8651/`,
      accounts: [privateKey],
      chainId: 1001,
      live: true,
      saveDeployments: true,
      gas: 20000000,
      gasPrice: 25000000000,
      tags: ["staging"],
    },


    mumbai: {
      // Infura
      //url: `https://polygon-mumbai.infura.io/v3/a5901bf550824c80920ffb3487e25458`,
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [privateKey],
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 5,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/e45e320f3321476db2c9d69d8502e987`,
      accounts: [privateKey],
      chainId: 3,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/e45e320f3321476db2c9d69d8502e987`,
      accounts: [privateKey],
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    matic: {
      
      //url:"https://rpc-mainnet.matic.network", 
      //url:"https://matic-mainnet.chainstacklabs.com",
      url:"https://rpc-mainnet.maticvigil.com",
      //url:"https://rpc-mainnet.matic.quiknode.pro",
      //url:"https://matic-mainnet-full-rpc.bwarelabs.com",
      //url:https://polygon-mainnet.g.alchemy.com/v2/y3gGZupJU_7L8bGQmAMBzyV9MzeAFOao,
       //url: `https://polygon-mainnet.infura.io/v3/a5901bf550824c80920ffb3487e25458`,
      //url: "https://polygon-mainnet.g.alchemy.com/v2/y3gGZupJU_7L8bGQmAMBzyV9MzeAFOao",
     // url : 'https://matic-mainnet-full-rpc.bwarelabs.com',
      accounts: [privateKey],
      // gasPrice: 700000000000,
      chainId: 137,
      // live: true,
      // saveDeployments: true,
      // tags: ["staging"],
      // gasPrice: 700000000000,
      // gasMultiplier: 5,
      //  timeout: 3600,
    },
   
    
  },
  etherscan: {
    apiKey : 'VE8GYGJKHIFH77QZJEJWRVQ1QD3A9FGZ7Q'
  // },
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
