import { useRef } from "react";
import Sketch from "react-p5";

export const Background = () => {
  const bgRef = useRef(null);
  let p5State;
  let time, theme;

  const deg = (a) => (Math.PI / 180) * a;
  const randomness = () =>
    Math.floor(40 + Math.random() * 1080) * Math.round(Math.random());
  const Points = [];
  let rotation = 0;
  let newRotation = Math.random() * 360;

  const setup = (p5, canvasParentRef) => {
    const { width, height } = percentage();
    p5.createCanvas(width, height).parent(canvasParentRef);

    for (let i = 0; i < 180; i += 1) {
      Points.push({
        ox: 0,
        oy: 0,
        x: 0,
        y: 0,
      });
    }
    createLines(p5);
  };

  function createLines() {
    const { width } = percentage();
    let pe5 = new window.p5();
    const radius = Math.min(250, width * 0.48);
    const increment = 2;
    newRotation = rotation + 45;
    const r1 = randomness();
    const r2 = randomness();
    const r3 = randomness();
    const r4 =
      r1 !== 0 && r2 !== 0 && r3 !== 0 ? randomness() : Math.random() * 360;
    for (let i = 0; i < 180; i += increment) {
      const x1 = radius * pe5.sin(deg(i + r1));
      const y1 = radius * pe5.cos(deg(i + r2));
      if (Points[i] != undefined) {
        Points[i].x = x1;
        Points[i].y = y1;
        const x2 = radius * pe5.sin(deg(i + r3));
        const y2 = radius * pe5.cos(deg(i + r4));
        Points[i + 1].x = x2;
        Points[i + 1].y = y2;
      }
    }
  }

  function drawLines(p5) {
    const smooth = 0.06;
    const stagger = 0.0005;
    for (let i = 0; i < Points.length; i += 2) {
      theme === "dark" ? p5.stroke(255, i * 0.4) : p5.stroke(181, 181, 181);

      Points[i].ox = p5.lerp(Points[i].ox, Points[i].x, smooth + i * stagger);
      Points[i].oy = p5.lerp(Points[i].oy, Points[i].y, smooth + i * stagger);
      Points[i + 1].ox = p5.lerp(
        Points[i + 1].ox,
        Points[i + 1].x,
        smooth + i * stagger
      );
      Points[i + 1].oy = p5.lerp(
        Points[i + 1].oy,
        Points[i + 1].y,
        smooth + i * stagger
      );
      const x = p5.lerp(Points[i].ox, Points[i + 1].ox, 0.3);
      const y = p5.lerp(Points[i].oy, Points[i + 1].oy, 0.7);
      p5.bezier(
        Points[i].ox,
        Points[i].oy,
        y,
        x,
        x,
        y,
        Points[i + 1].ox,
        Points[i + 1].oy
      );
    }
  }

  function draw(p5) {
    const { width, height } = percentage();
    p5State = p5;
    deleteAllChild();
    theme = localStorage.getItem("theme") === "ligth" ? "ligth" : "dark";
    time += 0.01;
    theme === "dark" ? p5.background(15, 15, 15) : p5.background(237, 237, 237);
    setVariablesDraw(p5, width, height);
    drawLines(p5, time);
  }

  function setVariablesDraw(p5, width, height) {
    p5.strokeWeight(1);
    p5.noFill();
    p5.translate(width / 2, height / 2);
    rotation = p5.lerp(rotation, newRotation, p5.smooth);
    p5.rotate(deg(rotation));
  }

  function percentage() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const checkRestHeigth = height - Math.round((4.3 * height) / 100) > 550;
    const checkHeigth = height - Math.round((4.3 * height) / 100);

    const widthPercentage = width - Math.round((10.5 * width) / 100) - 10;
    const heigthPercentage = checkRestHeigth ? checkHeigth - 30 : checkHeigth;

    return { width: widthPercentage, height: heigthPercentage };
  }

  function deleteAllChild() {
    const main = document.querySelector("main");
    while (main.firstChild) {
      main.removeChild(main.lastChild);
    }
  }

  window.addEventListener("resize", () => {
    const { width, height } = percentage();
    p5State && p5State.resizeCanvas(width, height);
  });

  setInterval(createLines, 1500);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
      }}
      ref={bgRef}
      id="canvas"
    >
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};
