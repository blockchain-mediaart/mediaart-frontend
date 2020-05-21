# p5.js와 react 통합하기
https://www.npmjs.com/package/react-p5-wrapper
### npm으로 p5와 react-p5-wrapper 설치
`npm i p5 --save`
`npm i react-p5-wrapper --save`

### 예제 코드
```JSX
// var P5Wrapper = require('react-p5-wrapper'); or
import P5Wrapper from 'react-p5-wrapper';

<P5Wrapper sketch={sketch} />

export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.normalMaterial();
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
};
```
