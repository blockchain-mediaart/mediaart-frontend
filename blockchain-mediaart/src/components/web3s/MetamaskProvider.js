import Web3 from 'web3';

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
      alert("크롬을 사용해주세요")
    }
  });
}