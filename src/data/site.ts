// ============================================================================
// DATA UTAMA & KONFIGURASI UMUM WEBSITE FAKULTAS TEKNIK UNIVERSITAS PALEMBANG
// File ini digunakan untuk pengelolaan informasi umum institusi, sambutan dekan,
// statistik, navigasi, motto, sejarah, visi misi, prodi, logo, serta kontak.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. IDENTITAS FAKULTAS & SITE CONFIGURATION
// Edit di sini untuk mengubah nama, logo, URL, dan deskripsi SEO website.
// ----------------------------------------------------------------------------
export const siteConfig = {
  name: "Fakultas Teknik",
  university: "Universitas Palembang",
  shortName: "FT UNPAL",
  logo: "/upload/logo-ft.avif",
  description:
    "Website resmi Fakultas Teknik Universitas Palembang — Pusat informasi akademik, profil fakultas, dan layanan pendaftaran mahasiswa baru.",
  url: "https://ft.universitas-palembang.ac.id",
};

// ----------------------------------------------------------------------------
// 2. NAVIGASI UTAMA NAVBAR & FOOTER
// Edit daftar menu navigasi yang muncul di header navbar dan footer.
// ----------------------------------------------------------------------------
export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Civitas", href: "/civitas" },
  { label: "PMB", href: "/pmb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Publikasi", href: "/publikasi" },
  { label: "Kontak", href: "/kontak" },
];

// ----------------------------------------------------------------------------
// 3. SAMBUTAN DEKAN FAKULTAS TEKNIK
// Edit nama dekan, foto, gelar, serta isi pesan sambutan resmi di sini.
// ----------------------------------------------------------------------------
export const deanGreeting = {
  name: "Marliyus Sunarhati, S.T., M.T.",
  title: "Dekan Fakultas Teknik Universitas Palembang",
  photo: "/upload/image-civitas/Marliyus Sunarhati, S.T., M.T.avif",
  message:
    "Assalamu'alaikum Warahmatullahi Wabarakatuh dan Salam Sejahtera bagi kita semua.\n\nSelamat datang di portal resmi Fakultas Teknik Universitas Palembang. Sebagai salah satu pilar pendidikan tinggi teknik yang berdedikasi di Sumatera Selatan sejak tahun 1985, Fakultas Teknik berkomitmen penuh untuk menyelenggarakan pendidikan berkemajuan, riset rekayasa aplikatif, serta pengabdian masyarakat yang berdampak nyata.\n\nMemasuki era transformasi digital dan transisi energi industri modern, kami secara berkesinambungan menyempurnakan kurikulum berbasis Outcome-Based Education (OBE), memperkuat kerja sama strategis dengan industri nasional seperti PT Pusri dan sektor energi terbarukan, serta membekali para mahasiswa dengan keterampilan sains, teknologi, dan etika profesi yang unggul.\n\nMelalui Program Studi S1 Teknik Sipil dan S1 Teknik Elektro yang telah terakreditasi BAN-PT, kami mencetak lulusan sarjana teknik yang tidak hanya tangguh dan adaptif, tetapi juga siap menjadi pemimpin masa depan di bidang teknologi dan inovasi.\n\nSemoga platform digital ini dapat memberi kemudahan akses informasi bagi seluruh civitas akademika, calon mahasiswa baru, alumni, maupun mitra kerja sama. Terima kasih atas kepercayaan Anda kepada Fakultas Teknik Universitas Palembang.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.",
};

// ----------------------------------------------------------------------------
// 4. HIGHLIGHTS & SLIDER HERO BERANDA
// Edit poin keunggulan utama dan slide gambar banner di halaman beranda.
// ----------------------------------------------------------------------------
export interface HeroHighlight {
  iconSrc: string;
  title: string;
  subtitle: string;
}

export const heroHighlights: HeroHighlight[] = [
  {
    iconSrc: "/alumni.avif",
    title: "Ribuan Alumni",
    subtitle: "Karir Sektor Industri",
  },
  {
    iconSrc: "/tahun-berdiri.avif",
    title: "Tahun Berdiri 1985",
    subtitle: "40+ Tahun Pengalaman",
  },
  {
    iconSrc: "/akreditasi.avif",
    title: "Akreditasi Baik",
    subtitle: "Terakreditasi BAN-PT",
  },
  {
    iconSrc: "/prodi.avif",
    title: "2 Program Studi S1",
    subtitle: "Teknik Sipil & Teknik Elektro",
  },
];

