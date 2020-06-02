// p5.js without react

const sampleCode = "p.normalMaterial();p.fill(100, 200, 230);p.translate(0, 0, 0);p.push();p.rotateZ(p.frameCount * 0.01);p.rotateX(p.frameCount * 0.01);p.rotateY(p.frameCount * 0.01);p.cylinder(80, 80);p.pop();";

export default function sketch(p) {
  let rotation = 0;
  let color= 255;
  let code = sampleCode;
  p.setup = function () {

    let cnv = p.createCanvas(1000, 600, p.WEBGL);
    cnv.position();
    color=0;

  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    code = props.code;
    color = props.color;
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }

  };

  // p.draw = adder;
  p.draw = function() {
    p.background(255);

    try { eval(code); 
    } catch(e) {
      alert(e)
      code = sampleCode;
    }
  };
  
};

// const code = "p.normalMaterial();p.background(color);p.fill(100, 200, 230);p.translate(240, 0, 0);p.push();p.rotateZ(p.frameCount * 0.01);p.rotateX(p.frameCount * 0.01);p.rotateY(p.frameCount * 0.01);p.cylinder(cylinderSize);p.pop();"