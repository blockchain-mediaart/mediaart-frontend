import Web3 from 'web3';

import cryptoKittiesABI from './abis/cryptokittiesABI';

const cryptoKittiesAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";

function startApp() {
  const cryptoKitties = new window.web3.eth.Contract(cryptoKittiesABI, cryptoKittiesAddress);

  // console.log("abi : " + JSON.stringify(cryptoKittiesABI));
  cryptoKitties.methods.getKitty(100).call()
  .then(function(result) {
    console.log("kitty : " + result);
  });

  function getKittyInfo(id) {
    return cryptoKitties.methods.getKitty(id).call()
  };
};

export default function metamaskProvider() {

  window.addEventListener('load', async () => {
    
    // Modern dapp browsers...
    if (window.ethereum) {
      // console.log("123 : " +  ethereum);
      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();

        let account = window.web3.eth.accounts[0];
        alert("account :" + account);
        // Acccounts no w exposed
        // web3.eth.sendTransaction({/* ... */});
      } catch (error) {
        // User denied account access...
        // console.log("error : " + error);
      }
    }

    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      // Acccounts always exposed
      // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      alert("이 브라우저에서는 이더리움과 소통할 수 없습니다. Chrome 브라우저를 사용해주세요")
    }
    startApp();
  });
}