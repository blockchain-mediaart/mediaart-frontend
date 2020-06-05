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
    this.state = { value: '', code: null, accountConnected: false }

    this.handleChange = this.handleChange.bind(this);
    this.inputCode = this.inputCode.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.modifyP5WhenError = this.modifyP5WhenError.bind(this);
    this.useWeb3Context = this.useWeb3Context.bind(this);
    this.getMediaartName = this.getMediaartName.bind(this);
  }

  componentDidMount() {
    checkEtherConnected().then(() => {
      this.setState({ accountConnected: true })
      this.useWeb3Context()
    })
    console.log(window.web3.givenProvider.selectedAddress);

  }

  /// Web3로 블록체인 호출하는 부분
  getMediaartName() {
    const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);

    contract.methods.getMediaart(0).call()
      .then((result) => {
        const rs = JSON.stringify(result)
        console.log("Res : " + rs);
        this.setState({ value: rs })
      })
  }

  useWeb3Context() {
    if (this.state.accountConnected) {
      this.getMediaartName()
    }
  }

  /// 사용자가 P5.js 코드 입력, 수정하는 부분 
  handleChange(event) {
    this.setState({ value: event.target.value, code: null });
  }

  changeCode() {
    this.setState({ code: this.state.value });
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
      </div>
    );
  }
 
  render() {

    const inputCode = this.inputCode();

    return (
      <div>
        {this.state.value}
        <P5withWeb3 codeInput={this.state.code} />
        {inputCode}
      </div>
    );
  }

 
}

export default MyMediaart;

