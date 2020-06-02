// p5.js without react

export default function sketch10(p) {
  let rotateRate = 0.01;

  p.setup = function () {
    const parent = p.canvas.parentElement;
    p.createCanvas(parent.offsetWidth, 500, p.WEBGL);
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