export interface HeroSlideItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export const heroSlidesData: HeroSlideItem[] = [
  {
    id: "slide-1",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
    title: "Laboratorium & Praktikum Terpadu",
    subtitle: "Fasilitas modern pendukung riset Teknik Sipil & Elektro",
    badge: "Fasilitas FT UNPAL",
  },
  {
    id: "slide-2",
    image: "/upload/gallery/Benchmarking.avif",
    title: "Kerja Sama Sektor Industri",
    subtitle: "Kemitraan strategis MBKM dengan PT Pusri & Industri Nasional",
    badge: "Kemitraan MBKM",
  },
  {
    id: "slide-3",
    image: "/upload/image-berita/Benchmarking.avif",
    title: "Inovasi & Robotika Mahasiswa",
    subtitle: "Riset rekayasa dan kompetisi tingkat nasional",
    badge: "Prestasi Akademik",
  },
  {
    id: "slide-4",
    image: "/upload/gallery/Yudisium.avif",
    title: "Lingkungan Akademik Unggul",
    subtitle: "Mencetak lulusan siap kerja & berdaya saing tinggi",
    badge: "Civitas Akademika",
  },
];

// ----------------------------------------------------------------------------
// 5. STATISTIK UTAMA FAKULTAS (COUNTER BAR)
// Edit angka alumni, status akreditasi, jumlah prodi, dan tahun berdiri.
// ----------------------------------------------------------------------------
export const statistics = [
  { label: "Jumlah Alumni", value: "1.250", suffix: "+", iconSrc: "/alumni.avif" },
  { label: "Akreditasi", value: "Baik", suffix: "", iconSrc: "/akreditasi.avif" },
  { label: "Program Studi", value: 2, suffix: "", iconSrc: "/prodi.avif" },
  { label: "Tahun Berdiri", value: "1985", suffix: "", iconSrc: "/tahun-berdiri.avif" },
];

// ----------------------------------------------------------------------------
// 6. QUICK LINKS / TAUTAN CEPAT LAYANAN KAMPUS
// Edit link portal akademik, e-learning, perpustakaan, dan jadwal kuliah.
// ----------------------------------------------------------------------------
export const quickLinks = [
  {
    title: "Portal Mahasiswa",
    description: "Akses informasi akademik, KRS, dan nilai.",
    href: "https://portal.universitas-palembang.ac.id",
    icon: "GraduationCap",
  },
  {
    title: "Jadwal Kuliah",
    description: "Lihat jadwal perkuliahan semester berjalan.",
    href: "https://jadwal.universitas-palembang.ac.id",
    icon: "Calendar",
  },
  {
    title: "E-Learning",
    description: "Akses materi kuliah dan tugas secara daring.",
    href: "https://elearning.universitas-palembang.ac.id",
    icon: "Monitor",
  },
  {
    title: "Perpustakaan Digital",
    description: "Cari referensi buku dan jurnal digital.",
    href: "https://lib.universitas-palembang.ac.id",
    icon: "BookOpen",
  },
];

// ----------------------------------------------------------------------------
// 7. SEJARAH FAKULTAS TEKNIK
// Edit sejarah pendirian dan rekam jejak perkembangan fakultas di sini.
// ----------------------------------------------------------------------------
export const history = {
  title: "Sejarah Fakultas Teknik",
  content: `Fakultas Teknik Universitas Palembang didirikan pada tahun 1985 sebagai salah satu fakultas unggulan di lingkungan Universitas Palembang. Berdiri di atas lahan seluas 5 hektar di Jalan Dharmapala No. 1A, Bukit Besar, Palembang, Fakultas Teknik awalnya hanya memiliki satu program studi, yaitu Teknik Sipil.

Seiring berkembangnya kebutuhan akan tenaga ahli di bidang teknik, Fakultas Teknik terus melakukan ekspansi dengan membuka program studi baru. Pada tahun 1992, Program Studi Teknik Mesin resmi dibuka, diikuti oleh Teknik Elektro pada tahun 1998, dan Teknik Informatika pada tahun 2005.

Selama lebih dari tiga dekade perjalanannya, Fakultas Teknik Universitas Palembang telah menghasilkan ribuan alumni yang tersebar di berbagai sektor industri, baik di tingkat nasional maupun internasional. Dengan visi menjadi pusat pendidikan teknik yang unggul di Sumatera Selatan, Fakultas Teknik terus berinovasi dalam kurikulum, penelitian, dan pengabdian kepada masyarakat.`,
};

