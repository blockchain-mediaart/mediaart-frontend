import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../p5s/sketch'

class MyMediaart extends React.Component {
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