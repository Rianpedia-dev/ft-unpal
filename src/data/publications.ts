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
    nama: "Jurnal Teknik Elektro",
    singkatan: "JTE",
    issn: "p-ISSN: 2089-2950 | e-ISSN: 2715-565X",
    akreditasi: "SINTA 5",
    deskripsi:
      "Jurnal Teknik Elektro  (JTE) published by the Electrical Engineering Study Program Faculty of Engineering, University of Palembang and distributed twice a year. Jurnal Teknik Elektro  (JTE) is dedicated to researchers and academics who intend publishing research, scientific ideas, and other original scientific ideas. JTE is a published scientific, open access, peer-reviewed, evidence-based journal by the Electrical Engineering Study Program, Faculty of Engineering, University of Palembang.",
    url: "https://jurnal.unpal.ac.id/index.php/jte",
  },
  {
    id: "jur-2",
    nama: "Jurnal Teknik Sipil",
    singkatan: "JTS",
    issn: "p-ISSN: 2089-2942 | e-ISSN: 2686-6676",
    akreditasi: "SINTA 4",
    deskripsi:
      "Jurnal Teknik Sipil published by the Civil Engineering Study Program Faculty of Engineering, University of Palembang and distributed twice a year. Jurnal Teknik Sipil  is dedicated to researchers and academics who intend publishing research, scientific ideas, and other original scientific ideas. JTE is a published scientific, open access, peer-reviewed, evidence-based journal by the Civil Engineering Study Program, Faculty of Engineering, University of Palembang.",
    url: "https://jurnal.unpal.ac.id/index.php/tekniksipil",
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
