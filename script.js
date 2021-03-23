
function reverseNumbers() {
    //Getting the input value
    var input = document.getElementById("input").value;

    //splitting it into an array and then reversing it, and then put it back into a string
    splitted = input.toString().split("").reverse().join("");

    //display and return the code
    document.getElementById("output").textContent = splitted;
    document.getElementById("input").value = "";
    return splitted;   
};

