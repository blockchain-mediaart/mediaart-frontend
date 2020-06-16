import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';

import checkEtherConnected from '../web3s/checkEtherConnected';
import sketchWithSmartContract from './sketches/sketchWtihSmartContract';
import './Dashboard.css';
import { mediarArtABI, mediaArtAddress } from '../web3s/abis/mediaartABI';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    const id = this.props.match.params.mediaartId

    // console.log("props : " +id)
    this.state = {
      thumbsUp: false,
      referCnt: 0,
      buyCnt: 19,
      mediaartId: id,
      mediaartName: "",
      p5Code: "",
      accountConnected: false,
      likes: 0
    }

    this.changeThumbsUp = this.changeThumbsUp.bind(this)
  }

  componentDidMount() {

    const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/1996225ed2c74de88755f84a756eaa65"));
    const contract = new web3.eth.Contract(mediarArtABI, mediaArtAddress);
    // console.log(123131233)
    try {
      contract.methods.getMediaart(this.state.mediaartId).call()
        .then((result) => {
          let rs = JSON.stringify(result);

          rs = rs.replace(/[\[\]']+/g, '');
          
          // rs = rs.split(',');

          const resultLengthZero = (rs.length === 0);
          // console.log("res : "  rs.length === 0);

          if (!resultLengthZero) {
            let rsAsArray = rs.match(/\w+|"[^"]+"/g);
            // console.log("Res : " + typeof rsAsArray);
            // console.log("rrrr: " + eval(rsAsArray[3]));
            removeDoubleQuotesFromArray(rsAsArray);
            let code = rsAsArray[3];
            code = code.replace(/\s/g, '');
            code = code.replace(new RegExp("\\\\n", "g"), "");
           
            this.setState({
              name: rsAsArray[1],
              p5Code: code
            });
          }
          else {
            alert("미디어 아트를 찾을 수 없습니다")
          }

        })

      contract.methods.getMediaart_likey(this.state.mediaartId).call()
        .then((result) => {
          let rs = JSON.stringify(result);
          rs = rs.replace(/['"]+/g, '');
          this.setState({ likes: rs })
        })

    } catch (e) {
      alert("문제가 발생하여 미디어아트 정보를 불러올 수 없습니다")
    }

  }

  changeThumbsUp() {
    if (this.state.accountConnected) {
      window.web3.eth.net.getId()
        .then((id) => {
          if (id === 3) {
            // console.log(124124141414)
            const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
            const address = window.web3.givenProvider.selectedAddress;
            const mediaartId = this.state.mediaartId;
            contract.methods.twicelikey(mediaartId).send({ from: address })
              .then(() => {

                alert("당신의 좋아요가 블록체인에 기록됐습니다")
              })
          } else { alert("Ropsten Testnet에 연결되어 있지 않습니다") }
        }
        )
    } else {
      checkEtherConnected()
        .then(() => {
          this.setState({ accountConnected: true })
        })
    }
    // this.setState({thumbsUp: !this.state.thumbsUp})
  }

  addReference() {


    if (this.state.accountConnected) {
      window.web3.eth.net.getId()
        .then((id) => {
          if (id === 3) {



            const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
            const address = window.web3.givenProvider.selectedAddress;

            const p5ToBeSent = this.state.p5Code.trim()
            // console.log("p5tobesent :" + p5ToBeSent) // replace('/\n','/');
            // console.log("code to be sent : " + p5ToBeSent);
            const parentId = this.state.mediaartId;
            const ZeroPointOneEtherToWei = 100000000000000000;
            contract.methods.ReferMediaart(parentId, address).send({ from: address, value: ZeroPointOneEtherToWei  })
              .then(() => {
                alert("미디어 아트 참조에 성공했습니다")
                this.setState({ referCnt: this.state.referCnt + 1 })
              })
          } else { alert("Ropsten Testnet에 연결되어 있지 않습니다") }
        }
        )
    } else {
      checkEtherConnected()
        .then(() => {
          this.setState({ accountConnected: true })
        })
    }

  }

  addPurchase() {
    // this.setState({ buyCnt: this.state.buyCnt + 1 })

    // if (this.state.accountConnected) {
    //   window.web3.eth.net.getId()
    //     .then((id) => {
    //       if (id === 3) {

    //         const contract = new window.web3.eth.Contract(mediarArtABI, mediaArtAddress);
    //         const address = window.web3.givenProvider.selectedAddress;

    //         // console.log("p5tobesent :" + p5ToBeSent) // replace('/\n','/');
    //         // console.log("code to be sent : " + p5ToBeSent);
    //         const idToBeSold = this.state.mediaartId;

    //         contract.methods.transfer(address, idToBeSold).send({ from: address })
    //           .then(() => {
    //             alert("미디어 아트 구매에 성공했습니다")
    //             // this.setState({ referCnt: this.state.referCnt + 1 })
    //           })
    //       } else { alert("Ropsten Testnet에 연결되어 있지 않습니다") }
    //     }
    //     )
    // } else {
    //   checkEtherConnected()
    //     .then(() => {
    //       this.setState({ accountConnected: true })
    //     })
    // }
    // 
  }

  render() {

    let className = this.state.thumbsUp ? "btn btn-primary" : "btn btn-link";
    return (
      <div>
        <td>
          {/* <a href="./" class="previous">&laquo; {this.props.location.title} Dashboard</a> */}
          <h1>{this.props.location.title}</h1></td>
        <td className="likeButton"> &nbsp;&nbsp;
            <button type="button" className={className} onClick={this.changeThumbsUp}>
            <svg class="bi bi-hand-thumbs-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>
              &nbsp;<b>Like</b>
          </button></td>
        {/* <button type="button" className="btn btn-default">소유자: {this.state.name}</button> */}
        {/* <button type="button" className="btn btn-default">조회수: 0회</button> */}
        <button type="button" className="btn btn-default">좋아요: {this.state.likes}개</button>
        {/* <button type="button" className="btn btn-default">판매량: {this.state.buyCnt}점</button> */}
        {/* <button type="button" className="btn btn-default">참조횟수: {this.state.referCnt}회</button> */}
        <hr />

        <div className="row">
          <div className="col-md-7">
            {/* <P5Wrapper sketch={sketches[this.props.commit.id]} /> */}
            <P5Wrapper sketch={sketchWithSmartContract} code={this.state.p5Code} />
          </div>
          <div className="col-md-5">

            <div className="row">
              <div className="columns">
                <ul className="price">
                  <li className="header">Participant</li>
                  <li>이 작품을 참조할 수 있습니다.</li>
                  <li>본인의 기여도에 따른 수익을 창출할 수 있습니다.</li>
                  <li className="grey"><a href="#" className="btn btn-primary" onClick={this.addReference.bind(this)}>0.1 ETH로 참조</a></li>
                </ul>
              </div>
              <div className="columns">
                <ul className="price">
                  <li className="header1">Buyer</li>
                  <li>작품을 영구 소장할 수 있습니다.</li>
                  <li>모든 확장자를 통해 작품의 export를 지원합니다.</li>
                  <li className="grey"><a href="#" className="btn btn-primary" onClick={this.addPurchase.bind(this)}>0.5 ETH로 구매</a></li>
                </ul>
              </div>
            </div>
            <hr />
            <h4>Contribution Table</h4>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Commits</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>lucetre</td>
                  <td>10개</td>
                  <td>59 %</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Yunny</td>
                  <td>5개</td>
                  <td>34 %</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>JSKeum</td>
                  <td>1개</td>
                  <td>7 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

function removeDoubleQuotesFromArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/"/g, "");
  }
}