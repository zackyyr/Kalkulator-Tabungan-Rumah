// Fungsi untuk format angka
function formatRupiah(value) {
    let numberString = value.replace(/[^0-9]/g, '');
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function removeFormatting(value) {
    return value.replace(/[^0-9]/g, '');
}
document.getElementById('harga').addEventListener('input', function() {
    this.value = formatRupiah(this.value);
});

document.getElementById('jumlahTabunganBulan').addEventListener('input', function() {
    this.value = formatRupiah(this.value);
});

document.getElementById('uangMuka').addEventListener('input', function() {
    this.value = formatRupiah(this.value);
});

document.getElementById('lamaTabungan').addEventListener('input', function() {
    this.value = formatRupiah(this.value);
});

document.getElementById('submitTabungan').addEventListener('click', function() {
    event.preventDefault(); // Mencegah form submit

    // Ambil nilai input
    let hargaRumah          = removeFormatting(document.getElementById('harga').value);
    let uangMukaPersen      = removeFormatting(document.getElementById('uangMuka').value);
    let jumlahTabunganBulan = removeFormatting(document.getElementById('jumlahTabunganBulan').value);
    let bungaTabungan       = removeFormatting(document.getElementById('bungaTabungan').value);
    let lamaTabungan        = removeFormatting(document.getElementById('lamaTabungan').value);

    // Lakukan perhitungan menggunakan nilai yang sudah dibersihkan
    let uangMuka = hargaRumah * (uangMukaPersen / 100);
    let totalTabungan = jumlahTabunganBulan * lamaTabungan;
    
    let totalTabunganDenganBunga = totalTabungan * (1 + (bungaTabungan / 100));

    // Menampilkan hasil perhitungan
    document.getElementById('totalHargaRumah').innerText          = hargaRumah.toLocaleString();
    document.getElementById('totalUangMuka').innerText            = uangMuka.toLocaleString();
    document.getElementById('totalTabunganBulanan').innerText     = jumlahTabunganBulan.toLocaleString();
    document.getElementById('totalTabunganDenganBunga').innerText = totalTabunganDenganBunga.toLocaleString();
    document.getElementById('hasilPerhitungan').style.display     = 'block';
});
