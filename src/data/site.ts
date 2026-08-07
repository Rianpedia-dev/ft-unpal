// Data umum website Fakultas Teknik Universitas Palembang

export const siteConfig = {
  name: "Fakultas Teknik",
  university: "Universitas Palembang",
  shortName: "FT UNPAL",
  logo: "/logo-ft.avif",
  description:
    "Website resmi Fakultas Teknik Universitas Palembang — Pusat informasi akademik, profil fakultas, dan layanan pendaftaran mahasiswa baru.",
  url: "https://ft.universitas-palembang.ac.id",
};

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Civitas", href: "/civitas" },
  { label: "PMB", href: "/pmb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Publikasi", href: "/publikasi" },
  { label: "Kontak", href: "/kontak" },
];

export const deanGreeting = {
  name: "Dr. Ir. Ahmad Fauzi, M.T.",
  title: "Dekan Fakultas Teknik",
  photo: "/images/dekan.jpg",
  message:
    "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi Fakultas Teknik Universitas Palembang. Fakultas Teknik hadir sebagai wadah pengembangan ilmu pengetahuan dan teknologi yang berorientasi pada kebutuhan industri dan masyarakat. Dengan dukungan tenaga pengajar berkualitas serta fasilitas yang memadai, kami berkomitmen untuk mencetak lulusan yang kompeten, inovatif, dan berintegritas tinggi. Semoga website ini dapat menjadi sumber informasi yang bermanfaat bagi seluruh civitas akademika maupun masyarakat umum. Wassalamu'alaikum Warahmatullahi Wabarakatuh.",
};

export const statistics = [
  { label: "Mahasiswa Aktif", value: 1250, suffix: "+" },
  { label: "Dosen Tetap", value: 45, suffix: "" },
  { label: "Program Studi", value: 2, suffix: "" },
  { label: "Tahun Berdiri", value: 1985, suffix: "" },
];

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

export const history = {
  title: "Sejarah Fakultas Teknik",
  content: `Fakultas Teknik Universitas Palembang didirikan pada tahun 1985 sebagai salah satu fakultas unggulan di lingkungan Universitas Palembang. Berdiri di atas lahan seluas 5 hektar di Jalan Dharmapala No. 1A, Bukit Besar, Palembang, Fakultas Teknik awalnya hanya memiliki satu program studi, yaitu Teknik Sipil.

Seiring berkembangnya kebutuhan akan tenaga ahli di bidang teknik, Fakultas Teknik terus melakukan ekspansi dengan membuka program studi baru. Pada tahun 1992, Program Studi Teknik Mesin resmi dibuka, diikuti oleh Teknik Elektro pada tahun 1998, dan Teknik Informatika pada tahun 2005.

Selama lebih dari tiga dekade perjalanannya, Fakultas Teknik Universitas Palembang telah menghasilkan ribuan alumni yang tersebar di berbagai sektor industri, baik di tingkat nasional maupun internasional. Dengan visi menjadi pusat pendidikan teknik yang unggul di Sumatera Selatan, Fakultas Teknik terus berinovasi dalam kurikulum, penelitian, dan pengabdian kepada masyarakat.`,
};

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
  motto: "Unggul dalam Ilmu, Inovatif dalam Teknologi, Berdampak bagi Bangsa",
  deskripsi:
    "Komitmen Civitas Akademika Fakultas Teknik Universitas Palembang dalam mengembangkan sumber daya manusia teknik yang profesional, berintegritas, dan berwawasan masa depan.",
};

export const tujuanFakultas = [
  "Menghasilkan lulusan Sarjana Teknik (S.T.) yang memiliki kompetensi akademis tinggi, berjiwa kewirausahaan, dan menjunjung tinggi etika profesi.",
  "Meningkatkan kualitas dan kuantitas publikasi ilmiah serta hak kekayaan intelektual (HKI) berbasis penelitian terapan.",
  "Memperluas jangkauan pengabdian masyarakat guna memberikan solusi nyata bagi permasalahan infrastruktur dan teknologi di daerah.",
  "Mewujudkan tata kelola fakultas yang akuntabel, transparan, dan berbasis teknologi informasi terpadu.",
];

export const programStudiList = [
  {
    nama: "Teknik Sipil",
    jenjang: "S1 (Sarjana Teknik)",
    akreditasi: "Baik Sekali / B",
    gelar: "S.T.",
    deskripsi:
      "Fokus pada perancangan infrastruktur, rekayasa struktur bangunan, manajemen konstruksi, geoteknik, dan teknik keairan.",
    prospek: "BUMN Konstruksi, Konsultan Struktur, Project Manager, Dinas PUPR, Kontraktor Swasta",
    kaprodi: "Dr. Ir. Hendra Wijaya, M.T.",
  },
  {
    nama: "Teknik Elektro",
    jenjang: "S1 (Sarjana Teknik)",
    akreditasi: "Baik Sekali / B",
    gelar: "S.T.",
    deskripsi:
      "Mempelajari sistem tenaga listrik, arus kuat, energi terbarukan (PLTS), sistem kontrol & robotika, serta telekomunikasi.",
    prospek: "PT PLN, Industri Otomasi & PLC, Renewable Energy Consultant, Telecom Engineer, Embedded System Specialist",
    kaprodi: "Dr. Ir. Dewi Anggraini, M.T.",
  },
];

