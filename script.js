// Validasi sederhana untuk form kontak
function wandi_kirimPesan(event) {
    event.preventDefault();

    var nama = document.getElementById("wandi_nama").value;
    var email = document.getElementById("wandi_email").value;
    var pesan = document.getElementById("wandi_isi").value;
    var status = document.getElementById("wandi_status");

    if (nama == "" || email == "" || pesan == "") {
        status.style.color = "red";
        status.innerHTML = "Semua kolom harus diisi!";
    } else {
        status.style.color = "green";
        status.innerHTML = "Terima kasih, " + nama + "! Pesan kamu sudah terkirim.";
        document.getElementById("wandi_formkontak").reset();
    }
}

// Tahun otomatis di footer
function wandi_tahun() {
    var el = document.getElementById("wandi_tahun");
    if (el) {
        el.innerHTML = new Date().getFullYear();
    }
}
window.onload = wandi_tahun;
