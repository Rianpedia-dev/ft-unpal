Berikut adalah Product Requirements Document (PRD) yang komprehensif untuk pengembangan website statis Fakultas Teknik Universitas Palembang.

# Product Requirements Document (PRD)

**Proyek:** Website Company Profile Fakultas Teknik Universitas Palembang
**Fase:** V1.0 (Frontend Only, Static Data)

---

## 1. Ringkasan Proyek

Pengembangan website profil resmi untuk Fakultas Teknik Universitas Palembang. Website ini dibangun murni di sisi *frontend* (klien) dengan menggunakan data statis, yang berarti tidak memerlukan integrasi *backend* atau *Database Management System* (DBMS) pada fase ini. Tujuan utama website ini adalah untuk menyajikan informasi akademik, profil fakultas, dan layanan pendaftaran secara cepat, responsif, dan modern.

## 2. Tumpukan Teknologi (Tech Stack)

Pengembangan akan menggunakan teknologi modern dengan fokus pada performa, aksesibilitas, dan kemudahan pemeliharaan antarmuka:

| Komponen | Teknologi | Deskripsi |
| --- | --- | --- |
| **Framework** | **Next.js** | Menggunakan App Router untuk *routing* halaman yang cepat dan optimalisasi *Static Site Generation* (SSG). |
| **Styling** | **Tailwind CSS** | *Utility-first CSS framework* untuk mempercepat proses *styling* yang responsif. |
| **UI Components** | **shadcn/ui** | Komponen antarmuka yang dapat disesuaikan (*copy-paste*), dibangun di atas Tailwind. |
| **Primitives UI** | **Radix UI** | Menyediakan dasar komponen yang *headless* dan 100% *accessible* (digunakan oleh shadcn). |
| **Data Source** | **JSON / TS Objects** | Semua data (teks, daftar dosen, galeri) disimpan secara lokal dalam folder `data/` sebagai konstan TypeScript atau JSON. |

## 3. Panduan UI/UX & Visual

* **Tema Visual:** Mengadopsi pendekatan desain modern dengan sentuhan estetika ala *Web3*—bersih, minimalis, dan interaktif.
* **Palet Warna:** Memanfaatkan skema warna berbasis krem (*cream-based*) sebagai warna latar belakang sekunder untuk memberikan kesan elegan dan profesional, dipadukan dengan warna utama identitas Universitas Palembang.
* **Tipografi:** Font Sans-Serif modern (seperti Inter atau Plus Jakarta Sans) yang memiliki tingkat keterbacaan tinggi dengan hierarki ukuran yang jelas.
* **Komponen Spesifik (shadcn/ui):**
* `Navigation Menu` untuk *header*.
* `Card` untuk daftar berita, profil dosen, dan galeri.
* `Carousel` atau `Tabs` untuk navigasi informasi publikasi/PMB.
* `Dialog` atau `Sheet` untuk navigasi *mobile*.



---

## 4. Struktur Halaman & Fungsionalitas (Sitemap)

Berikut adalah detail arsitektur informasi dan kebutuhan fitur untuk masing-masing halaman:

### 1. Beranda (Home)

Halaman pendaratan utama yang memberikan impresi pertama dan navigasi cepat ke informasi esensial.

* **Hero Section:** *Banner* gambar/video statis Fakultas Teknik dengan *headline* utama dan tombol *Call-to-Action* (CTA) menuju halaman PMB.
* **Sambutan Dekan:** Foto dan pesan singkat dari Dekan Fakultas Teknik.
* **Statistik Singkat:** Angka jumlah mahasiswa, dosen, dan program studi.
* **Quick Links:** Navigasi cepat bergaya *grid/card* menuju Portal Mahasiswa, Jadwal Kuliah, dan e-Learning (meskipun link eksternal).

### 2. Profil

Menyajikan identitas inti dari Fakultas Teknik.

