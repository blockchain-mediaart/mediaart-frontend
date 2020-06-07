import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

import P5withWeb3 from '../p5s/P5WithWeb3'
import Web3ProviderConnectButton from '../web3s/Web3ProviderConnectButton';
import checkEtherConnected from '../web3s/checkEtherConnected';
import Web3 from 'web3';
import { mediarArtABI, mediaArtAddress } from '../web3s/abis/mediaartABI';

// const web3Context = useWeb3();

class MyMediaart extends React.Component {

  constructor(props) {
    super(props);
    // this.web3Context = web3Context;
    this.state = {
      value: '',
      code: null,
      accountConnected: false,
      thisAddressHasMediaart: true,
      codeFromSC: '',
      mediaartName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.inputCode = this.inputCode.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.changeCodeBack = this.changeCodeBack.bind(this);
    this.sendChangedCodeToSmartContract = this.sendChangedCodeToSmartContract.bind(this);

    this.modifyP5WhenError = this.modifyP5WhenError.bind(this);

    this.useWeb3Context = this.useWeb3Context.bind(this);

    this.getMediaartName = this.getMediaartName.bind(this);
    this.createMediaart = this.createMediaart.bind(this);
    this._createMediaart = this._createMediaart.bind(this);

  }

  componentDidMount() {
    checkEtherConnected().then(() => {
      this.setState({ accountConnected: true })
      this.useWeb3Context()
    })
    console.log(window.web3.givenProvider.selectedAddress);

  }

  /// Web3로 블록체인 호출하는 부분
  getMediaartName(address) {
    const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);

    // contract.methods.getMediaart_name(0).call()
    try { contract.methods.get(address).call()
      .then((result) => {

        let rs = JSON.stringify(result);
        rs = rs.replace(/[\[\]']+/g, '');
        // rs = rs.split(',');
        let rsAsArray = rs.match(/\w+|"[^"]+"/g);
        console.log("Res : " + typeof rsAsArray);
        console.log("rrrr: " + rsAsArray[1]);
        removeDoubleQuotesFromArray(rsAsArray);


        this.setState({
          name: rsAsArray[0],
          codeFromSC: rsAsArray[1],
          code: rsAsArray[1]
        });


        // this.setState({ codeFromSC: rs, code: rs })
      }) } catch(e) {
        console.log("error with call() : "+ e)
      }
  }

  useWeb3Context() {
    if (this.state.accountConnected) {
      const address = window.web3.givenProvider.selectedAddress;
      this.getMediaartName(address)


      // this.createMediaart(address);
    }
  }

  /// 사용자가 P5.js 코드 입력, 수정하는 부분 
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  changeCode() {
    this.setState({ code: this.state.value });
  }

  changeCodeBack() {
    const cd = this.state.codeFromSC;
    this.setState({ code: cd });
  }

  sendChangedCodeToSmartContract() {


    const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
    const address = window.web3.givenProvider.selectedAddress;

    const p5ToBeSent = this.state.value.trim() // replace('/\n','/');
    console.log("code to be sent : " + p5ToBeSent);

    contract.methods.edit(address, 0, p5ToBeSent).send({ from: address })
      .then(() => {
        this.setState({ codeFromSC: this.state.value });
        alert("수정된 미디어아트가 블록체인에 기록되었습니다")
      })
  }

  _createMediaart() {
    if (this.state.accountConnected) {

      const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
      const address = window.web3.givenProvider.selectedAddress;
      const p5 = "p.normalMaterial();p.translate(50, 0, 0);p.push();p.rotateZ(p.frameCount * 0.01);p.rotateX(p.frameCount * 0.01);p.rotateY(p.frameCount * 0.01);p.box(70, 70, 70);p.pop();"

      contract.methods.createMediaart("KEUM_art", p5, address).send({ from: address })
    }
  }
  /// create mediaart 
  createMediaart(address) {

    const nameStyle = {
      "font-size": "3em",
      "text-align": "center",
    }
    const buttonStyle = {
      "height": "5em"
    }
    return (
      <div>
        <h1 style={nameStyle}>당신의 계정과 연결된 미디어 아트가 없습니다</h1>
        <button style={buttonStyle} onClick={this._createMediaart}>미디어아트 생성하기</button>
      </div>
    );
  }

  modifyP5WhenError(val) {
    this.setState({ code: val })
    // console.log(val);
  }

  inputCode() {

    const buttonStyle ={
      "padding-bottom": "50px"
    
    }
    return (
      <div>
        <label>
          Name:
            <textarea rows="10" cols="70" value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <div style={buttonStyle}>
        <button onClick={this.changeCode} > 코드 반영하기</button>
        <button onClick={this.changeCodeBack} > 원래 미디어아트로 되돌리기</button>
        <button style ={ {"background-color": "red" }} onClick={this.sendChangedCodeToSmartContract} > 블록체인에 변경된 코드 기록하기</button>
        </div>
      </div>
    );
  }

  render() {

    const inputCode = this.inputCode();
    const createMediaart = this.createMediaart();
    const thisAddressHasMediaart = this.state.thisAddressHasMediaart;

    if (thisAddressHasMediaart) {
      return (
        <div>
          <P5withWeb3 codeInput={this.state.code} name={this.state.name} />
          {inputCode}
        </div>
      );
    }

    return (
      <div>
        {createMediaart}
      </div>
    );
  }
}

export default MyMediaart;

function removeDoubleQuotesFromArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/"/g, "");
  }
}
