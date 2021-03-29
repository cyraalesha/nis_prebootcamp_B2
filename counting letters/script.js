function countLetters() {
    //Getting the input value
    var text = document.getElementById("input").value;
    var letter = document.getElementById("letter").value;

    

    var letter_Count = 0;
    for (var position = 0; position < text.length; position++) {
    if (text.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }

    //display hasil
    document.getElementById("output").textContent  = ("Huruf " + letter + " muncul " + letter_Count + " kali ");
    document.getElementById("input").value =  "";
    document.getElementById("letter").value =  "";


  

}