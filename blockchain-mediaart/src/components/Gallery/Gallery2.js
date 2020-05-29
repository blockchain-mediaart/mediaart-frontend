import React, { useState } from 'react';
import { Card, Table, CardColumns,CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
import sketch3 from '../p5s/sketch3'
import ToggleButton from './ToggleButton'
import MediaCard from './MediaCard'

class Gallery2 extends React.Component {
  render() {
    return (


    <div>
      <Table dark hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <CardColumns>
        <MediaCard title = "title1" subtitle = 'subtitle1' text = "lalalal" insidetext = 'toggle view' sketch = {sketch}/>
        <MediaCard title = "title1" subtitle = 'subtitle1' sketch = {sketch}/>
        
      </CardColumns>
    </div>
    );
  }
}


export default Gallery2;