// ----------------------------------------------------------------------------
// 8. VISI DAN MISI STRATEGIS
// Edit visi 2030 dan poin-poin misi utama Fakultas Teknik.
// ----------------------------------------------------------------------------
export const visionMission = {
  vision:
    "Menjadi Fakultas Teknik yang unggul, inovatif, dan berdaya saing di tingkat nasional dalam pengembangan ilmu pengetahuan dan teknologi pada tahun 2030.",
  missions: [
    "Menyelenggarakan pendidikan tinggi yang berkualitas dan relevan dengan kebutuhan industri dan masyarakat.",
    "Mengembangkan penelitian terapan yang bermanfaat bagi kemajuan teknologi dan pembangunan daerah.",
    "Melaksanakan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan dan teknologi tepat guna.",
    "Membangun kerja sama strategis dengan institusi pendidikan, industri, dan pemerintah di tingkat nasional dan internasional.",
    "Mengembangkan sumber daya manusia yang profesional, beretika, dan berwawasan global.",
  ],
};

// ----------------------------------------------------------------------------
// 9. MOTTO DAN TUJUAN STRATEGIS FAKULTAS
// Edit motto resmi serta 4 pilar tujuan strategis fakultas.
// ----------------------------------------------------------------------------
export const mottoFakultas = {
  judul: "Motto Fakultas Teknik",
  motto: "Mengintegrasikan Ilmu, Teknologi, dan Inovasi Untuk Membangun Peradaban yang Lebih Maju",
  deskripsi:
    "Komitmen Civitas Akademika Fakultas Teknik Universitas Palembang dalam mengembangkan sumber daya manusia teknik yang profesional, berintegritas, dan berwawasan masa depan.",
};

export const tujuanFakultas = [
  "Menghasilkan lulusan Sarjana Teknik (S.T.) yang memiliki kompetensi akademis tinggi, berjiwa kewirausahaan, dan menjunjung tinggi etika profesi.",
  "Meningkatkan kualitas dan kuantitas publikasi ilmiah serta hak kekayaan intelektual (HKI) berbasis penelitian terapan.",
  "Memperluas jangkauan pengabdian masyarakat guna memberikan solusi nyata bagi permasalahan infrastruktur dan teknologi di daerah.",
  "Mewujudkan tata kelola fakultas yang akuntabel, transparan, dan berbasis teknologi informasi terpadu.",
];

// ----------------------------------------------------------------------------
// 10. DAFTAR PROGRAM STUDI S1
// Edit rincian Prodi Teknik Sipil & Teknik Elektro, peminatan, karir, & kaprodi.
// ----------------------------------------------------------------------------
export const programStudiList = [
  {
    id: "sipil",
    nama: "Teknik Sipil",
    jenjang: "S1 (Sarjana Teknik)",
    akreditasi: "Baik Sekali / B",
    gelar: "S.T.",
    deskripsi:
      "Fokus pada perancangan infrastruktur modern, rekayasa struktur bangunan tinggi, manajemen proyek konstruksi, geoteknik, dan pengembangan teknik keairan.",
    peminatan: [
      "Rekayasa Struktur Bangunan",
      "Manajemen Konstruksi & Proyek",
      "Geoteknik & Rekayasa Tanah",
      "Teknik Keairan & Infrastruktur Basah",
    ],
    prospek: [
      "BUMN Konstruksi (WIKA, Adhi, HK)",
      "Konsultan Struktur & Sipil",
      "Project Manager",
      "Dinas PUPR & Instansi Pemerintah",
      "Kontraktor Swasta Nasional",
    ],
    kaprodi: "Dr. Ir. Hendra Wijaya, M.T.",
  },
  {
    id: "elektro",
    nama: "Teknik Elektro",
    jenjang: "S1 (Sarjana Teknik)",
    akreditasi: "Baik Sekali / B",
    gelar: "S.T.",
    deskripsi:
      "Mempelajari pembangkit & sistem tenaga listrik, arus kuat, teknologi energi terbarukan (PLTS), sistem kontrol & robotika modern, serta telekomunikasi nirkabel.",
    peminatan: [
      "Sistem Tenaga & Arus Kuat",
      "Energi Terbarukan (PLTS)",
      "Robotika & Otomasi Industri PLC",
      "Sistem Telekomunikasi & Network",
    ],
    prospek: [
      "PT PLN (Persero)",
      "Industri Otomasi & Manufaktur",
      "Consultant Renewable Energy",
      "Telecom Engineer",
      "Embedded System Specialist",
    ],
    kaprodi: "Dr. Ir. Dewi Anggraini, M.T.",
  },
];

