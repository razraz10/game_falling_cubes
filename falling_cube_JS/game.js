let cube = document.querySelector('.cube');
const container = document.querySelector('.container');
const bar = document.querySelector('.bar');
const scoreElement = document.querySelector('.score');

let score = 10;
scoreElement.textContent = score;

let id = null;
let barPosition = 0;
let cubePosition = 0;
let barPosition2= 175;
let cubePosition2 = 175;
let speed = 5;

let images = ["/falling_cube_images/fire.jpg",
            "/falling_cube_images/balun.jpg",
            "/falling_cube_images/bike.jpg",
            "/falling_cube_images/car.jpg",
            "/falling_cube_images/night.jpg"
        ];



let xPosition = 0;
let pos = 175;
let step = 5


function moveCube() {

    //moving with arrows
    document.addEventListener('keydown', (e) => {
        const containerWidth = container.clientWidth;
        const barWidth = bar.clientWidth;
        
        if (e.key === 'ArrowLeft' && pos >= step) {
            pos -= step;
        } else if (e.key === 'ArrowRight' && pos <= containerWidth - barWidth - step) {
            pos += step;
        }
        barPosition = pos + 'px';
        bar.style.left = barPosition; 
        barPosition2=pos;
        // bar.getBoundingClientRect()
    });


    let position = 0;
    clearInterval(id);
    id = setInterval(frame, speed);

function frame() {
    if (position === 431) {
        if(barPosition2 <= cubePosition2 + 50 && barPosition2 + 175 >= cubePosition2){
            score -= 2;
            scoreElement.textContent = score;
            position = 0 ;
        }else{
            score += 2;
            scoreElement.textContent = score;
            position = 0 ;
        }
         
        //random colors
        let randImages = Math.floor(Math.random() * images.length);
        let imgElement = cube.querySelector("img");
        imgElement.src = images[randImages];
        // cube.style.backgroundImage = `url('${colors[randColors]}')`
        
        //rand position
        let randPosition = Math.floor(Math.random() * 450)
        cubePosition = randPosition + 'px'
        cube.style.left = cubePosition
        cubePosition2 = randPosition;
        if(score === 0 || counter === 0){
            clearInterval(id);
            alert("Game over");
            score = 10;
            counter = 60;
            scoreElement.textContent = score;
            id = setInterval(frame, speed);
        }
        else if(score === 18){
            // alert("Level 2 !!!")
            clearInterval(id);
            speed -= 3;
            id = setInterval(frame, speed);
        }
        else if(score === 20){
            // alert("Level 3!!!")
            clearInterval(id);
            speed -= 3;
            id = setInterval(frame, speed);
        }
    } else {
            position++;
            cube.style.top = position + 'px';
            // cube.style.down = position + 'px';
        }
    }
}


let counter = 60;
let timer;

function init(){
    document.querySelector("#h2").innerHTML = counter;
    declareBodyEvents()
}

 function declareBodyEvents(){
    let play_btn = document.querySelector("#start")
    play_btn.addEventListener("click",play)
}


function play(){
    clearInterval(timer);
    timer = setInterval(function(){
        counter--;
        document.querySelector("#h2").innerHTML = counter;
        if(counter == 0){
            clearInterval(timer)
            alert("winnnnnnnn");
            counter= 60
            play();
        }
    }, 1000)

} 

init();
init();

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const usersData = JSON.parse(localStorage.getItem('users')) || {};

    const table = document.getElementById('userTable');

    Object.values(usersData).forEach(user => {
        const row = table.insertRow(-1); 

        const nameCell = row.insertCell(0);
        const emailCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);

        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
        scoreCell.textContent = scoreElement;
        
        scoreCell.textContent = '';
    });
});


const startButton = document.getElementById('start');
startButton.onclick = moveCube;




