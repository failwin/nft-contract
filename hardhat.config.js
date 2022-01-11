const dotenv = require('dotenv') ;
dotenv.config();

require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const mnemonic = process.env.MNEMONIC;

const accounts = {
  mnemonic,
};

const config = {
  defaultNetwork: "hardhat",
  solidity: "0.8.4",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts
    },
    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      accounts,
    },
  },
};

module.exports = config;
