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
      thisAddressHasMediaart: false,
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
    contract.methods.get(address).call()
      .then((result) => {
        let rs = JSON.stringify(result)
        // rs = rs.replace(/\\n/g, '');
        // rs = rs.replace(/['"]+/g, '');
        console.log("Res : " + rs);
        this.setState({name: rs});
        // this.setState({ codeFromSC: rs, code: rs })
      })
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

    contract.methods.edit(address, 0, p5ToBeSent).send({from: address})
    .then(() => {
      this.setState({ codeFromSC: this.state.value });
      alert("수정된 미디어아트가 블록체인에 저장되었습니다")
    })
  }

 _createMediaart() {
  if (this.state.accountConnected) {

  const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
  const address = window.web3.givenProvider.selectedAddress;
  const p5 = "normalMaterial();translate(50, 0, 0);push();rotateZ(frameCount * 0.01);rotateX(frameCount * 0.01);rotateY(frameCount * 0.01);box(70, 70, 70);pop();" 

  contract.methods.createMediaart("Keum_art", p5, address).send({from: address})
  }
 }
  /// create mediaart 
 createMediaart(address) {

    return (
      <div>
      <h1>당신의 계정과 연결된 미디어 아트가 없습니다</h1>
      <button onClick={this._createMediaart}>미디어아트 생성하기</button>
      </div>
    );
  }

  modifyP5WhenError(val) {
    this.setState({ code: val })
    // console.log(val);
  }

  inputCode() {
    return (
      <div>
        <label>
          Name:
            <textarea rows="10" cols="70" value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <button onClick={this.changeCode} > 코드 반영하기</button>
        <button onClick={this.changeCodeBack} > 원래 미디어아트로 되돌리기</button>
        <button onClick={this.sendChangedCodeToSmartContract} > 블록체인에 변경된 코드 기록하기</button>
      </div>
    );
  }

  render() {

    const inputCode = this.inputCode();
    const createMediaart = this.createMediaart();
    const thisAddressHasMediaart = this.state.thisAddressHasMediaart;

    return (
      <div>
        {/* {this.state.value} */}
        { thisAddressHasMediaart ?
          <P5withWeb3 codeInput={this.state.code} name={this.state.name}/>
          : createMediaart
        }
        {inputCode}
       
      </div>
    );
  }
}

export default MyMediaart;

