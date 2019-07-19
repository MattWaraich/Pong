import { SVG_NS, KEYS } from "../settings";

export default class Paddle {
  constructor(
    boardHeight,
    width,
    height,
    x,
    y,
    color = "coral",
    upKey,
    downKey,
    playerColor
  ) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.color = "coral";
    this.playerColor = "red";
    this.upKey = upKey;
    this.downKey = downKey;
    // collision speed for stretch goal by doing this.speed +=
    this.keyState = {};

    document.addEventListener("keydown", event => {
      this.keyState[event.key] = true;
    });

    document.addEventListener("keyup", event => {
      this.keyState[event.key] = false;
    });

    // document.addEventListener("keydown", event => {
    // switch (event.key) {
    // case up:
    // this.up();
    //break;
    //case down:
    //this.down();
    //break;
    //}
    //});
  }
  // constructor ends here

  up() {
    //this.y = this.y - this.speed;
    console.log("move up");
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    //this.y = this.y + this.speed;
    console.log("move down");
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  render(svg) {
    if (this.keyState[KEYS.w] && this.upKey === KEYS.w) {
      this.up();
    }

    if (this.keyState[KEYS.s] && this.downKey === KEYS.s) {
      this.down();
    }

    if (this.keyState[KEYS.up] && this.upKey === KEYS.up) {
      this.up();
    }

    if (this.keyState[KEYS.down] && this.downKey === KEYS.down) {
      this.down();
    }

    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "fill", this.color); // fix this color input
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    svg.appendChild(rect);
  }
}

//stretch goal adding 1 more player on each side -> make paddles different colors.. one slightly smaller than the other
