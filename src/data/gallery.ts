// ============================================================================
// DATA GALERI DOKUMENTASI KEGIATAN KAMPUS FAKULTAS TEKNIK
// File ini digunakan untuk pengelolaan foto kegiatan, praktikum laboratorium,
// seminar nasional, prosesi yudisium/wisuda, serta lomba kemahasiswaan.
// ============================================================================

export interface GalleryItem {
  id: string;
  title?: string;
  date: string;
  image: string;
}

// ----------------------------------------------------------------------------
// DAFTAR ITEM DOKUMENTASI GALERI FAKULTAS
// ----------------------------------------------------------------------------
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Praktikum Uji Kuat Tekan Beton",
    date: "15 Mei 2026",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
  },
  {
    id: "gal-2",
    title: "Seminar Nasional Teknologi Informasi & Industri (SNTII 2026)",
    date: "20 April 2026",
    image: "/upload/gallery/Benchmarking.avif",
  },
  {
    id: "gal-3",
    title: "Yudisium Sarjana Teknik Periode I Tahun 2026",
    date: "10 Maret 2026",
    image: "/upload/gallery/Yudisium.avif",
  },
  {
    id: "gal-4",
    title: "Lomba Robotika Antar Perguruan Tinggi Sumatera",
    date: "18 Februari 2026",
    image: "/upload/gallery/Benchmarking.avif",
  },
  {
    id: "gal-5",
    title: "Praktikum Pemrograman Web & Mobile",
    date: "28 Januari 2026",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
  },
  {
    id: "gal-6",
    title: "Workshop Pengelasan & Fabrication Mesin",
    date: "12 Desember 2025",
    image: "/upload/gallery/Benchmarking.avif",
  },
  {
    id: "gal-7",
    title: "Perayaan Dies Natalis & Upacara Bendera Fakultas",
    date: "05 November 2025",
    image: "/upload/gallery/Yudisium.avif",
  },
  {
    id: "gal-8",
    title: "Kunjungan Industri Mahasiswa ke Kilang Pertamina Plaju",
    date: "14 Oktober 2025",
    image: "/upload/gallery/Praktikum-Teknik Sipil.avif",
  },
];
