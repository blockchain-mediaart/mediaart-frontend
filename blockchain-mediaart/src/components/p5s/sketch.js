// p5.js without react

export default function sketch11(p) {
  let rotateRate = 0.1;

  p.setup = function () {
    p.createCanvas(500, 300, p.WEBGL);
  };

  p.draw = function () {
    p.background(255);
    p.translate(0, -125, 0);
    p.push();
    p.rotateY(-p.frameCount * rotateRate);
    p.cylinder(70, 70);
    p.pop();

    p.translate(0, 200, 0);
    p.push();
    p.rotateY(p.frameCount * rotateRate);
    p.cone(70, 300);
    p.pop();

    p.translate(0, 0, 0);
    p.push();
    p.rotateY(p.frameCount * rotateRate);
    p.torus(70, 20);
    p.pop();
    // p.scale(2, 2);

  };
};