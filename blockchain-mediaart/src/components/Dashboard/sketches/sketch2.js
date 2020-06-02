// p5.js without react

export default function sketch2(p) {
  let rotateRate = 0.00;

  p.setup = function () {
    const parent = p.canvas.parentElement;
    p.createCanvas(parent.offsetWidth, 500, p.WEBGL);
  };

  p.draw = function () {
    p.background(255);

    p.translate(0, 0, 0);
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