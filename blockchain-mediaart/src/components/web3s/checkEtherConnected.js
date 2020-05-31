import Web3 from 'web3';

export default async function checkEtherConnected() {
  // Modern dapp browsers
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();

      let account = window.web3.eth.accounts[0];
      // alert("account :" + account);
      // Acccounts no w exposed
      // web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
      console.log("error : " + error);
    }
  }

  // Legacy dapp browsers
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
}