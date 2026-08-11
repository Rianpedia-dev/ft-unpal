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
  {
    label: "Program Studi",
    href: "#",
    subItems: [
      {
        label: "Teknik Sipil",
        href: "/program-studi/teknik-sipil",
      },
      {
        label: "Teknik Elektro",
        href: "/program-studi/teknik-elektro",
      },
    ],
  },
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

export const mottoFakultas = {
  judul: "Motto Fakultas Teknik",
  motto:
    "Mengintegrasikan Ilmu, Teknologi, dan Inovasi Rekayasa untuk Menciptakan Sumber Daya Manusia Unggul dan Mewujudkan Pembangunan yang Maju dan Berkelanjutan.",
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
  judul: "Makna Logo Fakultas Teknik Universitas Palembang",
  deskripsi:
    "Identitas visual Fakultas Teknik Universitas Palembang menggabungkan simbolisme keteknikan, semangat akademis, serta harapan dan nilai-nilai luhur institusi.",
  elemen: [
    {
      nama: "Bentuk Perisai / Kuning",
      makna: "Melambangkan keteguhan, perlindungan, kejayaan, dan masa depan yang gemilang.",
    },
    {
      nama: "Lingkaran Merah",
      makna: "Melambangkan semangat, keberanian, energi, dan daya juang dalam mengembangkan ilmu teknik.",
    },
    {
      nama: "Buku Terbuka",
      makna: "Melambangkan pendidikan, ilmu pengetahuan, pembelajaran, dan keterbukaan terhadap perkembangan teknologi.",
    },
    {
      nama: "Huruf “FT”",
      makna: "Merupakan identitas Fakultas Teknik Universitas Palembang.",
    },
    {
      nama: "Api",
      makna: "Melambangkan semangat belajar, inovasi, kreativitas, dan ilmu pengetahuan yang terus menyala.",
    },
    {
      nama: "Bintang",
      makna: "Melambangkan cita-cita, harapan, prestasi, dan arah menuju masa depan yang lebih baik.",
    },
    {
      nama: "Gelombang / Air",
      makna: "Melambangkan identitas Kota Palembang serta dinamika pembangunan, khususnya yang berkaitan dengan infrastruktur dan lingkungan.",
    },
    {
      nama: "Warna Hitam",
      makna: "Melambangkan ketegasan, kekuatan, ketelitian, kestabilan, dan profesionalisme.",
    },
    {
      nama: "Warna Merah",
      makna: "Melambangkan keberanian, semangat, dan tekad untuk terus berkembang.",
    },
    {
      nama: "Warna Kuning / Emas",
      makna: "Melambangkan kejayaan, prestasi, optimisme, dan keunggulan.",
    },
    {
      nama: "Tulisan “UNIVERSITAS PALEMBANG – FAKULTAS TEKNIK”",
      makna: "Menegaskan identitas dan kedudukan Fakultas Teknik sebagai bagian dari Universitas Palembang.",
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

// ----------------------------------------------------------------------------
// 17. PERTANYAAN UMUM FAKULTAS TEKNIK (FAQ BERANDA)
// Edit pertanyaan & jawaban seputar profil, prodi, akreditasi, & fasilitas FT UNPAL.
// ----------------------------------------------------------------------------
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqFakultasData: FAQItem[] = [
  {
    id: "faq-ft-1",
    question: "Apa saja Program Studi yang diselenggarakan di Fakultas Teknik UNPAL?",
    answer:
      "Fakultas Teknik Universitas Palembang menyelenggarakan dua Program Studi jenjang S1 unggulan yang terakreditasi BAN-PT, yaitu S1 Teknik Sipil dan S1 Teknik Elektro, dengan pilihan Kelas Reguler maupun Kelas Karyawan.",
  },
  {
    id: "faq-ft-2",
    question: "Bagaimana status akreditasi Fakultas Teknik Universitas Palembang?",
    answer:
      "Seluruh Program Studi di lingkungan Fakultas Teknik UNPAL telah terakreditasi resmi oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) dengan peringkat Baik Sekali / B, serta menerapkan Kurikulum Berbasis OBE (Outcome-Based Education).",
  },
  {
    id: "faq-ft-3",
    question: "Apa saja fasilitas praktikum dan laboratorium yang tersedia?",
    answer:
      "FT UNPAL dilengkapi fasilitas Laboratorium Struktur & Bahan Konstruksi, Laboratorium Komputer & CAD Terpadu, Laboratorium Elektronika & Otomasi Industri, Laboratorium Mesin CNC, serta Perpustakaan Digital dengan koleksi ribuan referensi sains & keteknikan.",
  },
  {
    id: "faq-ft-4",
    question: "Bagaimana kerja sama Fakultas Teknik dengan dunia industri & BUMN?",
    answer:
      "Kami menjalin kemitraan strategis dengan berbagai BUMN dan industri nasional seperti PT Pusri, PT Kilang Pertamina Internasional, PT PLN (Persero), PT Bukit Asam Tbk, dan PT Waskita Karya untuk program magang MBKM, riset bersama, dan penyerapan lulusan.",
  },
  {
    id: "faq-ft-5",
    question: "Dimana lokasi Kampus Fakultas Teknik Universitas Palembang?",
    answer:
      "Kampus FT UNPAL berlokasi di lokasi strategis pusat kota Palembang, tepatnya di Jl. Dharmapala No. 1A, Bukit Besar, Kecamatan Ilir Barat I, Kota Palembang, Sumatera Selatan.",
  },
];
