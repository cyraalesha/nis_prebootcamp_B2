function displayInput() {
    var input  = document.getElementById("input").value;
    document.getElementById("output").textContent = input;
    document.getElementById("input").value = "";
}