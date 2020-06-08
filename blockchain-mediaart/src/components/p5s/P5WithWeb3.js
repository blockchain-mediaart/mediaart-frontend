import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';
import P5Wrapper from 'react-p5-wrapper';
import { Redirect } from 'react-router';

import './P5WithWeb3.css';
import './p5Canvas.css';
import sketch from "./sketch";

export default function P5WithWeb3(props) {
  const web3Context = useWeb3();
  const { networkId, networkName, accounts } = web3Context;

  const code = "";
  let codeInput = props.codeInput;
  // console.log("codeInput : " +codeInput)
  let name = props.name;

  let color = 100;

  const passToNetworkId = (id) => {
    props.netId(id)
  }

  const p5CanvasStyle= {
    "width": "80%",
    "margin": "auto",
    "border": "1.6px groove grey",
    "border-radius": "8px",
    "padding": "10px"
  }

  const nameFont = {
    "fontSize": "3em"
  }

  return (
    <div className="provider"style={p5CanvasStyle}>
      
      <h1 style={nameFont}>{name}</h1>

      {accounts && accounts.length && networkId === 3 ?
        <P5Wrapper sketch={sketch} code={codeInput ? codeInput : code} />
        : accounts && accounts.length ?
         <ReDirectWhenDisconnectd networkName={networkName} />
          : <h1 style={{ "fontSize": "2em"}}>이더리움 네트워크에 연결되지 않아 나의 미디어 아트를 불러올 수 없습니다.</h1>

      }
      
    </div>
  );
}

function ReDirectWhenDisconnectd(props) {
  return(
    <div>
    <h1 style={{ "fontSize": "2em"}} >Ropsten Testnet이 아닌 {props.networkName} 이더리움에 연결되어 있어 나의 미디어 아트를 불러올 수 없습니다. Ropsten Testnet으로 네트워크 설정을 변경해 주세요</h1>
         
  </div>
  )

}


