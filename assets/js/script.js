// Write out all questions, creating an array //
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
// declare DOM objects to be used //
var currentTime = document.querySelector("currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var timer = document.querySelector("#startTime");
// declare variables starting at start //
var score = 0;
var questionIndex = 0;
// 15 seconds per question, 5 questions //
var timeLeft = 76;
// penalty is the time penalized for incorrect answers //
var penalty = 10;
var holdInterval = 0;
//create an element //
var elCreate = document.createElement("ul");

// Triggers timer on button assigned to "timer", shows user a message
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// function to display questions to page //

function render(questionIndex) {
    questionsDiv.innerHTML = "";
    elCreate.innerHTML = "";

    // creates for loop to cycle and append questions //
    for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userOptions = questions[questionIndex].options;
    questionsDiv.textContent = userQuestion;
    }
    // creates elements for each option //
    userOptions.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(elCreate);
        elCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
    // function to check user answer //

    function compare(event) {
        var element = event.target;

        if (element.matches("li")) {

            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
            // if correct //
            if (element.textContent == questions[questionIndex].answer) {
                score++;
                    createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            } else {
                // if incorrect //
                timeLeft = timeLeft - penalty;
                createDiv.textContent = "Incorrect! The Correct answer is:   " + questions[questionIndex].answer;
            }
        }

        // question count //
        questionIndex++;
        // if no more questions then display message. if questions remain, keep going //
        if (questionIndex >= questions.length) {
            allDone();
            createDiv.textContent = "Quiz is over!" + " " + "You got " + score + "/" + questions.length + "Correct!";
        } else {
            render(questionIndex);
        }
        // append this message //
        questionsDiv.appendChild(createDiv);
        }

    }
