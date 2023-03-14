const id_card_from = document.getElementById('card-form');
const btn_edit = document.getElementById('btn_edit');
const btn_submit = document.getElementById('btn_submit');
const form_portofolio = document.getElementById('form-portofolio');

btn_edit.addEventListener('click', function(e){
    e.preventDefault();
    id_card_from.classList.toggle('hidden');
})

form_portofolio.addEventListener('submit', function(e){
    e.preventDefault();
    const mydataForm = new FormData(e.target);
    const dataObj = {};
    mydataForm.forEach((value, key) => {
        (dataObj[key] = value);
    })
    console.log(dataObj);
    document.querySelector('#availbility_user').innerHTML = dataObj.availbility;
    document.querySelector('#usia_user').innerHTML = dataObj.usia;
    document.querySelector('#lokasi_user').innerHTML = dataObj.lokasi;
    document.querySelector('#universitas_user').innerHTML = dataObj.universitas;
    document.querySelector('#email_user').innerHTML = dataObj.email;
    document.querySelector('#nama_user').innerHTML = dataObj.nama;
    document.querySelector('#role_user').innerHTML = dataObj.role;
    id_card_from.classList.toggle('hidden');
})