// ----------------------------------------------------------------------------
// 11. NILAI-NILAI UTAMA FAKULTAS (VALUES)
// Edit 4 pilar nilai integritas, inovasi, kolaborasi, dan keunggulan.
// ----------------------------------------------------------------------------
export const nilaiFakultas = [
  {
    nilai: "INTEGRITAS",
    iconSrc: "/integritas.avif",
  },
  {
    nilai: "INOVASI",
    iconSrc: "/inovasi.avif",
  },
  {
    nilai: "KOLABORASI",
    iconSrc: "/kalaborasi.avif",
  },
  {
    nilai: "KEUNGGULAN",
    iconSrc: "/keunggulan.avif",
  },
];

// ----------------------------------------------------------------------------
// 12. LOGO DAN MAKNA FILOSOFIS
// Edit komponen logo dan penjelasan makna filosofis visualnya.
// ----------------------------------------------------------------------------
export const logoMakna = {
  judul: "Logo Fakultas Teknik UNPAL & Makna Filosofis",
  deskripsi:
    "Identitas visual Fakultas Teknik Universitas Palembang menggabungkan simbolisme keteknikan, semangat akademis, dan kearifan lokal Sumatera Selatan.",
  elemen: [
    {
      nama: "Roda Gigi (Gear)",
      makna: "Melambangkan dinamika industri, teknologi mesin, dan pergerakan pembangunan yang tiada henti.",
    },
    {
      nama: "Pena & Buku Terbuka",
      makna: "Simbol fondasi ilmu pengetahuan, literasi riset, dan dedikasi akademis yang berkesinambungan.",
    },
    {
      nama: "Warna Biru Navy (#1B3A5C)",
      makna: "Mencerminkan kedalaman ilmu, ketenangan, profesionalisme, dan kepercayaan diri civitas akademika.",
    },
    {
      nama: "Warna Keemasan / Amber (#F59E0B)",
      makna: "Melambangkan kejayaan, prestasi tinggi, kemuliaan cita-cita, dan kontribusi emas bagi bangsa.",
    },
  ],
};

// ----------------------------------------------------------------------------
// 13. DAFTAR KEMITRAAN INDUSTRI & BUMN
// Edit nama instansi mitra, logo, serta deskripsi kerja sama di sini.
// ----------------------------------------------------------------------------
export const kemitraanList = [
  {
    nama: "PT Pusri Palembang",
    kategori: "BUMN Industri Kimia",
    deskripsi: "Kerja sama riset pupuk, kerja praktek mahasiswa, dan penyerapan lulusan.",
    logo: "/upload/kemitraan/pusri.avif",
  },
  {
    nama: "PT Kilang Pertamina Internasional",
    kategori: "BUMN Energi & Migas",
    deskripsi: "Program kunjungan industri, magang sertifikasi, dan penelitian dosen.",
    logo: "/upload/kemitraan/pertamina.avif",
  },
  {
    nama: "PT PLN (Persero) UID S2JB",
    kategori: "BUMN Ketenagalistrikan",
    deskripsi: "Kolaborasi pengembangan energi terbarukan PLTS dan praktikum kelistrikan.",
    logo: "/upload/kemitraan/pln.avif",
  },
  {
    nama: "Waskita Karya (Persero)",
    kategori: "BUMN Infrastruktur",
    deskripsi: "Kerja sama proyek magang mahasiswa Teknik Sipil dan pengujian lab beton.",
    logo: "/upload/kemitraan/wasita.avif",
  },
  {
    nama: "Bank Sumsel Babel",
    kategori: "Perbankan Daerah",
    deskripsi: "Dukungan Beasiswa Mahasiswa Berprestasi dan Digitalisasi Layanan PMB.",
    logo: "/upload/kemitraan/bsb.avif",
  },
  {
    nama: "Dinas PUPR Provinsi Sumsel",
    kategori: "Instansi Pemerintah",
    deskripsi: "Kemitraan pengabdian masyarakat dan tata ruang pembangunan daerah.",
    logo: "/upload/kemitraan/dinas.avif",
  },
  {
    nama: "PT Bukit Asam Tbk",
    kategori: "BUMN Pertambangan",
    deskripsi: "Riset eksplorasi, beasiswa pendidikan, dan program magang kerja industri.",
    logo: "/upload/kemitraan/bukit-asam.avif",
  },
  {
    nama: "PT Semen Baturaja Tbk",
    kategori: "BUMN Industri Semen",
    deskripsi: "Uji bahan konstruksi laboratorium dan sertifikasi keahlian lulusan.",
    logo: "/upload/kemitraan/semen.avif",
  },
];

