function ageCategory() {
    //Getting the input value
    var age = document.getElementById("input").value;
    var result;

    if (age < 2) {
        result = "Bayi";
    } else  if (age < 11) {
        result = "Anak-anak";
    } else if (age < 21) {
        result  = "Remaja";
    } else if (age < 61) {
        result  = "Dewasa";
    } else  {
        result =  "Lanjut usia";
    }

    //display!!
    document.getElementById("outputone").textContent  = ("Umur " + age + " adalah " +  result);
    document.getElementById("input").value =  "";


}