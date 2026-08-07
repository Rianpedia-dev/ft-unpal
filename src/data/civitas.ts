// Data Civitas Akademika (Pimpinan Dekanat & Dosen Fakultas Teknik)

export interface DekanatMember {
  id: string;
  nama: string;
  jabatan:
    | "DEKAN"
    | "WAKIL DEKAN I"
    | "WAKIL DEKAN II"
    | "WAKIL DEKAN III"
    | "KAPRODI TEKNIK SIPIL"
    | "KAPRODI TEKNIK ELEKTRO"
    | "DOSEN TEKNIK SIPIL"
    | "DOSEN TEKNIK ELEKTRO";
  nidn: string;
  keahlian: string;
  pendidikan: string;
  email: string;
  foto: string;
}

export interface Dosen {
  id: string;
  nama: string;
  nidn: string;
  jabatan: string;
  prodi: string;
  keahlian: string[];
  email: string;
  foto: string;
}

export const dekanatList: DekanatMember[] = [
  {
    id: "dek-1",
    nama: "Dr. Ir. Ahmad Fauzi, M.T.",
    jabatan: "DEKAN",
    nidn: "0012056801",
    keahlian: "Geoteknik & Rekayasa Struktur",
    pendidikan: "S3 Teknik Sipil - Universitas Sriwijaya",
    email: "ahmad.fauzi@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-2",
    nama: "Bambang Setiawan, S.T., M.T.",
    jabatan: "WAKIL DEKAN I",
    nidn: "0014028305",
    keahlian: "Sistem Kontrol & Robotika",
    pendidikan: "S2 Teknik Elektro - Universitas Sriwijaya",
    email: "bambang.setiawan@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-3",
    nama: "Ir. Siti Rahmawati, M.M.",
    jabatan: "WAKIL DEKAN II",
    nidn: "0022107502",
    keahlian: "Manajemen Rekayasa & Keairan",
    pendidikan: "S2 Magister Manajemen - Universitas Sriwijaya",
    email: "siti.rahmawati@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-4",
    nama: "Dr. Rudi Hartono, S.T., M.Eng.",
    jabatan: "WAKIL DEKAN III",
    nidn: "0018098002",
    keahlian: "Manufaktur & Material Teknik",
    pendidikan: "S3 Teknik Mesin - Universitas Sriwijaya",
    email: "rudi.hartono@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-5",
    nama: "Dr. Ir. Hendra Wijaya, M.T.",
    jabatan: "KAPRODI TEKNIK SIPIL",
    nidn: "0015087203",
    keahlian: "Rekayasa Struktur & Manajemen Konstruksi",
    pendidikan: "S3 Teknik Sipil - Institut Teknologi Bandung",
    email: "hendra.wijaya@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-6",
    nama: "Dr. Ir. Dewi Anggraini, M.T.",
    jabatan: "KAPRODI TEKNIK ELEKTRO",
    nidn: "0025117701",
    keahlian: "Sistem Tenaga & Energi Terbarukan",
    pendidikan: "S3 Teknik Elektro - Universitas Gadjah Mada",
    email: "dewi.anggraini@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-7",
    nama: "Ir. Suryadi Pratama, M.T.",
    jabatan: "DOSEN TEKNIK SIPIL",
    nidn: "0021098402",
    keahlian: "Rekayasa Transportasi & Geomatika",
    pendidikan: "S2 Teknik Sipil - Universitas Sriwijaya",
    email: "suryadi.pratama@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dek-8",
    nama: "Rina Marlina, S.T., M.T.",
    jabatan: "DOSEN TEKNIK ELEKTRO",
    nidn: "0005128803",
    keahlian: "Telekomunikasi & Pengolahan Sinyal",
    pendidikan: "S2 Teknik Elektro - ITS Surabaya",
    email: "rina.marlina@unpal.ac.id",
    foto: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
  },
];
