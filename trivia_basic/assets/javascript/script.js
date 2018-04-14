//Variables
var counter = 60;
var intervalId;
var answers = {
    true: 0,
    false: 0,
    unanswered: 10,
};
//var score;

//Results
function answerResults() {
    
    //Part 1: Declare Radio Button to Variable
    var answer1 = $("[name='q1']:checked").attr("data-value");
    var answer2 = $("[name='q2']:checked").attr("data-value");
    var answer3 = $("[name='q3']:checked").attr("data-value");
    var answer4 = $("[name='q4']:checked").attr("data-value");
    var answer5 = $("[name='q5']:checked").attr("data-value");
    var answer6 = $("[name='q6']:checked").attr("data-value");
    var answer7 = $("[name='q7']:checked").attr("data-value");
    var answer8 = $("[name='q8']:checked").attr("data-value");
    var answer9 = $("[name='q9']:checked").attr("data-value");
    var answer10 = $("[name='q10']:checked").attr("data-value");
    
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

    //Tried adding button but wasnt working, went back to previous activities to find a better solution:
    //var score = "<p>Harry Potter Trivia Score: " + 
    //"<br>Questions Answered Correctly: " + answers.true + 
    //"<br>Questions Answered Incorrectly: " + answers.false + 
    //"<br>Unanswered Questions: " + answers.unanswered + "</p>";

    //$("#scoreResults").html(score);

    $("#trueAnswers").text(answers.true);
	$("#falseAnswers").text(answers.false);
	$("#unanswerAnswers").text(answers.unanswered);
};  

//Countdown Timer
function clockRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};
function decrement () {
    counter--;
    $("#counter").text(counter);

    if (counter === 0) {
		submit();
	}
};

//Start
function start() {
    clockRun();

    //$("#startScreen").addClass("hidden2");
    $("#startScreen").addClass("divHidden");

    //$("#triviaQuestions").addClass("visible");
    $("#triviaQuestions").removeClass("divHidden");

    $("body").css("background-image", "url('assets/image/hp_background.jpg')")

};  

//Submit 
function submit() {

    //$("#startScreen").addClass("hidden2");
    $("#startScreen").addClass("divHidden");

    //$("#triviaQuestions").addClass("hidden4");
    $("#triviaQuestions").addClass("divHidden");

    //$("#score").addClass("visible");
    $("#score").removeClass("divHidden");

    $("body").css("background-image", "url('assets/image/background.jpg')")

    clearInterval(intervalId);

    answerResults();
      
};

//Reset
function reset() {

    counter = 60;
    intervalId;
    answers = {
        true: 0,
        false: 0,
        unanswered: 10,
    };

    $('input[name="q1"]').prop('checked', false);
    $('input[name="q2"]').prop('checked', false);
    $('input[name="q3"]').prop('checked', false);
    $('input[name="q4"]').prop('checked', false);
    $('input[name="q5"]').prop('checked', false);
    $('input[name="q6"]').prop('checked', false);
    $('input[name="q7"]').prop('checked', false);
    $('input[name="q8"]').prop('checked', false);
    $('input[name="q9"]').prop('checked', false);
    $('input[name="q10"]').prop('checked', false);

    $("#startScreen").removeClass("divHidden");

    $("#triviaQuestions").addClass("divHidden");

    $("#score").addClass("divHidden");
    
    //location.reload(); --> Not Recommended 
};

//When Start Clicked
$("#startButton").on("click", start);

//When Submit Clicked
$("#submitButton").on("click", submit);

//When Time Runs Out (Moved Above To Timer!)

//When Reset Clicked
$("#resetButton").on("click", reset);