* **Sejarah:** Teks naratif sejarah berdirinya fakultas.
* **Visi & Misi:** Disajikan menggunakan tipografi tebal atau komponen `Card`.
* **Struktur Organisasi:** Bagan statis atau daftar hierarki dari Dekanat hingga Program Studi (Kaprodi).
* **Fasilitas:** Daftar lab, perpustakaan, dan ruang kelas beserta foto.

### 3. Civitas

Halaman direktori anggota akademik.

* **Dosen:** Daftar profil dosen (Nama, NIDN, Keahlian). Dapat menggunakan komponen `Grid` dengan fitur pencarian statis berbasis teks di *frontend*.
* **Tenaga Kependidikan:** Daftar staf administrasi dan teknisi.
* **Mahasiswa (BEM/HIMA):** Informasi singkat mengenai organisasi kemahasiswaan intra-kampus.

### 4. PMB (Penerimaan Mahasiswa Baru)

Pusat informasi bagi calon mahasiswa Fakultas Teknik.

* **Jadwal & Gelombang:** Tabel informasi tenggat waktu pendaftaran.
* **Persyaratan:** Daftar *bullet points* dokumen yang dibutuhkan (misal: lulusan SMA/SMK sederajat).
* **Prosedur:** Komponen *Timeline/Stepper* dari proses pendaftaran hingga daftar ulang.
* **Call-to-Action:** Tombol "Daftar Sekarang" yang mengarah ke portal utama PMB Universitas Palembang.

### 5. Galeri

Dokumentasi visual kegiatan kampus.

* **Grid Album:** Menampilkan *thumbnail* foto kegiatan (seminar, praktikum, wisuda). Menggunakan tata letak *masonry* atau *grid* responsif.
* **Lightbox/Dialog:** Saat foto diklik, gambar akan membesar menggunakan komponen `Dialog` dari shadcn/ui.

### 6. Kontak

Informasi operasional dan saluran komunikasi.

* **Alamat & Peta:** Detail alamat gedung Fakultas Teknik dan *embed* Google Maps statis.
* **Saluran Komunikasi:** Email resmi, nomor telepon, dan tautan media sosial.
* **Formulir Pesan:** Desain formulir kontak (Nama, Email, Pesan). *(Catatan: Karena frontend-only, form ini bersifat statis visual atau bisa disambungkan ke layanan pihak ketiga gratis seperti Formspree jika ingin dibuat berfungsi).*

### 7. Publikasi

Wadah karya tulis dan penelitian akademik.

* **Jurnal Ilmiah:** Tautan ke jurnal-jurnal yang diterbitkan oleh fakultas.
* **Daftar Penelitian/Pengabdian:** Daftar abstrak statis dari penelitian terbaru para dosen. Ditampilkan dengan komponen `Accordion` untuk menghemat ruang vertikal.

---

## 5. Manajemen Data Statis

Untuk menjaga kerapian *source code*, semua data tidak akan di-hardcode di dalam komponen UI, melainkan disimpan dalam direktori khusus (misalnya `src/data/`):

* `civitas.ts` (Array objek berisi data dosen: nama, jabatan, URL foto)
* `pmb.ts` (Data jadwal, biaya kuliah statis, persyaratan)
* `gallery.ts` (Array URL gambar dan *caption*)
* `publications.ts` (Daftar jurnal dan abstrak penelitian)

Hal ini memungkinkan pembaruan konten secara cepat oleh *developer* tanpa harus merusak struktur komponen UI.

## 6. Persyaratan Non-Fungsional

1. **Responsivitas (Mobile-First):** Website harus tampil proporsional di perangkat *mobile*, tablet, maupun *desktop*.
2. **Aksesibilitas (a11y):** Dukungan penuh untuk *screen reader* dan navigasi *keyboard*, difasilitasi secara bawaan oleh komponen Radix UI.
3. **Performa (Lighthouse):** Karena memanfaatkan Next.js dengan data statis, target skor metrik performa, SEO, dan aksesibilitas berada di atas 90.