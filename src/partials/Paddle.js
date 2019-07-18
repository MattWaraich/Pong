import { SVG_NS } from "../settings";


export default class Paddle {
    constructor(boardHeight, width, height, x, y, color = 'coral', up, down) // could add color here to add more parameters then fill it out in the render
    {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.score = 0;
        this.color = 'coral';


        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:
                    this.up();
                    break;
                case down:
                    this.down();
                    break;
            }
        });
    }
// constructor ends here 

up(){
this.y = this.y - this.speed;
}

down(){
this.y = this.y + this.speed
}
    
render(svg) //this is used to allow files to communicate with each other
{
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'fill', this.color); // fix this color input
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    svg.appendChild(rect);
}
}