// Navbar Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".navbar ul").classList.toggle("show");
});

// Ucapan "Hai Nama"
let namaUser = prompt("Masukkan Nama Anda:");
if (namaUser) {
    document.getElementById("welcomeText").innerText = `Hai, ${namaUser}`;
}

// Validasi Form & Tambah Data ke Tabel
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let tanggalLahir = document.getElementById("tanggalLahir").value;
    let email = document.getElementById("email").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let pesan = document.getElementById("pesan").value.trim();

    if (!nama || !tanggalLahir || !email || !gender || !pesan) {
        alert("Semua field harus diisi!");
        return;
    }

    // Tambahkan data ke tabel
    let table = document.getElementById("messageTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    let cellNama = newRow.insertCell(0);
    let cellTanggalLahir = newRow.insertCell(1);
    let cellEmail = newRow.insertCell(2);
    let celGender = newRow.insertCell(3);
    let cellPesan = newRow.insertCell(4);

    cellNama.textContent = nama;
    cellTanggalLahir.textContent = tanggalLahir;
    cellEmail.textContent = email;
    celGender.textContent = gender;
    cellPesan.textContent = pesan;

    // Reset form
    document.getElementById("contactForm").reset();
});
