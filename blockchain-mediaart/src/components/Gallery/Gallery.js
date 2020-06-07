
import React, { useState } from 'react';
import { Card, Table, CardColumns,CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import Web3 from 'web3';

import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
import sketch3 from '../p5s/sketch3'
import MediaCard from './MediaCard'
import { mediarArtABI, mediaArtAddress } from '../web3s/abis/mediaartABI';

//import "./Gallery.css"

// const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/v3/1996225ed2c74de88755f84a756eaa65"));
  
//   // console.log("address : " + cryptokittiesABI )
//   var contract = new web3.eth.Contract(mediarArtABI, mediaArtAddress);

//   console.log("method : " + contract.methods)

//   contract.methods.getMediaart_ballsize(0).call()
//   .then(function(result) {
//     console.log("result : " + JSON.stringify(result))
//   })

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      p5Code: [],
      mediaartName: [],
      numOfMediaart: 0
    }
    this.returnMediaarts = this.returnMediaarts.bind(this);
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
    console.log("rs : " + rs.length);

    const numOfMediaart = rs.length;
    this.setState({
      numOfMediaart: numOfMediaart
    })

    for (let i=0; i<numOfMediaart; i++) {

    this.setState(prevState => ({
      mediaartName: [...prevState.mediaartName, rs[i][0]],
      p5Code: [...prevState.p5Code, rs[i][1]]
    }))
  }
    // console.log("type : "+ typeof rs)
  })
}
  
  returnMediaarts() {
    let components = []
    for (let i=0; i<this.state.numOfMediaart; i++) {
    const mediaartName = this.state.mediaartName[i];
    const p5code = this.state.p5Code[i];
    
    let component = <MediaCard title={mediaartName} subtitle = 'subtitle1' sketch = {sketch2} code={p5code}/>
      components.push(component);
    }
    return (
      components 
    );
  }

  render() {

    const mediaartName = this.state.mediaartName[0];
    const p5code = this.state.p5Code[0];
    const returnMediaarts = this.returnMediaarts();

    return (
    <div>
      <Table color = "#e9ecef" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Stars</th>
            <th>UserID</th>
            <th>Artwork</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>55</td>
            <td>@Iamthebest</td>
            <td>#SKETCH</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>47</td>
            <td>@Hanwoo</td>
            <td>#LION</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>38</td>
            <td>@CRYTOBB</td>
            <td>#efef</td>
          </tr>
        </tbody>
      </Table>
      <CardColumns>

        {returnMediaarts}
        
        {/* <MediaCard title = "title1" subtitle = 'subtitle1' text = "lalalal" insidetext = 'toggle view' sketch = {sketch}/>
        <MediaCard title = {mediaartName} subtitle = 'subtitle1' sketch = {sketch2} code={p5code}/>
        <MediaCard title = {mediaartName} subtitle = 'subtitle1' sketch = {sketch2} code={p5code}/>
        <MediaCard title = {mediaartName} subtitle = 'subtitle1' sketch = {sketch2} code={p5code}/>
         */}
      </CardColumns>
    </div>

    );
  }
}


export default Gallery;