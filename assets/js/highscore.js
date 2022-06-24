// declare DOM variables to use //
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

// add the event listener to clear the scores //

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// retrieve the local storage //
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to redirect back to orginal page //
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});