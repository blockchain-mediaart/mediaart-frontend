// p5.js without react


export default function sketch2(p) {
  let rotation = 0;
  let code = "";

  p.setup = function () {
    p.createCanvas(1000, 600, p.WEBGL);
    p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }
    code = props.code;
    p.loop();
    // console.log("code :" + code)
  };

  p.draw = function () {
    p.background(255);
    try { 
      eval(code); 
      p.noLoop();
    } catch(e) {
      alert(e)
      code = ""
    }
    // p.noLoop();

  };
};