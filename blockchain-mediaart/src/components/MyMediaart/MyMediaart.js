import React from 'react';

import P5withWeb3 from '../p5s/P5WithWeb3'
import Web3ProviderConnectButton from '../web3s/Web3ProviderConnectButton';
import checkEtherConnected from '../web3s/checkEtherConnected';

class MyMediaart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    checkEtherConnected()
  }

  // connectToEthereum() {

  // }

  render() {
    return (
      <div>
        <Web3ProviderConnectButton />
        <P5withWeb3 />
      </div>
    );
  }
}

export default MyMediaart;