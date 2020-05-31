import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';
import Web3 from 'web3';


import Web3Data from './Web3Data';
import { cryptokittiesABI, cryptoKittiesAddress } from './abis/cryptokittiesABI';

// const infuraProjectId = 'a016e377bb3347';

const mediaAddress = '0x9911c43993fd3700c283f5128670e9604340792b';

// async export default function Provider() {  
//   const web3Context = useWeb3();

//   const { lib } = web3Context;
//   const cryptoKitties = new lib.eth.Contract(cryptokittiesABI, mediaAddress);
//  await cryptoKitties.methods.getMediaart(0)
//  .then(function(result) {
//  return result }
//  )
  
//   // cryptoKitties.getMediaart_ballsize(0).getMedaiaart().call()

//   return (
//     <div className="provider">
//       <h1>Infura React Dapp with Components!</h1>
//       <Web3Data title="Web3 Data" web3Context={web3Context} />
//       {/* <GetMyMediaArt web3 = { useWeb3 }/> */}
//       {/* {cryptoKitties} */}
//       {/* <Mart web3Context={web3Context} /> */}
//     </div>
//   );
// }

export async function startApp() {

  const mediaAddress = '0x9911c43993fd3700c283f5128670e9604340792b';
  const webProvider = "wss://ropsten.infura.io/ws/v3/1996225ed2c74de88755f84a756eaa65";

  // const web32 = new Web3("https://ropsten.infura.io/v3/1996225ed2c74de88755f84a756eaa65");
  // console.log("current provider : " + web32)
  // const web32 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/1996225ed2c74de88755f84a756eaa65"));
  
  
  var web3 = new Web3(new Web3.providers.WebsocketProvider(webProvider));
  // web3.defaultAccount = mediaAddress;
  const mediaart = new web3.eth.Contract(cryptokittiesABI, mediaAddress);

  // cryptoKitties.methods.getKitty(20)
  // console.log(kitty)
  // return kitty
  console.log("로그");
  console.log(mediaart.methods);
  mediaart.methods['getMediaart(uint256)'](0).call()
  .then(console.log)
  // .then(function(result) {
  //   console.log("result" + result)

  //   return result
  // })
  
};