import React, { useState } from 'react';
import { Card, Table, CardColumns, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';
import P5Wrapper from 'react-p5-wrapper';
import { Link } from "react-router-dom";

import sketch from '../p5s/sketch'
import sketch2 from '../p5s/sketch2'
import sketch3 from '../p5s/sketch3'
import ToggleButton from './ToggleButton'

function MediaCard(props) {

  const { title, subtitle, text, sketch, insidetext, code, mediaartId } = props;
  
  const linkToDetail= { 
    pathname: "/detail/"+mediaartId, 
    title: title
  };
  
  return (
    <div>
      <Card>
        <P5Wrapper sketch={sketch} code={code} />
        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
          {/* <ToggleButton text = {insidetext} /> */}
          {/* <Link to={{
            pathname: '/detail',
            state: {title: 'basdr'}
          }}> */}
          
          <Link to={linkToDetail}>
          {/* <Link to={{pathname: '/detail', state: {title: "121313"}} }> */}
            <button style={{"marginTop" : "160px"}}>자세히 보기</button>
            </Link>
        </CardImgOverlay>
      </Card>
    </div>
  );
}



export default MediaCard;