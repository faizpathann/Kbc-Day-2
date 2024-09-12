let questions = [
    {
        question: "Q.1  URL stands for___??",
        options: { a: "unreputed record locator ", b: "uniform record label", c: "Uniform Resource Locator" ,d: "uniform reseach locator"},
        correctAnswer: "c",
        prize: 1000
    },
    {
        question:"Q.2  css stands for ??",
        options :{a:"Cascading Style Sheets",b:"Cascading Sheets",c:"colour style sheet",d:"colur sheet section"},
        correctAnswer:"a",
        prize: 2000
    },
    {
        question:"Q.3  which of the following is not a primitive datatype in js ??",
        options :{a:"Number",b:"String",c:"Boolean",d:"Object"},
        correctAnswer:"d",
        prize : 3000
    },
    {
        question:"Q.4  What does the 'typeof' opreator do in js ??",
        options :{a:"Return the datatype of a variable",b:"variable is defined",c:"assign a value",d:"two strings"},
        correctAnswer:"a",
        prize : 4000
    },
    {
        question:"Q.5 which is following is not a comparison opreator in js ??",
        options :{a:"==",b:"===",c:"!=",d:"=<"},
        correctAnswer :"d",
        prize : 5000
    },
    {
        question:"Q.6 what does the 'NaN' value represent in js??",
        options:{a:"Not a number",b:"Null value",c:"Undefined value",d:"Boolean value"},
        correctAnswer:"a",
        prize : 6000
    },
    {
        question:"Q.7 what is the correct way to declare a variable in js??",
        options:{a:"variable x=5",b:"x=5",c:"let x=5;",d:"var x=5"},
        correctAnswer:"c",
        prize : 7000
    },
    {
        question:"Q.8 what is the correct syntax for a 'for' loop in js??",
        options:{a:"for(i=0;i<5;i++)",b:"for(var i=0;i<5;i++)",c:"for(var i=0;i>0;i--)",d:"for(i=5;i>0;i++)"},
        correctAnswer:"b",
        prize : 8000
    },
    {
        question:"Q.9 The 'function' and 'var' are known as??",
        options:{a:"keyword",b:"DataType",c:"Declaration statement",d:"prototype"},
        correctAnswer: "c",
        prize : 9000
    },
    {
        question:"Q.10 which one of the following is the correct way for calling the javascript code??",
        options:{a:"Preprocessor",b:"Triggering",c:"RMI",d:"Function or Method"},
        correctAnswer:"d",
        prize : 10000
    },
    {
        question:"Q.11 Which one of the following isb an Ternary operator ??",
        options:{a:"?",b:":",c:"*",d:"/"},
        correctAnswer: "a",
        prize : 12000
    },
    {
        question:"Q.12 What are the three important manipulations for a loop on a loop variable??",
        options:{a:"Updation,Incrementation,Initilazation",b:"Testing,increment,initialazation",c:"Testing,updatio0n,testing",d:"Initialization,Condition,Updation"},
        correctAnswer:"d",
        prize : 14000
    },
    {
        question:"Q.13 A set of unordered properties that,has a name and value is called__??",
        options:{a:"Object",b:"Array",c:"String",d:"Serialized Object"},
        correctAnswer:"a",
        prize : 16000
    },
    {
        question:"Q.14 If a function which does not return a value is Known as__??",
        options:{a:"Static function",b:"Procedures",c:"Method",d:"Dynamic function"},
        correctAnswer:"b",
        prize : 18000
    },
    {
        question:"Q.15 Which one of the following keyword is used for defining the function in the function?? ",
        options:{a:"Void",b:"int",c:"main",d:"function"},
        correctAnswer:"d",
        prize : 20000
    }

    // Add more questions as needed
];



let currentQuestionIndex = 0;
let timer;
let timeLeft = 30;
let prizeAmount = 0;



function startGame() {
    document.getElementById("play").style.display="block"
    displayQuestion();
    document.getElementById("autoplay").play();
    document.getElementById("start").style.display="none"
    startTimer();
}

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    let options = question.options;
    document.querySelector('.option:nth-child(1)').innerText = 'A: ' + options.a;
    document.querySelector('.option:nth-child(2)').innerText = 'B: ' + options.b;
    document.querySelector('.option:nth-child(3)').innerText = 'C: ' + options.c;
    document.querySelector('.option:nth-child(4)').innerText = 'D: ' + options.d;
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! The correct answer was " + questions[currentQuestionIndex].correctAnswer);
            // Move to the next question or end game
            //nextQuestion();
        }
    }, 1000);
}

function submitAnswer(answer) {
    clearInterval(timer);
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        prizeAmount = questions[currentQuestionIndex].prize;
        document.getElementById('prizeAmount').innerText = prizeAmount;
        alert("Correct answer! You've won " + prizeAmount);
        nextQuestion()
    } else {
        alert("Wrong answer! The correct answer was " + correctAnswer);
    }
    //nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        startTimer();
    } else {
        alert("Congratulations! You've completed the game.");
        // Optionally reset the game or display final prize
    }
}

function Autoplay(){
    let audio = document.getElementById("autoplay");
    audio.play();
}

// Initialize game
//startGame();