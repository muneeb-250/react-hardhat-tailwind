/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: 'localhost',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}
