# 🎨 Interactive Flexbox - Pembelajaran Flexbox Interaktif

Aplikasi web interaktif untuk mempelajari CSS Flexbox dengan cara yang menyenangkan dan visual. Dibangun dengan Tailwind CSS dan JavaScript vanilla.

## ✨ Fitur Utama

- 🎯 **Kontrol Interaktif**: Ubah properti flexbox secara real-time
  - `flex-direction` (row/column)
  - `justify-content` (flex-start, center, flex-end, space-between, space-around, space-evenly)
  - `align-items` (flex-start, center, flex-end, stretch, baseline)
  - `align-content` (flex-start, center, flex-end, space-between, space-around, stretch)
  - `flex-wrap` (wrap/nowrap)

- 🖱️ **Drag & Drop**: Seret dan lepas kotak untuk mengubah urutan elemen
- 🎬 **Animasi FLIP**: Transisi halus saat mengubah tata letak
- 📝 **Penjelasan Dinamis**: Deskripsi otomatis untuk setiap kombinasi properti
- 🌊 **Animasi Latar Belakang**: Efek gelombang dan bintang yang indah
- 📱 **Responsive**: Bekerja dengan baik di berbagai ukuran layar

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **Tailwind CSS**: Framework CSS utility-first (via CDN)
- **JavaScript ES6+**: Logika aplikasi dengan ES Modules
- **Canvas API**: Animasi latar belakang

## 🚀 Cara Menggunakan

### Menjalankan Aplikasi

1. **Clone repository**:
   ```bash
   git clone https://github.com/Radhitndrm/interactive-flexbox.git
   cd interactive-flexbox
   ```

2. **Buka file HTML**:
   - Buka file `index.html` langsung di browser Anda
   - Atau gunakan live server (contoh: VS Code Live Server)
   
3. **Mulai eksplorasi**:
   - Gunakan dropdown untuk mengubah properti flexbox
   - Seret kotak-kotak untuk mengubah urutan
   - Lihat perubahan secara real-time!

### Cara Berinteraksi

1. **Mengubah Properti Flexbox**:
   - Pilih nilai yang berbeda dari dropdown untuk melihat efeknya
   - Perhatikan bagaimana kotak-kotak bergerak dan menyesuaikan diri

2. **Drag & Drop**:
   - Klik dan tahan pada kotak yang ingin dipindahkan
   - Seret ke posisi baru
   - Lepaskan untuk menjatuhkan

3. **Toggle Flex Wrap**:
   - Centang/hilangkan centang checkbox "Flex Wrap"
   - Lihat bagaimana kotak membungkus ke baris/kolom baru

## 📁 Struktur Proyek

```
interactive-flexbox/
├── index.html              # Halaman utama
├── js/
│   ├── main.js            # Entry point aplikasi
│   ├── flexbox.js         # Logika flexbox dan deskripsi
│   ├── dragdrop.js        # Implementasi drag & drop
│   └── starwave.js        # Animasi latar belakang
└── README.md              # Dokumentasi
```

### Deskripsi File JavaScript

- **`main.js`**: Mengatur event listeners dan orkestrasi komponen
- **`flexbox.js`**: 
  - Membuat kotak-kotak
  - Generate deskripsi properti flexbox
  - Implementasi animasi FLIP
- **`dragdrop.js`**: Menangani fungsionalitas drag and drop
- **`starwave.js`**: Animasi canvas dengan bintang dan gelombang

## 📚 Penjelasan Properti Flexbox

### Flex Direction
Menentukan arah utama dari flex container:
- `row`: Horizontal (kiri ke kanan)
- `column`: Vertikal (atas ke bawah)

### Justify Content
Mengatur posisi elemen sepanjang sumbu utama (main axis):
- `flex-start`: Dimulai dari awal
- `center`: Di tengah
- `flex-end`: Di akhir
- `space-between`: Jarak merata tanpa ruang di tepi
- `space-around`: Ruang seimbang di sekitar setiap elemen
- `space-evenly`: Jarak yang sama persis

### Align Items
Mengatur posisi elemen sepanjang sumbu silang (cross axis):
- `flex-start`: Di awal sumbu silang
- `center`: Di tengah sumbu silang
- `flex-end`: Di akhir sumbu silang
- `stretch`: Rentang penuh
- `baseline`: Sejajar dengan garis dasar teks

### Align Content
Mengatur jarak antar baris/kolom (hanya berlaku jika wrap aktif):
- `flex-start`: Baris dikumpulkan di awal
- `center`: Baris di tengah
- `flex-end`: Baris di akhir
- `space-between`: Jarak merata antar baris
- `space-around`: Ruang seimbang sekitar baris
- `stretch`: Baris direntangkan

### Flex Wrap
- `wrap`: Elemen membungkus ke baris/kolom baru jika tidak muat
- `nowrap`: Semua elemen tetap di satu baris/kolom

## 🎯 Tujuan Pembelajaran

Aplikasi ini dirancang untuk membantu:
- 📖 Memahami konsep CSS Flexbox secara visual
- 🧪 Bereksperimen dengan berbagai kombinasi properti
- 💡 Melihat efek real-time dari setiap perubahan
- 🎓 Belajar CSS Flexbox dengan cara yang interaktif dan menyenangkan

## 🌟 Fitur Teknis

### Animasi FLIP
Aplikasi menggunakan teknik FLIP (First, Last, Invert, Play) untuk animasi yang halus:
1. **First**: Catat posisi awal
2. **Last**: Ubah properti CSS
3. **Invert**: Hitung perbedaan posisi
4. **Play**: Animasikan transisi

### Modular JavaScript
Kode diorganisir dalam ES Modules untuk:
- Pemisahan tanggung jawab yang jelas
- Kode yang mudah dipelihara
- Reusabilitas komponen

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📝 Lisensi

Proyek ini bersifat open source dan tersedia untuk tujuan pembelajaran.

## 👨‍💻 Pengembang

Dibuat dengan ❤️ untuk membantu pembelajaran CSS Flexbox

---

**Selamat belajar Flexbox! 🚀**
