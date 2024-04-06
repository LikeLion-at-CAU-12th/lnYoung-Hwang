const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");
//DOM요소에 js으로 접근
const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

//*위와 같은 id 부분은 잘못써도 에러 발생 안해줌. 주의!

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.getElementById("display-result");
const myScoreText = document.getElementById("my-score");
const comScoreText = document.getElementById("com-score");

const resetBtn = document.getElementById("reset-button");

const darkBtn = document.getElementById("dark-button");

//tag를 모두 가져와 배열로 저장
const divTags = document.getElementsByTagName("div");
const iTags = document.getElementsByTagName("i");
const bodyTag = document.getElementsByTagName("body");

const congrats = document.getElementsByClassName("gif");

// 점수판 배열 score[0]은 Me 점수, score[1]는 Com 점수
// 전역변수로 지정하여 한번만 선언될 수 있도록 하여 점수 누적 가능! 
var score = [0, 0];

// 다크 모드 or 화이트 모드로 변환하기 위해 현재 모드 뭔지 기록 
// 점수와 마찬가지로 계속 사용될 거기 때문에 전역 변수로 선언
// true 일때 현재 다크 모드, false 일때 현재 화이트 모드
var currentMode = false;

//버튼 클릭 이벤트가 발생하면 displayMyChoice가 실행됨
//즉, 위에서 DOM요소에 접근하여 가져왔으므로 js를 통해 조작 가능해짐!
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

resetBtn.addEventListener("click", resetGame);

darkBtn.addEventListener("click", darkMode);

//클릭할 때 dom 객체에 접근하여 현재 클릭한 요소 저장
//start 함수 실행하여 com choice도 가져옴 
//결과 출력
function displayMyChoice(e) { 
    
    //클릭한 버튼 변수에 저장
    let clickedBtn = e.currentTarget.id;  
    //button요소의 id인 rock / scissors / paper 값 들어감
    
    let clickedIcon = e.target.className; 
    //i 요소의 className인 fa-reguler....값 들어감

    //inner 로 DOM 내부 요소 접근
    // 클릭한 값에 맞도록 출력
    myHandText.innerText = clickedBtn; 
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
    
}

//컴퓨터의 choice를 가져옴
function getComChoice() {
    
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);
    // Math.random() 은 0~1사이 난수 반환

    return randomValue[randomIndex];

}   //랜덤 index 값 가져와서 그거로 배열 중 하나를 선택

//컴퓨터 선택을 출력
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

//게임 시작. com의 choice 가져옴
function start(myChoice) {

    var resultArray = getComChoice();
    //resultArray를 printResult에서도 쓸 수 있도록 하기 => 매개변수로 넘겨줌

    displayComChoice(resultArray);
    comChoice = resultArray[0];
    printResult(myChoice, comChoice);

}

//나의 선택, 컴퓨터 선택을 가져와서 비교하고, 결과를 win or lose로 출력
function printResult(myChoice, comChoice) {    
    //비겼을 때
    if (myChoice == comChoice) {
        resultText.innerText = 'Draw';

        //축하 gif 안보이게
        for(let i = 0; i < congrats.length; i++) {
            congrats[i].style.display = "none";
        }
        
    }
    //이겼을 때
    else if ( (myChoice == "paper" && comChoice == "rock") ||
        (myChoice == "rock" && comChoice == "scissors") ||
        (myChoice == "scissors" && comChoice == "paper")) {
            resultText.innerText = "Win";
            score[0]++;

            //축하 gif 보이게
            for(let i = 0; i < congrats.length; i++) {
                congrats[i].style.display = "inline";
            }
        }
    //졌을 때
    else {
        resultText.innerText = "Lose";
        score[1]++;

        //축하 gif 안보이게
        for(let i = 0; i < congrats.length; i++) {
            congrats[i].style.display = "none";
        }
    }

    myScoreText.innerText = score[0];
    comScoreText.innerText = score[1];   
}

function resetGame() {
    let confirmReset = confirm("Are you sure to reset the game?") 
    if (confirmReset == true) {
        location.reload();
    }
}

function darkMode(){
    //화이트모드 -> 다크모드
    if (currentMode == false) {
        for (let i = 0; i < divTags.length; i++) {
            divTags[i].style.color = "white";
            divTags[i].style.borderColor = "white";
            divTags[i].style.backgroundColor = "black";
        }
        for (let i = 0; i < iTags.length; i++) {
            iTags[i].style.color = "white";
            iTags[i].style.borderColor = "white";
            iTags[i].style.backgroundColor = "black";
        }
        bodyTag[0].style.backgroundColor = "black";
        
        darkBtn.innerText = "White Mode";

        
        resetBtn.style.backgroundColor = "white";
        resetBtn.style.color = "black";
        

        currentMode = true;
    }
    //다크모드 -> 화이트모드
    else {
        for (let i = 0; i < divTags.length; i++) {
            divTags[i].style.color = "black";
            divTags[i].style.borderColor = "black";
            divTags[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < iTags.length; i++) {
            iTags[i].style.color = "black";
            iTags[i].style.borderColor = "black";
            iTags[i].style.backgroundColor = "white";
        }
        
        bodyTag[0].style.backgroundColor = "white";

        darkBtn.innerText = "Dark Mode";
        
        resetBtn.style.backgroundColor = "black";
        resetBtn.style.color = "white";
        

        currentMode = false;
    }
    
}


