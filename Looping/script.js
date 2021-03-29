function looping() {
    //Getting the input value
    var input = document.getElementById("input").value;

    //get the result
    var naikSatu = [];
    var kuadrat = [];
    var bythree = [];

    for (let i = 1; i<=input; i++) {

        naikSatu.push(i);
        kuadrat.push(i*i);
        bythree.push(i*3);
    }

    console.log(naikSatu)

    //display the result
    document.getElementById("outputone").textContent = ("Naik satu: " + naikSatu);
    document.getElementById("outputtwo").textContent = ("Kuadrat: "+ kuadrat);
    document.getElementById("outputthree").textContent =  ("Kelipatan 3: "+ bythree);

}