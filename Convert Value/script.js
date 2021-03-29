function showScore() {
    //Getting the input value
    var score = document.getElementById("input").value;

    if (score > 100) {
        score = "invalid, please enter a value below 100";
    } else  if (score >= 86) {
        score = "A";
    } else if (score >= 70) {
        score  = "B";
    } else if (score >= 50) {
        score  = "C";
    } else if (score >= 30) {
        score  = "D";
    } else if (score >= 0) {
        score  = "E";
    } else  {
        score =  "Invalid, please enter a value over 0";
    }

    //display!!
    document.getElementById("output").textContent  = ("Your conversion  score is: " + score);
    document.getElementById("input").value =  "";


}