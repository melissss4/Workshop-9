// let webcam;
// let ballSystem = []; 
// let scale = 18;

// function setup() {
//  createCanvas (400, 400); 
//  pixelDensity (1);
//  webcam = createCapture(VIDEO); 
//  webcam.size(width / scale, height / scale);
//  webcam.hide();
//   for (x = 0; x < 200; x++){
//     rx = random(15, width - 15);
//     ry = random(15, height - 15);
//     rr = random(2, 20);
//     ballSystem [x] = new Ball (rx, ry, rr);
//   }
// }
  

// function draw() {
//  webcam.loadPixels();
//    for (x = 0; x < ballSystem.length; x++){
//     ballSystem[x].move();
//     ballSystem[x].show();
//     ballSystem[x].checkEdges();
//   }
// }


// class Ball { 
//   constructor(x, y, r){          
//    this.x = x;
//    this.y = y;
//    this.r = r;
//   }

//   move(){
//     this.x = this.x + random (-8, 8); 
//     this.y = this.y + random (-8, 8);
//   }  

//    show(){
//     let pX= this.x / scale;
//     let pY= this.y / scale;
//     let pixelColour = webcam.get(pX, pY);
//     fill (pixelColour[0], pixelColour[1], pixelColour[2]);   
//     noStroke();
//     ellipse(this.x, this.y, this.r);
//    }
  
//   checkEdges() {
//     if(this.x < 15){
//       this.x = 15;
//     }else if (this.x > width - 15){
//       this.x = width - 15;
//     }

//     if (this.y < 15){
//        this.y = 15;
//     } else if (this.y > height - 15){
//        this.y = height - 15;
//     }
//   }
// }


let userInput, userinputtext;
let button;
let userLine;
let poem = [];

let webcam;
let ballSystem = [];
let scale = 18;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide();
 for (x = 0; x < 500; x++) {
    rx = random(15, width - 15);
    ry = random(15, height - 15);
    rr = random(2, 20);
    ballSystem[x] = new Ball(rx, ry, rr);
  }

  userInput = createInput();
  userInput.position(10, height + 10);

  button = createButton('Add to Poem');
  button.position(userInput.x + userInput.width + 10, height + 10);
  button.mousePressed(newLine);
}

function draw() {
  

  webcam.loadPixels();
  for (x = 0; x < ballSystem.length; x++) {
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }

  fill(255);
  noStroke();
  writePoem();
}

function newLine() {
  userLine = userInput.value();
  userInput.value('');
  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  if (rhymes.length === 0) {
    print("No rhyme found");
    poem.push(userLine);
  } else {
    let changedWord = random(rhymes);
    words[r] = changedWord;
    userLine = RiTa.untokenize(words);
    poem.push(userLine);
  }
}

function writePoem() {
  for (let x = 0; x < poem.length; x++) {
    text(poem[x], 10, 20 + x * 20);
  }
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show() {
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColour = webcam.get(pX, pY);
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    noStroke();
    ellipse(this.x, this.y, this.r);
  }

  checkEdges() {
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }

    if (this.y < 15) {
      this.y = 15;
    } else if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}
