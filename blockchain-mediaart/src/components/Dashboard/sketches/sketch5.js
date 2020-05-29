// p5.js without react

export default function sketch5(p) {
  let rotateRate = 0.00;

  p.setup = function () {
    const parent = p.canvas.parentElement;
    p.createCanvas(parent.offsetWidth, 500, p.WEBGL);
  };

  p.draw = function () {
    p.background(0);

  };
};