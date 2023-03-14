//Algortima dan pseudocode
// INIT phi lingkaran = 3.14
// READ "r" with any value

// COMPUTE "phi" dikali "r" dikali "r"
// SAVE hasil COMPUTE
// SHOW luas dari COMPUTE

// COMPUTE 2 dikali "phi" dikali "r"
// SAVE hasil COMPUTE
// SHOW Keliling dari COMPUTE


const phi = 3.14;
const jari_jari = document.getElementById("jari_jari");
const hasil_luas_show = document.getElementById("HasilLuas");
const hasil_keliling_show = document.getElementById("HasilKeliling");
const hitung = document.getElementById("hitung");

hitung.addEventListener("click", function(e){
    e.preventDefault()
    if(jari_jari.value != ""){
        const r_value = parseInt(jari_jari.value)
        const total_luas = phi * r_value * r_value;
        hasil_luas_show.innerHTML = total_luas;
    
        const total_kel = 2*phi*r_value;
        hasil_keliling_show.innerHTML = total_kel;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Jari jari harus diisi',
          })
    }
})
