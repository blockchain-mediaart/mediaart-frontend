export default function sketchWithSmartContract(p) {
  let rotation = 0;
  let color= 255;
  let code = "";
  p.setup = function () {
    let cnv = p.createCanvas(1000, 600, p.WEBGL);
    // cnv.parent("myCanvas");
    cnv.position();
    
    color=0;

  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    code = props.code;
    // color = props.color;
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
      code = ""
    }
  };
  
};