export const nilaiFakultas = [
  {
    nilai: "INTEGRITAS",
    deskripsi: "Jujur, transparan, beretika akademis, dan dapat dipercaya dalam setiap tindakan.",
    icon: "🛡️",
  },
  {
    nilai: "INOVASI",
    deskripsi: "Kreatif menciptakan solusi teknologi berdaya guna untuk memajukan industri dan daerah.",
    icon: "💡",
  },
  {
    nilai: "KOLABORASI",
    deskripsi: "Menjunjung kerja sama lintas disiplin, sinergi dengan industri, dan semangat kekeluargaan.",
    icon: "🤝",
  },
  {
    nilai: "KEUNGGULAN",
    deskripsi: "Berkomitmen mencapai standar mutu tertinggi dalam pengajaran, penelitian, dan pengabdian.",
    icon: "⭐",
  },
];

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

export const kemitraanList = [
  {
    nama: "PT Pusri Palembang",
    kategori: "BUMN Industri Kimia",
    deskripsi: "Kerja sama riset pupuk, kerja praktek mahasiswa, dan penyerapan lulusan.",
    logo: "🏢",
  },
  {
    nama: "PT Kilang Pertamina Internasional",
    kategori: "BUMN Energi & Migas",
    deskripsi: "Program kunjungan industri, magang sertifikasi, dan penelitian dosen.",
    logo: "⛽",
  },
  {
    nama: "PT PLN (Persero) UID S2JB",
    kategori: "BUMN Ketenagalistrikan",
    deskripsi: "Kolaborasi pengembangan energi terbarukan PLTS dan praktikum kelistrikan.",
    logo: "⚡",
  },
  {
    nama: "Waskita Karya (Persero)",
    kategori: "BUMN Infrastruktur",
    deskripsi: "Kerja sama proyek magang mahasiswa Teknik Sipil dan pengujian lab beton.",
    logo: "🏗️",
  },
  {
    nama: "Bank Sumsel Babel",
    kategori: "Perbankan Daerah",
    deskripsi: "Dukungan Beasiswa Mahasiswa Berprestasi dan Digitalisasi Layanan PMB.",
    logo: "🏦",
  },
  {
    nama: "Dinas PUPR Provinsi Sumsel",
    kategori: "Instansi Pemerintah",
    deskripsi: "Kemitraan pengabdian masyarakat dan tata ruang pembangunan daerah.",
    logo: "🏛️",
  },
];

export const organizationStructure = [
  {
    role: "Dekan",
    name: "Dr. Ir. Ahmad Fauzi, M.T.",
  },
  {
    role: "Wakil Dekan I (Bidang Akademik)",
    name: "Dr. Bambang Setiawan, S.T., M.T.",
  },
  {
    role: "Wakil Dekan II (Bidang Administrasi & Keuangan)",
    name: "Ir. Siti Rahmawati, M.M.",
  },
  {
    role: "Wakil Dekan III (Bidang Kemahasiswaan)",
    name: "Dr. Rudi Hartono, S.T., M.Eng.",
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

export const facilities = [
  {
    name: "Laboratorium Struktur & Material",
    description:
      "Laboratorium untuk pengujian material konstruksi dan simulasi struktur bangunan.",
    image: "/images/facilities/lab-struktur.jpg",
  },
  {
    name: "Laboratorium Komputer",
    description:
      "Dilengkapi 60 unit komputer dengan software engineering terkini untuk praktikum.",
    image: "/images/facilities/lab-komputer.jpg",
  },
  {
    name: "Laboratorium Mesin CNC",
    description:
      "Fasilitas permesinan modern dengan mesin CNC untuk praktikum mahasiswa Teknik Mesin.",
    image: "/images/facilities/lab-cnc.jpg",
  },
  {
    name: "Laboratorium Elektronika",
    description:
      "Laboratorium pengembangan rangkaian elektronik dan sistem embedded.",
    image: "/images/facilities/lab-elektronika.jpg",
  },
  {
    name: "Perpustakaan Fakultas",
    description:
      "Koleksi lebih dari 15.000 buku teknik, jurnal, dan akses database digital.",
    image: "/images/facilities/perpustakaan.jpg",
  },
  {
    name: "Ruang Kuliah Modern",
    description:
      "Ruang kelas ber-AC dengan proyektor dan konektivitas WiFi untuk pembelajaran interaktif.",
    image: "/images/facilities/ruang-kuliah.jpg",
  },
];

export const contactInfo = {
  address:
    "Jl. Dharmapala No. 1A, Bukit Besar, Kec. Ilir Barat I, Kota Palembang, Sumatera Selatan 30139",
  phone: "+62 711 440 088",
  fax: "+62 711 440 089",
  whatsapp: "+62 821 7788 9900",
  email: "ft@universitas-palembang.ac.id",
  socialMedia: {
    instagram: "https://instagram.com/ft_unpal",
    facebook: "https://facebook.com/ft.unpal",
    youtube: "https://youtube.com/@ftunpal",
    twitter: "https://twitter.com/ft_unpal",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3521!2d104.7456!3d-2.9912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTknMjguMyJTIDEwNMKwNDQnNDQuMiJF!5e0!3m2!1sid!2sid!4v1234567890",
};

