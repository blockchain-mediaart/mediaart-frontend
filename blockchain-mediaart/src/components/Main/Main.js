import React from 'react';
import { Jumbotron, Media, } from 'reactstrap';
import { Link } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5s/sketch';
import sketch2 from '../p5s/sketch2';
import sketch3 from '../p5s/sketch3';
import "./Main.css"


class Main extends React.Component {


  render() {
    return (
      <div>
        <Jumbotron fluid color = "black" className='jumbo'>
          <h1>Hello, ARTIST!</h1>
          <p className="lead_text">Welcome to the <strong>ABC</strong>, the world full of Art with Block-Chain</p>
          <p className="lead_text">The easiest way to be CREATIVE is here. Like <strong>ABC</strong>! Simple BUT STRONG</p>
          <hr className="my-2" />
          <h1>안녕하세요.</h1>
          <p>이곳은 블록체인기반 미디어 아트 플랫폼 <strong>ABC</strong>(Art with Block-Chain)입니다.</p> 
          <p><strong>ABC</strong>는 이름처럼 쉽지만, 많은 걸 가능하게 하죠.</p>
          <p> 지금 시작해보세요!  </p>
          <p className="lead">
            <Link to="./Gallery" class="btn btn-outline-success"><strong>View More</strong></Link>
          </p>
        </Jumbotron>
        <Media className="mt-1">
          <Media left top href="#">
            <P5Wrapper sketch={sketch} className = "pic" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
                </Media>
                media art 1
              </Media>
        </Media>
        <Media className="mt-1">
          <Media left middle href="#">
            <P5Wrapper sketch={sketch2} className = "pic" />
          </Media>
            <Media body>
              <Media heading>
                Middle aligned media
                </Media>
                media art 2
              </Media>
          </Media>
          <Media className="mt-1">
            <Media left bottom href="#">
            <P5Wrapper sketch={sketch3} className = "pic" />
            </Media>
            <Media body>
              <Media heading>
                Bottom aligned media
                </Media>
                media art 3
              </Media>
          </Media>
      </div>
    );
  }
}


export default Main;