import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../p5s/sketch'
import metamaskProvider from '../web3s/MetamaskProvider';

class MyMediaart extends React.Component {
  componentDidMount() {
    metamaskProvider();
  }


  render() {
    return (
      <div>
        <div>My mediaart page</div>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default MyMediaart;