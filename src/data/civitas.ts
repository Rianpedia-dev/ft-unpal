// Data Civitas Akademika (Dosen, Tenaga Kependidikan, Organisasi Mahasiswa)

export interface Dosen {
  id: string;
  nama: string;
  nidn: string;
  jabatan: string;
  prodi: "Teknik Sipil" | "Teknik Mesin" | "Teknik Elektro" | "Teknik Informatika";
  keahlian: string[];
  email: string;
  foto: string;
}

export interface Tendik {
  id: string;
  nama: string;
  nip: string;
  jabatan: string;
  unit: string;
  foto: string;
}

export interface OrganisasiMahasiswa {
  nama: string;
  singkatan: string;
  deskripsi: string;
  ketua: string;
  pembina: string;
  logo: string;
}

export const daftarDosen: Dosen[] = [
  {
    id: "dos-1",
    nama: "Dr. Ir. Ahmad Fauzi, M.T.",
    nidn: "0012056801",
    jabatan: "Lektor Kepala / Dekan",
    prodi: "Teknik Sipil",
    keahlian: ["Geoteknik", "Rekayasa Pondasi", "Mekanika Tanah"],
    email: "ahmad.fauzi@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-1.jpg",
  },
  {
    id: "dos-2",
    nama: "Dr. Ir. Hendra Wijaya, M.T.",
    nidn: "0015087203",
    jabatan: "Lektor Kepala / Kaprodi Teknik Sipil",
    prodi: "Teknik Sipil",
    keahlian: ["Rekayasa Struktur", "Beton Bertulang", "Manajemen Konstruksi"],
    email: "hendra.wijaya@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-2.jpg",
  },
  {
    id: "dos-3",
    nama: "Ir. Siti Rahmawati, M.M.",
    nidn: "0022107502",
    jabatan: "Lektor / Wakil Dekan II",
    prodi: "Teknik Sipil",
    keahlian: ["Rekayasa Keairan", "Hidrologi", "Manajemen Sumber Daya Air"],
    email: "siti.rahmawati@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-3.jpg",
  },
  {
    id: "dos-4",
    nama: "Dr. Agus Prasetyo, S.T., M.T.",
    nidn: "0003047804",
    jabatan: "Lektor / Kaprodi Teknik Mesin",
    prodi: "Teknik Mesin",
    keahlian: ["Konversi Energi", "Termodinamika", "Motor Bakar"],
    email: "agus.prasetyo@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-4.jpg",
  },
  {
    id: "dos-5",
    nama: "Dr. Rudi Hartono, S.T., M.Eng.",
    nidn: "0018098002",
    jabatan: "Lektor / Wakil Dekan III",
    prodi: "Teknik Mesin",
    keahlian: ["Manufaktur & Material", "Teknologi Pengelasan", "CAD/CAM"],
    email: "rudi.hartono@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-5.jpg",
  },
  {
    id: "dos-6",
    nama: "Dr. Ir. Dewi Anggraini, M.T.",
    nidn: "0025117701",
    jabatan: "Lektor Kepala / Kaprodi Teknik Elektro",
    prodi: "Teknik Elektro",
    keahlian: ["Sistem Tenaga Listrik", "Energi Terbarukan", "Analisis Sistem Daya"],
    email: "dewi.anggraini@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-6.jpg",
  },
  {
    id: "dos-7",
    nama: "Bambang Setiawan, S.T., M.T.",
    nidn: "0014028305",
    jabatan: "Lektor / Wakil Dekan I",
    prodi: "Teknik Elektro",
    keahlian: ["Sistem Kontrol & Robotika", "Mikrokontroler", "Internet of Things (IoT)"],
    email: "bambang.s@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-7.jpg",
  },
  {
    id: "dos-8",
    nama: "Dr. Muhammad Rizki, S.Kom., M.Cs.",
    nidn: "0009078602",
    jabatan: "Lektor / Kaprodi Teknik Informatika",
    prodi: "Teknik Informatika",
    keahlian: ["Kecerdasan Buatan (AI)", "Machine Learning", "Pengolahan Citra Digital"],
    email: "m.rizki@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-8.jpg",
  },
  {
    id: "dos-9",
    nama: "Nurfadilah, S.Kom., M.T.",
    nidn: "0030048901",
    jabatan: "Asisten Ahli",
    prodi: "Teknik Informatika",
    keahlian: ["Web & Mobile Development", "UI/UX Design", "Software Engineering"],
    email: "nurfadilah@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-9.jpg",
  },
  {
    id: "dos-10",
    nama: "Rian Hidayat, S.Kom., M.Kom.",
    nidn: "0012019103",
    jabatan: "Asisten Ahli",
    prodi: "Teknik Informatika",
    keahlian: ["Jaringan Komputer", "Cyber Security", "Cloud Computing"],
    email: "rian.hidayat@universitas-palembang.ac.id",
    foto: "/images/dosen/dosen-10.jpg",
  },
];

