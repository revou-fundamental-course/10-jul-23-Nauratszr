var calcDisplay =""
    
    function peringatan(){
        let jenisKelamin = document.getElementById("input-pria").value;
        let beratBadan = document.getElementById("input-BB").value;
        let usia = document.getElementById("input-usia").value;
        let tinggiBadan = document.getElementById("input-TB").value;
                
        let hasil = beratBadan / ( tinggiBadan * tinggiBadan );
                
        console.log(hasil);
        document.write('Hasil BMI Anda adalah' + hasil)
        }
    function btnClick(e){
        if (e == "AC") {
                calcDisplay = ""
        }
    }
