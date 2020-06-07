import Web3 from 'web3';

// import { mediarArtABI, mediaArtAddress } from './abis/mediaartABI';

// const provider = '1996225ed2c74de88755f84a756eaa65';

export default async function checkEtherConnected() {

  // const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/" + provider));
  
  // var contract = new web3.eth.Contract(mediarArtABI, mediaArtAddress);

  // console.log("method : " + contract.methods)

  // contract.methods.getMediaart_ballsize(0).call()
  // .then(function(result) {
  //   // console.log("result : " + JSON.stringify(result))
  // })

  // Modern dapp browsers
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts no w exposed
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