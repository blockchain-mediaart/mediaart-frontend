
import React, { useState } from 'react';
import { Card, Table, CardColumns,CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
import sketch3 from '../p5s/sketch3'
import MediaCard from './MediaCard'
//import "./Gallery.css"

class Gallery extends React.Component {
  render() {
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
        <MediaCard title = "title1" subtitle = 'subtitle1' text = "lalalal" insidetext = 'toggle view' sketch = {sketch}/>
        <MediaCard title = "title1" subtitle = 'subtitle1' sketch = {sketch}/>
        <MediaCard title = "title1" subtitle = 'subtitle1' sketch = {sketch2}/>
        <MediaCard title = "title1" subtitle = 'subtitle1' sketch = {sketch2}/>
        
      </CardColumns>
    </div>

    );
  }
}


export default Gallery;