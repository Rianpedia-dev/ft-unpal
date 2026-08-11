// ============================================================================
// DATA CIVITAS AKADEMIKA FAKULTAS TEKNIK UNIVERSITAS PALEMBANG
// File ini digunakan untuk pengelolaan jajaran Pimpinan Dekanat (Dekan, WD, Kaprodi)
// ============================================================================

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
  pendidikan: string;
  email: string;
  foto: string;
}

// ----------------------------------------------------------------------------
// DAFTAR PIMPINAN DEKANAT FAKULTAS TEKNIK
// ----------------------------------------------------------------------------
export const dekanatList: DekanatMember[] = [
  {
    id: "dek-1",
    nama: "Marliyus Sunarhati, S.T., M.T.",
    jabatan: "DEKAN",
    nidn: "0014028305",
    pendidikan: "S2 Teknik Elektro - Universitas Sriwijaya",
    email: "marliyus.sunarhati@unpal.ac.id",
    foto: "/upload/image-civitas/Marliyus Sunarhati, S.T., M.T.avif",
  },
  {
    id: "dek-2",
    nama: "Ir. Subianto, M.T.",
    jabatan: "WAKIL DEKAN I",
    nidn: "0015087203",
    pendidikan: "S3 Teknik Sipil - Institut Teknologi Bandung",
    email: "subianto@unpal.ac.id",
    foto: "/upload/image-civitas/Ir. Subianto, M.T.avif",
  },
  {
    id: "dek-3",
    nama: "Rita Anggrainy, S.T., M.T.",
    jabatan: "WAKIL DEKAN II",
    nidn: "0022107502",
    pendidikan: "S2 Magister Manajemen - Universitas Sriwijaya",
    email: "rita.anggrainy@unpal.ac.id",
    foto: "/upload/image-civitas/Rita Anggrainy, S.T., M.T..avif",
  },
  {
    id: "dek-4",
    nama: "R. Ahmad Yani, S.T., M.T.",
    jabatan: "WAKIL DEKAN III",
    nidn: "0021098402",
    pendidikan: "S2 Teknik Sipil - Universitas Sriwijaya",
    email: "ahmad.yani@unpal.ac.id",
    foto: "/upload/image-civitas/R. Ahmad Yani, S.T., M.T.avif",
  },
];