// ----------------------------------------------------------------------------
// 14. STRUKTUR ORGANISASI PIMPINAN FAKULTAS
// Edit jabatan dan nama pejabat pimpinan fakultas & prodi di sini.
// ----------------------------------------------------------------------------
export const organizationStructure = [
  {
    role: "Dekan",
    name: "Marliyus Sunarhati, S.T., M.T.",
  },
  {
    role: "Wakil Dekan I (Bidang Akademik)",
    name: "Ir. Subianto, M.T.",
  },
  {
    role: "Wakil Dekan II (Bidang Administrasi & Keuangan)",
    name: "Rita Anggrainy, S.T., M.T.",
  },
  {
    role: "Wakil Dekan III (Bidang Kemahasiswaan)",
    name: "R. Ahmad Yani, S.T., M.T.",
  },
  {
    role: "Kaprodi Teknik Sipil",
    name: "Dr. Ir. Hendra Wijaya, M.T.",
  },
  {
    role: "Kaprodi Teknik Mesin",
    name: "Dr. Agus Prasetyo, S.T., M.T.",
  },
  {
    role: "Kaprodi Teknik Elektro",
    name: "Dr. Ir. Dewi Anggraini, M.T.",
  },
  {
    role: "Kaprodi Teknik Informatika",
    name: "Dr. Muhammad Rizki, S.Kom., M.Cs.",
  },
];

// ----------------------------------------------------------------------------
// 15. FASILITAS UTAMA KAMPUS FAKULTAS TEKNIK
// Edit nama laboratorium, deskripsi, serta gambar laboratorium di sini.
// ----------------------------------------------------------------------------
export const facilities = [
  {
    name: "Laboratorium Struktur & Material",
    description:
      "Laboratorium untuk pengujian material konstruksi dan simulasi struktur bangunan.",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
  },
  {
    name: "Laboratorium Komputer",
    description:
      "Dilengkapi unit komputer dengan software engineering terkini untuk praktikum.",
    image: "/upload/gallery/Benchmarking.avif",
  },
  {
    name: "Laboratorium Mesin CNC",
    description:
      "Fasilitas permesinan modern dengan mesin CNC untuk praktikum mahasiswa Teknik Mesin.",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
  },
  {
    name: "Laboratorium Elektronika",
    description:
      "Laboratorium pengembangan rangkaian elektronik dan sistem embedded.",
    image: "/upload/gallery/Benchmarking.avif",
  },
  {
    name: "Perpustakaan Fakultas",
    description:
      "Koleksi lebih dari 15.000 buku teknik, jurnal, dan akses database digital.",
    image: "/upload/publications/jurnal.avif",
  },
  {
    name: "Ruang Kuliah Modern",
    description:
      "Ruang kelas ber-AC dengan proyektor dan konektivitas WiFi untuk pembelajaran interaktif.",
    image: "/upload/gallery/Yudisium.avif",
  },
];

// ----------------------------------------------------------------------------
// 16. INFORMASI KONTAK RESMI & ALAMAT DEKANAT
// Edit alamat, telepon, WhatsApp, email, jam operasional, dan link Google Maps.
// ----------------------------------------------------------------------------
export const contactInfo = {
  address:
    "Jl. Dharmapala No. 1A, Bukit Besar, Kec. Ilir Barat I, Kota Palembang, Sumatera Selatan 30139",
  phone: "+62 711 440 088",
  fax: "+62 711 440 089",
  whatsapp: "+62 821 7788 9900",
  email: "ft@universitas-palembang.ac.id",
  operationalHours: "Senin - Jumat: 08.00 - 16.00 WIB | Sabtu: 08.00 - 12.00 WIB",
  socialMedia: {
    instagram: "https://instagram.com/ft_unpal",
    facebook: "https://facebook.com/ft.unpal",
    youtube: "https://youtube.com/@ftunpal",
    twitter: "https://twitter.com/ft_unpal",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Universitas%20Palembang&t=&z=15&ie=UTF8&iwloc=&output=embed",
};
