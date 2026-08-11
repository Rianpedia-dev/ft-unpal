// ============================================================================
// DATA PUBLIKASI, JURNAL ILMIAH, & BERITA FAKULTAS TEKNIK UNIVERSITAS PALEMBANG
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

export interface Berita {
  id: string;
  judul: string;
  tanggal: string;
  ringkasan: string;
  penulis: string;
  gambar: string;
}

// ----------------------------------------------------------------------------
// 1. DAFTAR JURNAL ILMIAH RESMI FAKULTAS (OJS)
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
// 2. DAFTAR BERITA FAKULTAS TERBARU
// ----------------------------------------------------------------------------
export const beritaFakultas: Berita[] = [
  {
    id: "ber-1",
    judul: "FT UNPAL Jalin Kerja Sama Strategis dengan PT Pusri Palembang Terkait Riset & Magang Industri",
    tanggal: "02 Agustus 2026",
    ringkasan:
      "Fakultas Teknik Universitas Palembang resmi menandatangani Nota Kesepahaman (MoU) dengan PT Pusri Palembang dalam penguatan program Merdeka Belajar Kampus Merdeka (MBKM) dan riset bersama.",
    penulis: "Humas FT UNPAL",
    gambar: "/upload/image-berita/Benchmarking.avif",
  },
  {
    id: "ber-2",
    judul: "Tim Robotika HMTE Fakultas Teknik Siap Berlaga di Tingkat Nasional KRI 2026",
    tanggal: "25 Juli 2026",
    ringkasan:
      "Setelah sukses menjuarai seleksi wilayah Sumatera, tim robotika FT UNPAL mewakili Sumatera Selatan untuk bertanding dalam Kontes Robot Indonesia (KRI) di Surabaya.",
    penulis: "Redaksi Kemahasiswaan",
    gambar: "/upload/image-berita/Praktikum-Teknik Sipil.avif",
  },
  {
    id: "ber-3",
    judul: "Kuliah Umum Industri: Tantangan Transisi Energi Hijau di Sektor Kelistrikan Nasional",
    tanggal: "15 Juli 2026",
    ringkasan:
      "Program Studi Teknik Elektro menggelar kuliah umum menghadirkan pakar energi terbarukan dari PT PLN (Persero) UID S2JB.",
    penulis: "Humas FT UNPAL",
    gambar: "/upload/image-berita/Yudisium.avif",
  },
];
