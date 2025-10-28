// Menunggu hingga seluruh halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mendapatkan elemen-elemen yang kita butuhkan
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrContainer = document.getElementById('qrcode-container');

    // Variabel untuk menyimpan objek QR Code
    let qrcode = null;

    // Fungsi untuk meng-generate QR Code
    function generateQRCode() {
        // Ambil teks dari input dan hapus spasi di awal/akhir
        const text = textInput.value.trim();

        // Jika tidak ada teks, jangan lakukan apa-apa
        if (text === "") {
            alert("Harap masukkan teks terlebih dahulu!");
            textInput.focus();
            return;
        }

        // 1. Hapus QR code yang lama
        qrContainer.innerHTML = "";

        // 2. Buat QR Code baru
        // Kita menggunakan 'new QRCode(element, options)'
        try {
            qrcode = new QRCode(qrContainer, {
                text: text,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H // Level koreksi error (H = High)
            });
        } catch (error) {
            console.error("Gagal membuat QR Code:", error);
            alert("Terjadi kesalahan saat membuat QR Code.");
        }
    }

    // Tambahkan event listener ke tombol "Generate"
    generateBtn.addEventListener('click', generateQRCode);

    // Bonus: Izinkan generate dengan menekan "Enter" di kolom input
    textInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            generateQRCode();
        }
    });

});
