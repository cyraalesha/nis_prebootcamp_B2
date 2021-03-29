function looping() {
    //Getting the input value
    var gajijam, gajihari, gajibulan, lembur;

    var nama = document.getElementById("name").value;
    var golongan = document.getElementById("golongan").value;
    var jam = document.getElementById("waktu").value;

    if (golongan == "A") {
        gajijam = 1000;
    } else if (golongan == "C") {
        gajijam = 2000;
    } else if (golongan == "D") {
        gajijam = 3000;
    } else if (golongan == "E") {
        gajijam = 4000;
    } 

    gajihari = gajijam*jam;
    gajibulan = gajihari*30;

    var totalJam = jam*30;

    if (totalJam > 200) {
        jamLembur = (totalJam - 200);
        lembur = (jamLembur * (gajijam+200));
    }

    //display time
    document.getElementById("outputnama").textContent = ("Nama pegawai: " + nama);
    document.getElementById("outputgolongan").textContent = ("Golongan: " + golongan);
    document.getElementById("gajihari").textContent = ("Gaji per hari: " + gajihari);
    document.getElementById("gajibulan").textContent = ("Gaji per bulan: " + gajibulan);
    document.getElementById("lembur").textContent = ("Lembur " + lembur);
    document.getElementById("total").textContent = ("Total gaji:  " + (gajibulan + lembur));

    
    





}