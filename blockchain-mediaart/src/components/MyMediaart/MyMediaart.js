import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../p5s/sketch'
import Provider from '../web3s/Provider';

function ReturnKitty(props) {
  return <h1>123 {props.kitty}</h1>
}

class MyMediaart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ethereumConnected : false,
      kitty: "알 수 없음"
    }

    this.connectToEthereum = this.connectToEthereum.bind(this)
  }

  componentDidMount() {
  
  }

  connectToEthereum() {
    if (this.state.ethereumConnected) {
      // const kitty = startApp();
      // this.setState({
      //   kitty: kitty
      // })

      // startApp()
      

    } else {
      return "이더리움과 연결이 안됐어요"
    }
  }

  render() {
    let kitty = this.connectToEthereum()
    console.log("kitty : " + kitty)
    console.log("ethereum connected : " + this.state.ethereumConnected)

    return (
      <div>
        <Provider />
        <div>My mediaart page</div>
        <P5Wrapper sketch={sketch} />
        <ReturnKitty kitty={ kitty } />
      </div>
    );
  }
}

export default MyMediaart;