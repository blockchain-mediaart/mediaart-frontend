import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';
import P5Wrapper from 'react-p5-wrapper';

import './P5WithWeb3.css';
import './p5Canvas.css';
import sketch from "./sketch";

export default function P5WithWeb3(props) {
  const web3Context = useWeb3();
  const { networkId, networkName, accounts } = web3Context;

  const code = "";
  let codeInput = props.codeInput;
  // console.log(codeInput)
  let name = props.name;

  let color = 100;

  const p5CanvasStyle= {
    "width": "80%",
    "margin": "auto",
    // "border-style": "groove",
    "border": "1.6px groove grey",
    // "box-shadow": "1px 1px 1px 1px grey",
    "border-radius": "8px",
    
    "padding": "10px"
  }

  const nameFont = {
    "font-size": "3em"
  }

  return (
    <div className="provider"style={p5CanvasStyle}>
      
      <h1 style={nameFont}>{name}</h1>
      {accounts && accounts.length && networkId === 3 ?
        <P5Wrapper sketch={sketch} code={codeInput ? codeInput : code} />
        : accounts && accounts.length ?
          <h1>Ropsten Testnet이 아닌 {networkName} 이더리움에 연결되어 있어 나의 미디어 아트를 불러올 수 없습니다. Ropsten Testnet으로 네트워크 설정을 변경해 주세요</h1>
          : <h1>이더리움 네트워크에 연결되지 않아 나의 미디어 아트를 불러올 수 없습니다.</h1>

      }
      
    </div>
  );
}



