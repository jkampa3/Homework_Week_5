//Variables
var counter = 90;
var counterRunOut;
var intervalId;
var answers = {
    true: 0,
    false: 0,
    unanswered: 10,
};
var score;

//Start
function start() {
    clockRun();

	$('#startScreen').addClass('hidden2');

    $('#triviaQuestions').addClass('visible');

    $('body').css('background-image', 'url("assets/image/hp_background.jpg")')

};

//Results
function answerResults() {
    
    //Part 1: Declare Radio Button to Variable
    var answer1 = $('[name="q1"]:checked').attr('data-value');
    var answer2 = $('[name="q2"]:checked').attr('data-value');
    var answer3 = $('[name="q3"]:checked').attr('data-value');
    var answer4 = $('[name="q4"]:checked').attr('data-value');
    var answer5 = $('[name="q5"]:checked').attr('data-value');
    var answer6 = $('[name="q6"]:checked').attr('data-value');
    var answer7 = $('[name="q7"]:checked').attr('data-value');
    var answer8 = $('[name="q8"]:checked').attr('data-value');
    var answer9 = $('[name="q9"]:checked').attr('data-value');
    var answer10 = $('[name="q10"]:checked').attr('data-value');
    
    //Part 2: Answer Counting
    if (answer1 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer1 === "false") {
        answers.false++;
        answers.unanswered--;  
    };
    if (answer2 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer2 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer3 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer3 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer4 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer4 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer5 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer5 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer6 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer6 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer7 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer7 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer8 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer8 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer9 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer9 === "false") {
        answers.false++;
        answers.unanswered--;
    };
    if (answer10 === "true") {
        answers.true++;
        answers.unanswered--;
    } else if (answer10 === "false") {
        answers.false++;
        answers.unanswered--;
    };

    var score = "<p>Harry Potter Trivia Score: " + 
    "<br>Questions Answered Correctly: " + answers.true + 
    "<br>Questions Answered Incorrectly: " + answers.false + 
    "<br>Unanswered Questions: " + answers.unanswered + "</p>";

    $('#scoreResults').html(score);
};    

//Submit 
function submit() {

    //$('#startScreen').addClass('hidden2');

    //$('#triviaQuestions').addClass('hidden4');

    //$('#score').addClass('visible');

    clearInterval(intervalId);

    answerResults();
      
};

//Restart



//Countdown Timer
function clockRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement () {
    counter--;
    $("#counter").text(counter);
}

//When Start Clicked
$("#startButton").on("click", start);

//When Submit Clicked
$("#submitButton").on("click", submit);

//When Time Runs Out
//counterRunOut = setInterval(submit, 90000);

//When Restart Clicked