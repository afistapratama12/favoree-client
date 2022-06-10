interface FAQItemProps {
    question: string;
    answer: string;
}

export const questionItems: Array<FAQItemProps> = [{
    question : "Bagaimana cara transaksi dengan Favoree ?",
    answer: 'Cukup klik tombol "Mulai Convert" di halaman beranda, lalu masukkan nomor e-wallet kamu, masukkan nomor e-wallet tujuan dan bukti pengiriman pada nomor e-wallet Favoree. Jika sudah, klik tombol kirim dan kamu akan menerima konfirmasi transaksi melalui WhatsApp!'
},{
    question : "Berapa biaya admin untuk transaksi e-wallet ?",
    answer: 'Favoree menawarkan biaya transaksi convert e-wallet yang terjangkau. Kamu cukup membayar Rp. 1000 untuk setiap transaksi dengan pengajuan maksimal Rp 500.000. Jika kamu memiliki transaksi yang lebih besar diatas Rp. 500.000, maka akan dipotong biaya admin Rp. 2.000. Dan khusus untuk pembayaran menggunakan QRIS akan dikenakan biaya admin Rp 2.000 setiap transaksi.'
},{
    question : "Apakah transaksi dengan Favoree aman ?",
    answer: 'Favoree menerapkan keamanan ganda pada data pribadi seluruh pengguna Favoree dan menjamin keamanan semua proses transaksi yang terjadi di Favoree dengan jaminan uang kembali.'
},{
    question : "Apa saja yang dapat dilayani oleh Favoree ?",
    answer: 'Dengan Favoree, kamu dapat melakukan convert e-wallet ke e-wallet tujuan yang berbeda dengan e-wallet yang kamu gunakan dengan biaya terjangkau. Favoree dapat melakukan transaksi pada beberapa e-wallet di Indonesia yaitu GOPAY, OVO, DANA dan SHOPEEPAY.'
}, {
    question : 'Berapa lama saya akan menerima saldo e-wallet saya ?',
    answer : 'Proses transaksi di Favoree membutuhkan waktu 1-2 jam saja. Kamu akan mendapatkan pesan konfirmasi melalui Whatsapp terkait dengan transaksi kamu. Jadi pastikan menyertakan nomor yang tersambung dengan aplikasi WhatsApp.'
}]