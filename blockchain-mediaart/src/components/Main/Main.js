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
          <h1 className="display-3">Hello, ARTIST!</h1>
          <p className="lead">Welcome to the CREATIVE GALLERY</p>
          <hr className="my-2" />
          <p>hello</p>
          <p className="lead">
            <Link to="./Gallery" className="btn btn-primary">View More</Link>
          </p>
        </Jumbotron>
        <Media>
          <Media left top href="#">
            <P5Wrapper sketch={sketch} />
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
            <P5Wrapper sketch={sketch2} />
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
            <P5Wrapper sketch={sketch3} />
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