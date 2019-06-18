const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider('base square woman track mystery easy woman flush valley disorder vibrant leisure', 'https://rinkeby.infura.io/v3/12b426e8fcc34c918de0f1826dbd6015')

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying from account ', accounts[0])
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi There!'] })
    .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address)
};
deploy();
