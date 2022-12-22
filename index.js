const container = document.getElementById('container');

const board = document.getElementById('board');

const x = document.getElementById('x')
const y = document.getElementById('y')
console.log(x.value);
console.log(y.value);


const point = document.getElementById('point');
const btn = document.getElementById('btn');

let widthX = document.getElementById('board').offsetWidth;
let heightY = document.getElementById('board').offsetHeight;

let maxX = document.getElementById('maxx').innerText = widthX -6;
let maxY = document.getElementById('maxy').innerText = heightY -6;

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pointElement = this.constructPoint();
        console.log(this.pointElement);
        this.plotPoint();
    }

constructPoint() {
    let point = document.createElement('div')
    point.style.left = this.x + 'px';
    point.style.top  = this.y + 'px';
    point.classList.add('point')
    
    return point;
}

plotPoint() {
    board.appendChild(this.pointElement)
    } 
}

const wait = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const initialSetup = () => {
    let h = Math.round(parseInt(getComputedStyle(board).height))
    let w = Math.round(parseInt(getComputedStyle(board).width))

    const points = [];

    let p1 = new Dot(w/2, h/7); //top
    let p2 = new Dot(w/4.5, h/1.5) //bottom left
    let p3 = new Dot(w/1.3, h/1.5) //bottom right

    points.push(p1, p2, p3);

    return points;
}

let points = initialSetup();


btn.addEventListener("click", xy)

async function xy() {
    console.log(x.value, y.value);
    if (x.value > maxX || y.value > maxY) {
        alert("please enter a number within maximum range for both x and y");
        return;
    } 
     
    let currentPoint = new Dot (x.value, y.value)
  


while (true) {
    await wait(10);

    let randPoint = points[Math.floor(Math.random()* points.length)];

    let xDist = (randPoint.x + currentPoint.x) / 2;
    let yDist = (randPoint.y + currentPoint.y) / 2;

    currentPoint = new Dot (xDist, yDist)
};
}  