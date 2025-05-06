let score = 20;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const userNumber = document.querySelector('.guess');
const guessedNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const check = document.querySelector('.check')
const scoreLabel = document.querySelector('.score')
const highScoreLabel = document.querySelector('.highscore');
const again = document.querySelector('.again');
guessedNumber.textContent = randomNumber;

again.addEventListener('click',()=>{
    againButton();
})

check.addEventListener('click',()=>{
    compare();
})

const updateMessage = (msg)=>{
    message.textContent = msg;
}

const compare = () => {
    const number = Number(userNumber.value);
    
    if (number > 20 || number < 1) {
        updateMessage("Nombre entre 1 et 20");
    } else if (number === randomNumber && score > 0) {
        updateMessage("success");
        highScoreLabel.textContent = score;
        document.body.style.backgroundColor = '#60b347'; 
        
    } else if (number < randomNumber) {
        updateMessage("too low");
        updateScore();
    } else if (number > randomNumber) {
        updateMessage("too high");
        updateScore();
    }
};


const updateScore = ()=>{
    if(score >0){
        score --;
        scoreLabel.textContent = score;
    }
}

const againButton = ()=>{
    document.body.style.backgroundColor = '#222';
    score = 20;
    scoreLabel.textContent = score;
    highScore = 0;
    scoreLabel.textContent = highScore;
    userNumber.value = '';
    updateMessage('Start guessing...');
    randomNumber = Math.trunc(Math.random() * 20) + 1;


}


