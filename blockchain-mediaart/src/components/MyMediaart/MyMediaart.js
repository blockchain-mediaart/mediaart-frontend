import React from 'react';

import P5withWeb3 from '../p5s/P5WithWeb3'
import Web3ProviderConnectButton from '../web3s/Web3ProviderConnectButton';
import checkEtherConnected from '../web3s/checkEtherConnected';

class MyMediaart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {value: '', code: null}
    this.handleChange = this.handleChange.bind(this);
    this.inputCode = this.inputCode.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.modifyP5WhenError = this.modifyP5WhenError.bind(this);
  }

  componentDidMount() {
    checkEtherConnected()
  }

  render() {

    const inputCode = this.inputCode();
    return (
      <div>
        <Web3ProviderConnectButton />
        <P5withWeb3 codeInput={this.state.code} />
        {inputCode}
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value, code: null});

    console.log("code : " + this.state.value);
  }

  changeCode() {
    this.setState({code: this.state.value});
    console.log("code : " + this.state.code);

  }

  modifyP5WhenError(val){
    this.setState({code: val})
    // console.log(val);
  }

  inputCode() {
    return (
      <div>
      {/* <form onSubmit={this.handleSubmit}> */}
        {/* <form> */}
          <label>
            Name:
            <textarea rows="10" cols="70" value={this.state.value} onChange={this.handleChange}></textarea>
            {/* <input type="textarea" size="100" value={this.state.value} onChange={this.handleChange} /> */}
          </label>
          <button onClick={this.changeCode} > 코드 반영하기</button>
          {/* <input type="button" value="Submit" onclick={this.changeCode} /> */}
      {/* </form> */}
      </div>
    );
  }
}

export default MyMediaart;

