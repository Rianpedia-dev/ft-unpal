// ============================================================================
// DATA PUBLIKASI, JURNAL ILMIAH, PENELITIAN, BERITA, & ARTIKEL FT UNPAL
// File ini digunakan untuk pengelolaan data Jurnal Ilmiah OJS, Penelitian Dosen,
// Beritas Utama Fakultas, serta Artikel Informasi Akademik.
// ============================================================================

export interface Journal {
  id: string;
  nama: string;
  singkatan: string;
  issn: string;
  akreditasi: string;
  deskripsi: string;
  url: string;
}

export interface Research {
  id: string;
  judul: string;
  peneliti: string[];
  prodi: string;
  tahun: number;
  skema: "Penelitian Dosen" | "Pengabdian Masyarakat" | "Hibah Dikti";
  abstrak: string;
  doiUrl?: string;
}

export interface Berita {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  ringkasan: string;
  penulis: string;
  gambar: string;
}

export interface Artikel {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  abstrak: string;
  penulis: string;
}

// ----------------------------------------------------------------------------
// 1. DAFTAR JURNAL ILMIAH RESMI FAKULTAS (OJS)
// Edit nama jurnal, singkatan, ISSN, peringkat SINTA, serta URL Open Journal System.
// ----------------------------------------------------------------------------
export const daftarJurnal: Journal[] = [
  {
    id: "jur-1",
    nama: "Jurnal Teknik Civilia & Lingkungan Palembang",
    singkatan: "J-CIVILIA",
    issn: "p-ISSN: 2355-1029 | e-ISSN: 2685-9981",
    akreditasi: "SINTA 4",
    deskripsi:
      "Jurnal ilmiah berkala yang memuat hasil penelitian original di bidang teknik sipil, rekayasa struktur, geoteknik, dan manajemen air.",
    url: "https://ejournal.universitas-palembang.ac.id/index.php/civilia",
  },
  {
    id: "jur-2",
    nama: "Jurnal Rekayasa Energi & Mekanika (JREM)",
    singkatan: "JREM",
    issn: "p-ISSN: 2407-3312 | e-ISSN: 2715-4421",
    akreditasi: "SINTA 4",
    deskripsi:
      "Wadah publikasi artikel ilmiah tentang konversi energi, teknik manufaktur, perancangan mekanik, dan ilmu material.",
    url: "https://ejournal.universitas-palembang.ac.id/index.php/jrem",
  },
  {
    id: "jur-3",
    nama: "Jurnal Sistem Informasi & Teknologi Elektro (J-SISTEL)",
    singkatan: "J-SISTEL",
    issn: "p-ISSN: 2580-0192 | e-ISSN: 2809-1234",
    akreditasi: "SINTA 3",
    deskripsi:
      "Memuat artikel berkualitas di bidang jaringan tenaga listrik, elektro industri, telekomunikasi, dan sistem kecerdasan buatan.",
    url: "https://ejournal.universitas-palembang.ac.id/index.php/sistel",
  },
];

// ----------------------------------------------------------------------------
// 2. DAFTAR PENELITIAN DOSEN & HAKI
// Edit riset unggulan dosen, tim peneliti, abstrak, skema hibah, & DOI.
// ----------------------------------------------------------------------------
export const daftarPenelitian: Research[] = [
  {
    id: "res-1",
    judul:
      "Analisis Kuat Tekan dan Modulus Elastisitas Beton Geopolimer Berbahan Dasar Abu Terbang (Fly Ash) PT Pusri",
    peneliti: ["Dr. Ir. Hendra Wijaya, M.T.", "Dr. Ir. Ahmad Fauzi, M.T."],
    prodi: "Teknik Sipil",
    tahun: 2025,
    skema: "Hibah Dikti",
    abstrak:
      "Penelitian ini bertujuan untuk memanfaatkan limbah fly ash dari industri pupuk sebagai bahan pengganti semen dalam pembuatan beton geopolimer eco-friendly. Hasil pengujian menunjukkan bahwa campuran fly ash 60% menghasilkan kuat tekan hingga 38.5 MPa pada umur 28 hari, yang memenuhi kriteria beton mutu tinggi.",
    doiUrl: "https://doi.org/10.12345/j-civilia.v10i2.2025",
  },
  {
    id: "res-2",
    judul:
      "Rancang Bangun Sistem Monitoring Kualitas Udara Real-Time Berbasis IoT dan Machine Learning di Kawasan Industri Palembang",
    peneliti: ["Dr. Muhammad Rizki, S.Kom., M.Cs.", "Rian Hidayat, S.Kom., M.Kom."],
    prodi: "Teknik Informatika",
    tahun: 2025,
    skema: "Penelitian Dosen",
    abstrak:
      "Studi ini mengembangkan prototipe node sensor berbasis ESP32 yang terhubung dengan sensor PM2.5, CO2, dan NO2. Data dikirimkan secara berkala ke cloud broker MQTT dan dianalisis menggunakan algoritma Random Forest untuk memprediksi Indeks Standar Pencemar Udara (ISPU) dalam 24 jam ke depan dengan akurasi 94.2%.",
    doiUrl: "https://doi.org/10.12345/j-sistel.v8i1.2025",
  },
  {
    id: "res-3",
    judul:
      "Optimasi Kinerja Motor Stirling Tipe-Gamma dengan Pemanfaatan Panas Buang Cerobong Pabrik",
    peneliti: ["Dr. Agus Prasetyo, S.T., M.T.", "Dr. Rudi Hartono, S.T., M.Eng."],
    prodi: "Teknik Mesin",
    tahun: 2024,
    skema: "Penelitian Dosen",
    abstrak:
      "Penelitian ini mengevaluasi efisiensi mekanis motor Stirling tipe-gamma yang memanfaatkan gas buang bersuhu 250-350°C. Dengan variasi fluida kerja dan tekanan awal 3 bar, daya keluaran maksimum yang diperoleh mencapai 185 Watt pada kecepatan putar 750 RPM.",
    doiUrl: "https://doi.org/10.12345/jrem.v7i3.2024",
  },
  {
    id: "res-4",
    judul:
      "Penerapan Pembangkit Listrik Tenaga Surya (PLTS) Atap 5 kWp untuk Fasilitas Air Bersih Desa Terpencil",
    peneliti: ["Dr. Ir. Dewi Anggraini, M.T.", "Bambang Setiawan, S.T., M.T."],
    prodi: "Teknik Elektro",
    tahun: 2024,
    skema: "Pengabdian Masyarakat",
    abstrak:
      "Kegiatan pengabdian ini mengimplementasikan sistem PLTS off-grid 5 kWp yang menyuplai daya ke pompa air submersible 3 HP. Sistem ini berhasil memenuhi kebutuhan air bersih bagi 150 kepala keluarga tanpa tergantung pada jaringan PLN.",
    doiUrl: "https://doi.org/10.12345/j-sistel.v7i2.2024",
  },
];

