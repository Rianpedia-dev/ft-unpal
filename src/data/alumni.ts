// ============================================================================
// DATA ALUMNI TESTIMONIAL & KARIR LULUSAN FAKULTAS TEKNIK
// File ini digunakan untuk pengelolaan testimoni alumni yang tampil pada komponen
// Marquee Running Card di Halaman Beranda.
// ============================================================================

export interface AlumniReview {
  name: string;
  username: string; // e.g. "Teknik Sipil '18"
  company: string; // e.g. "PT Adhi Karya (Persero) Tbk"
  body: string;
  profile: string;
  initials: string;
}

// ----------------------------------------------------------------------------
// DAFTAR TESTIMONI ALUMNI DAN KIPRAH KARIR INDUSTRI
// Edit nama alumni, angkatan, tempat bekerja, testimoni, foto, serta inisial.
// ----------------------------------------------------------------------------
export const alumniReviews: AlumniReview[] = [
  {
    name: "Budi Santoso, S.T.",
    username: "Teknik Sipil '18",
    company: "PT Adhi Karya (Persero) Tbk",
    body: "Bekal ilmu rekayasa struktur dan praktikum laboratorium di FT UNPAL sangat aplikatif saat saya memimpin proyek jalan tol infrastruktur nasional.",
    profile: "/upload/alumni/30.avif",
    initials: "BS",
  },
  {
    name: "Maya Anggraini, S.T.",
    username: "Teknik Informatika '19",
    company: "PT Telkom Indonesia Tbk",
    body: "Kurikulum praktikum pemrograman Next.js dan Cloud Computing di Kampus FT UNPAL membuat saya siap bersaing sebagai Lead Frontend Developer.",
    profile: "/upload/alumni/30.avif",
    initials: "MA",
  },
  {
    name: "Rudi Pratama, S.T.",
    username: "Teknik Mesin '17",
    company: "PT Kilang Pertamina Internasional",
    body: "Fasilitas Lab CNC dan bimbingan dosen di FT UNPAL membentuk mentalitas engineer yang siap kerja di industri energi vital nasional.",
    profile: "/upload/alumni/30.avif",
    initials: "RP",
  },
  {
    name: "Diah Rahmawati, S.T.",
    username: "Teknik Elektro '20",
    company: "PT PLN (Persero) UPT Palembang",
    body: "Pembelajaran analisis sistem tenaga listrik dan energi terbarukan di FT UNPAL menjadi modal berharga bagi karir saya di sektor kelistrikan.",
    profile: "/upload/alumni/30.avif",
    initials: "DR",
  },
  {
    name: "Ahmad Rizky, S.T.",
    username: "Teknik Informatika '20",
    company: "Shopee Indonesia (Tech Team)",
    body: "Dukungan himpunan dan dosen dalam riset AI / Machine Learning membuka jalan bagi saya berkarier di perusahaan teknologi multinasional.",
    profile: "/upload/alumni/30.avif",
    initials: "AR",
  },
  {
    name: "Siti Nurhaliza, S.T.",
    username: "Teknik Sipil '19",
    company: "PT Wijaya Karya (Persero) Tbk",
    body: "Manajemen konstruksi dan etika profesi yang diajarkan di FT UNPAL menjadikan saya percaya diri mengelola proyek gedung bertingkat.",
    profile: "/upload/alumni/30.avif",
    initials: "SN",
  },
  {
    name: "Fajar Hidayat, S.T.",
    username: "Teknik Mesin '18",
    company: "PT Pusri Palembang",
    body: "Kedisiplinan dan pengetahuan konversi energi di Fakultas Teknik sangat menunjang karir saya sebagai Plant Reliability Engineer.",
    profile: "/upload/alumni/30.avif",
    initials: "FH",
  },
  {
    name: "Reza Kurniawan, S.T.",
    username: "Teknik Elektro '19",
    company: "PT Schneider Electric Indonesia",
    body: "Praktikum mikrokontroler dan otomatisasi industri di FT UNPAL memberikan fondasi kuat untuk menangani sistem SCADA pabrik.",
    profile: "/upload/alumni/30.avif",
    initials: "RK",
  },
];