export const daftarTendik: Tendik[] = [
  {
    id: "ten-1",
    nama: "Surya Pratama, S.E.",
    nip: "198204152009021003",
    jabatan: "Kepala Tata Usaha",
    unit: "Administrasi Umum & Keuangan",
    foto: "/images/tendik/tendik-1.jpg",
  },
  {
    id: "ten-2",
    nama: "Eka Putri, A.Md.",
    nip: "198809122014032001",
    jabatan: "Staf Akademik",
    unit: "Subbagian Akademik & Kemahasiswaan",
    foto: "/images/tendik/tendik-2.jpg",
  },
  {
    id: "ten-3",
    nama: "Hadi Kurniadi, S.T.",
    nip: "199003082018011002",
    jabatan: "Teknisi Laboratorium Komputer",
    unit: "UPT Laboratorium",
    foto: "/images/tendik/tendik-3.jpg",
  },
  {
    id: "ten-4",
    nama: "Rina Marlina, A.Md.Pust.",
    nip: "199207202019022004",
    jabatan: "Pustakawan",
    unit: "Ruang Baca Fakultas Teknik",
    foto: "/images/tendik/tendik-4.jpg",
  },
];

export const organisasiMahasiswa: OrganisasiMahasiswa[] = [
  {
    nama: "Badan Eksekutif Mahasiswa Fakultas Teknik",
    singkatan: "BEM FT",
    deskripsi:
      "Organisasi pemerintahan mahasiswa tertinggi di tingkat Fakultas Teknik yang menaungi aspirasi dan kegiatan mahasiswa.",
    ketua: "Muhammad Farhan (Teknik Informatika 2022)",
    pembina: "Dr. Rudi Hartono, S.T., M.Eng.",
    logo: "/images/org/bem-ft.png",
  },
  {
    nama: "Himpunan Mahasiswa Teknik Sipil",
    singkatan: "HMTS",
    deskripsi:
      "Wadah berhimpun dan berkarya mahasiswa Program Studi Teknik Sipil dalam aspek akademik maupun non-akademik.",
    ketua: "Aditya Nugraha (Teknik Sipil 2022)",
    pembina: "Dr. Ir. Hendra Wijaya, M.T.",
    logo: "/images/org/hmts.png",
  },
  {
    nama: "Himpunan Mahasiswa Teknik Mesin",
    singkatan: "HMTM",
    deskripsi:
      "Organisasi kemahasiswaan jurusan Teknik Mesin yang aktif dalam penalaran, riset teknologi mesin, dan solidaritas teknik.",
    ketua: "Reza Pratama (Teknik Mesin 2022)",
    pembina: "Dr. Agus Prasetyo, S.T., M.T.",
    logo: "/images/org/hmtm.png",
  },
  {
    nama: "Himpunan Mahasiswa Teknik Elektro",
    singkatan: "HMTE",
    deskripsi:
      "Himpunan mahasiswa program studi Teknik Elektro yang berfokus pada pengembangan keahlian keelektroan dan kelistrikan.",
    ketua: "Dimas Anggara (Teknik Elektro 2022)",
    pembina: "Bambang Setiawan, S.T., M.T.",
    logo: "/images/org/hmte.png",
  },
  {
    nama: "Himpunan Mahasiswa Teknik Informatika",
    singkatan: "HMTI",
    deskripsi:
      "Wadah minat dan bakat mahasiswa Teknik Informatika dalam bidang pemrograman, keorganisasian, dan teknologi informasi.",
    ketua: "Fikri Ramadhan (Teknik Informatika 2022)",
    pembina: "Nurfadilah, S.Kom., M.T.",
    logo: "/images/org/hmti.png",
  },
];