// ----------------------------------------------------------------------------
// 3. DAFTAR BERITA FAKULTAS TERBARU
// Edit berita kegiatan resmi, liputan akademik, kemitraan, & gambar headline.
// ----------------------------------------------------------------------------
export const beritaFakultas: Berita[] = [
  {
    id: "ber-1",
    judul: "FT UNPAL Jalin Kerja Sama Strategis dengan PT Pusri Palembang Terkait Riset & Magang Industri",
    kategori: "Kemitraan & Berita Utama",
    tanggal: "02 Agustus 2026",
    ringkasan:
      "Fakultas Teknik Universitas Palembang resmi menandatangani Nota Kesepahaman (MoU) dengan PT Pusri Palembang dalam penguatan program Merdeka Belajar Kampus Merdeka (MBKM) dan riset bersama.",
    penulis: "Humas FT UNPAL",
    gambar: "/upload/image-berita/Benchmarking.avif",
  },
  {
    id: "ber-2",
    judul: "Tim Robotika HMTE Fakultas Teknik Siap Berlaga di Tingkat Nasional KRI 2026",
    kategori: "Prestasi Mahasiswa",
    tanggal: "25 Juli 2026",
    ringkasan:
      "Setelah sukses menjuarai seleksi wilayah Sumatera, tim robotika FT UNPAL mewakili Sumatera Selatan untuk bertanding dalam Kontes Robot Indonesia (KRI) di Surabaya.",
    penulis: "Redaksi Kemahasiswaan",
    gambar: "/upload/image-berita/Praktikum-Teknik Sipil.avif",
  },
  {
    id: "ber-3",
    judul: "Kuliah Umum Industri: Tantangan Transisi Energi Hijau di Sektor Kelistrikan Nasional",
    kategori: "Agenda Akademik",
    tanggal: "15 Juli 2026",
    ringkasan:
      "Program Studi Teknik Elektro menggelar kuliah umum menghadirkan pakar energi terbarukan dari PT PLN (Persero) UID S2JB.",
    penulis: "Humas FT UNPAL",
    gambar: "/upload/image-berita/Yudisium.avif",
  },
];

// ----------------------------------------------------------------------------
// 4. ARTIKEL ILMIAH & OPINI POPULER
// Edit artikel opini dosen dan kajian riset populer di sini.
// ----------------------------------------------------------------------------
export const artikelFakultas: Artikel[] = [
  {
    id: "art-1",
    judul: "Potensi Pemanfaatan Fly Ash Limbah Industri untuk Konstruksi Beton Ramah Lingkungan",
    kategori: "Rekayasa Material & Sipil",
    tanggal: "18 Juni 2026",
    abstrak:
      "Artikel ulasan mengenai teknologi beton geopolimer berbasis abu terbang yang mampu mengurangi emisi karbon dari produksi semen sekaligus meningkatkan ketahanan bangunan infrastruktur.",
    penulis: "Dr. Ir. Hendra Wijaya, M.T.",
  },
  {
    id: "art-2",
    judul: "Integrasi Artificial Intelligence dan IoT dalam Pengelolaan Smart Grid Kelistrikan",
    kategori: "Teknologi Elektro & Komputer",
    tanggal: "04 Mei 2026",
    abstrak:
      "Pembahasan mengenai bagaimana kecerdasan buatan mampu melakukan peramalan beban listrik secara presisi dan mencegah blackout pada jaringan distribusi terdistribusi.",
    penulis: "Dr. Muhammad Rizki, S.Kom., M.Cs.",
  },
];
