const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

class SnakePart{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let speed = 7;

let tileCount = 20;
let tileesize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
const snakePart = [];
let tailLenght = 2;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
        return;
    }
    
    clearScreen();
    checkApleCollision();
    drawApple();
    drawSnake();

    drawScore();

    if(score > 2){
        speed = 11;
    }
    if(score > 5){
        speed = 15;
    }
    
    setTimeout(drawGame, 1000 / speed);
}

function isGameOver(){
    let gameOver = false;

    if(yVelocity ===0 && xVelocity ===0){
        return false;
    }

    //walls
    if(headX < 0){
        gameOver = true;
    }
    else if(headX === tileCount){
        gameOver = true;
    }
    else if(headY < 0){
        gameOver = true;
    }
    else if(headY === tileCount){
        gameOver = true;
    }

    for(let i =0; i < snakePart.length; i++){
        let part = snakePart[i];
        if(part.x === headX && part.y === headY){
            gameOver = true;
            break;
        }
    }

    if (gameOver){
        ctx.fillStyle = 'white';
        ctx.font = '50px Verdana';

        ctx.fillText('Game Over!', canvas.width / 6.5, canvas.height / 2);
    }

    return gameOver;
}

function drawScore(){
    ctx.fillStyle = 'white';
    ctx.font = "10px Verdana"
    ctx.fillText("Score " +score, canvas.width-50, 10);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStyle = 'green';
    for(let i=0; i < snakePart.length; i++){
        let part = snakePart[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileesize, tileesize);
    }

    snakePart.push(new SnakePart(headX, headY));
    while(snakePart.length > tailLenght){
        snakePart.shift();
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileesize,tileesize)
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY =headY + yVelocity
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX * tileesize, appleY * tileesize, tileesize, tileesize)
}

function checkApleCollision(){
    if(appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLenght++;
        score++;
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(){
    //up arrow
    if(event.keyCode == 38){
        if(yVelocity == 1){
            return;
        }
        yVelocity = -1;
        xVelocity = 0
    }
    //down
    if(event.keyCode == 40){
        if(yVelocity == -1){
            return;
        }
        yVelocity = 1;
        xVelocity = 0;
    }
    //left
    if(event.keyCode == 37){  
        if(xVelocity == 1){
            return;
        }     
        yVelocity = 0;
        xVelocity = -1;
    }
    //right
    if(event.keyCode == 39){
        if(xVelocity == -1){
            return;
        }
        yVelocity = 0;
        xVelocity = 1;
    }
}








drawGame();