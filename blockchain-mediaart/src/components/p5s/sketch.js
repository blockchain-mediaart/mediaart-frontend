// p5.js without react

export default function sketch(p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(1000, 600, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.normalMaterial();
    p.background(255);
    p.fill(100, 200, 230);
    p.translate(240, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cylinder(70, 70);
    p.pop();
  };
};