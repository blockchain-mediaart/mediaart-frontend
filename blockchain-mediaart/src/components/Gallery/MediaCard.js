import React, { useState } from 'react';
import { Card, Table, CardColumns,CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
import sketch3 from '../p5s/sketch3'
import ToggleButton from './ToggleButton'

function MediaCard(props) {

    const { title, subtitle, text, sketch, insidetext, code} = props;
    return (


    <div>
     
     <Card>
        <P5Wrapper sketch={sketch} code={code} />
        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}.</CardText>
          <ToggleButton text = {insidetext} />
          </CardImgOverlay>
          
      </Card>
    </div>
    );
  }



export default MediaCard;