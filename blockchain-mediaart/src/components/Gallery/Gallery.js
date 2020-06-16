import React from 'react';
import { Table, CardColumns } from 'reactstrap';
// import P5Wrapper from 'react-p5-wrapper';
import Web3 from 'web3';

// import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
// import sketch3 from '../p5s/sketch3'
import MediaCard from './MediaCard'
import { mediarArtABI, mediaArtAddress } from '../web3s/abis/mediaartABI';

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      p5Code: [],
      mediaartName: [],
      likey: [],
      id: [],
      numOfMediaart: 0
    }
    this.returnMediaarts = this.returnMediaarts.bind(this);
    this.likeyTable = this.likeyTable.bind(this);
  }

  componentDidMount() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/1996225ed2c74de88755f84a756eaa65"));

    // console.log("address : " + cryptokittiesABI )
    var contract = new web3.eth.Contract(mediarArtABI, mediaArtAddress);

    // console.log("method : " + contract.methods)

    // let p5Code = ""
    contract.methods.getAll().call()
      .then((result) => {
        let rs = JSON.stringify(result)
        rs = eval(rs)
        console.log("resulet : " + rs);
        console.log("rs : " + rs.length);

        const numOfMediaart = rs.length;
        this.setState({
          numOfMediaart: numOfMediaart
        })

        for (let i = 0; i < numOfMediaart; i++) {
          console.log(i + " : likey : " + rs[i][5])
          this.setState(prevState => ({
            mediaartName: [...prevState.mediaartName, rs[i][0]],
            p5Code: [...prevState.p5Code, rs[i][1]],
            likey: [...prevState.likey, rs[i][5]],
            id: [...prevState.id, i+1]

          }))
        }
        // console.log("type : "+ typeof rs)
      })
  }

  returnMediaarts() {
    let components = []
    for (let i = 0; i < this.state.numOfMediaart; i++) {
      const mediaartName = this.state.mediaartName[i];
      const p5code = this.state.p5Code[i];

      let component = <MediaCard title={mediaartName} subtitle='' sketch={sketch2} code={p5code} mediaartId={i} />
      components.push(component);
    }
    return (
      components
    );
  }

  likeyTable() {

    let table = [];
    for (let i=0; i<this.state.mediaartName.length; i++) {
      table.push(
      <tr>
        <th scope="row">{this.state.id[i]}</th>
        <td>{this.state.likey[i]}</td>
        <td>{this.state.mediaartName[i]}</td>
        </tr>
      )
  
    }
    // console.log(table)
    return (
    <Table color="#e9ecef" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Stars</th>
              {/* <th>UserID</th> */}
              <th>Artwork</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
    </Table>
    )
  }

  render() {
    const returnMediaarts = this.returnMediaarts();
    const likeyTable = this.likeyTable();

    return (
      <div>
        {likeyTable}
        <CardColumns style={{"marginLeft": "80px"}}>
          {returnMediaarts}
        </CardColumns>
      </div>

    );
  }
}


export default Gallery;