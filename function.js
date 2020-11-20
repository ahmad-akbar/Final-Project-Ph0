
function booking() {
    let nama = document.getElementById("Nama").value
    let hp = document.getElementById("NomorHp").value
    let jadwal = document.getElementById("hari").value
    let checkbox = document.getElementsByName("Layanan");
    let  Layanan = "";
    for(let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            Layanan = Layanan + checkbox[i].value +", ";
        }
    }
    let txt = ''
    let tanya = confirm(`Konfirmasi layanan Bapak/Ibu ${nama}, No. Hp ${hp} ! \n ${Layanan} pada hari ${jadwal}. \n Apakah sudah benar ?`)
        if(tanya === true){
            txt = `Anda telah memesan layanan di MyBengkel. \n\ Terima kasih Bapak/Ibu ${nama} !!`
        } else {
            txt = 'Anda telah membatalkan booking'
        }
    alert(txt); 
}
