function convert() {
    //Getting the input value
    var nilaisuhu =  document.getElementById("nilaisuhu").value;
    var jenis =  document.getElementById("jenis").value;
    var jeniskonversi = document.getElementById("jeniskonversi").value;

    var suhufinal;



    if (jenis == "celcius") {
        if (jeniskonversi == "kelvin") {
            suhufinal = (nilaisuhu + 273.15);
        } else if (jeniskonversi == "fahrenheit") {
            suhufinal = ((nilaisuhu*1.8) + 32);
        } else {
            suhufinal = nilaisuhu;
        }
    }

     if (jenis == "fahrenheit") {
        if (jeniskonversi == "kelvin") {
            suhufinal = ((nilaisuhu-32)/1.8) + 32;
        } else if (jeniskonversi == "celcius") {
            suhufinal = ((nilaisuhu - 32) / 1.8);
        } else {
            suhufinal = nilaisuhu;
        }
    }
      if (jenis == "kelvin") {
        if (jeniskonversi == "celcius") {
            suhufinal = (nilaisuhu - 273.15);
        } else if (jeniskonversi == "fahrenheit") {
            suhufinal = (((nilaisuhu-273.15)*1.8)+32);
        } else {
            suhufinal = nilaisuhu;
        }
    }

    document.getElementById("output").textContent = (suhufinal + " " + jeniskonversi)

}