function checkPrime() {
    //Getting the input value
    var num = document.getElementById("input").value;
    var output = "bilangan prima"

    

    for (let i = 2; i < num; i++) {
     if (num % i == 0) {
         output = "bukan prima";
         break;
        }
    }

    //display hasil
    document.getElementById("output").textContent  = (num + " " + output);
    document.getElementById("input").value =  "";


  

}