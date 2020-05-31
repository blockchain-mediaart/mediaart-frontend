import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../p5s/sketch'
// import Provider, {startApp} from '../web3s/Provider';
import Web3ProviderConnectButton from '../web3s/Web3ProviderConnectButton';
import checkEtherConnected from '../web3s/checkEtherConnected';

function ReturnKitty(props) {
  return <h1>123 {props.kitty}</h1>
}

class MyMediaart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // ethereumConnected : false,
      kitty: "알 수 없음"
    }

    this.connectToEthereum = this.connectToEthereum.bind(this)
  }

  componentDidMount() {
    checkEtherConnected()
  
  }

  connectToEthereum() {
    if (this.state.ethereumConnected) {
      // const kitty = startApp();
      // this.setState({
      //   kitty: kitty
      // })

      // startApp()
      

    } else {

      
    }
  }

  render() {
  
    // console.log("kitty : " + kitty)
    console.log("ethereum connected : " + this.state.ethereumConnected)

    return (
      <div>
        {/* <Provider /> */}
        {this.state.ethereumConnected ? "이더리움에 연결되었습니다" : "이더리움에 연결되지 않았습니다"}
        <Web3ProviderConnectButton />
        <div>My mediaart page</div>
        <P5Wrapper sketch={sketch} />
        {/* <ReturnKitty kitty={ kitty } /> */}
      </div>
    );
  }
}

export default MyMediaart;