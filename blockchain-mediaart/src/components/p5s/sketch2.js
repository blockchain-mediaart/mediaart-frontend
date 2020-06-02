// p5.js without react


export default function sketch2(p) {
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
    p.background(120);
    p.translate(240, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cylinder(70, 70);
    p.pop();

    p.translate(-120 * 2, 200, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cone(70, 70);
    p.pop();

    p.translate(240, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.torus(70, 20);
    p.pop();

  };
};