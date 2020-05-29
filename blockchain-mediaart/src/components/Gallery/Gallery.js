import React from 'react';
import { Jumbotron, Media, } from 'reactstrap';
import { Link } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5s/sketch';
import sketch2 from '../p5s/sketch2';
import sketch3 from '../p5s/sketch3';

//const history = useHistory(); //nClick={() => history.push("/gallery2")


class Gallery extends React.Component {


  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, ARTIST!</h1>
          <p className="lead">Welcome to the CREATIVE GALLERY</p>
          <hr className="my-2" />
          <p></p>
          <p className="lead">
            <Link to="./Gallery2" className="btn btn-primary">View More</Link>

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


export default Gallery;