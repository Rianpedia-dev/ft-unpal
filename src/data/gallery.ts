// Data Galeri Foto & Kegiatan Fakultas Teknik

export interface GalleryItem {
  id: string;
  title: string;
  category: "Dokumentasi Kegiatan" | "Praktikum" | "Seminar" | "Wisuda" | "Kegiatan Mahasiswa";
  date: string;
  image: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Praktikum Uji Kuat Tekan Beton",
    category: "Praktikum",
    date: "15 Mei 2026",
    image: "/images/gallery/praktikum-beton.jpg",
    caption:
      "Mahasiswa Teknik Sipil melakukan pengujian sampel silinder beton di Laboratorium Bahan dan Struktur.",
  },
  {
    id: "gal-2",
    title: "Seminar Nasional Teknologi Informasi & Industri (SNTII 2026)",
    category: "Seminar",
    date: "20 April 2026",
    image: "/images/gallery/seminar-nasional.jpg",
    caption:
      "Pelaksanaan SNTII 2026 yang menghadirkan pembicara utama dari Kementerian Kominfo dan Praktisi Industri.",
  },
  {
    id: "gal-3",
    title: "Yudisium Sarjana Teknik Periode I Tahun 2026",
    category: "Wisuda",
    date: "10 Maret 2026",
    image: "/images/gallery/yudisium-2026.jpg",
    caption:
      "Suasana pelepasan 120 lulusan Sarjana Teknik Fakultas Teknik Universitas Palembang di Aula Utama Kampus.",
  },
  {
    id: "gal-4",
    title: "Lomba Robotika Antar Perguruan Tinggi Sumatera",
    category: "Kegiatan Mahasiswa",
    date: "18 Februari 2026",
    image: "/images/gallery/lomba-robotika.jpg",
    caption:
      "Tim Robotika HMTE Fakultas Teknik berhasil meraih Juara 2 Kategori Robot Line Follower.",
  },
  {
    id: "gal-5",
    title: "Praktikum Pemrograman Web & Mobile",
    category: "Praktikum",
    date: "28 Januari 2026",
    image: "/images/gallery/praktikum-web.jpg",
    caption:
      "Mahasiswa Teknik Informatika saat mengikuti sesi hands-on praktikum pengembangan aplikasi Next.js di Lab Komputer.",
  },
  {
    id: "gal-6",
    title: "Workshop Pengelasan & Fabrication Mesin",
    category: "Seminar",
    date: "12 Desember 2025",
    image: "/images/gallery/workshop-mesin.jpg",
    caption:
      "Pelatihan teknik pengelasan TIG/MIG kerjasama FT UNPAL dengan PT Pusri Palembang.",
  },
  {
    id: "gal-7",
    title: "Perayaan Dies Natalis & Upacara Bendera Fakultas",
    category: "Dokumentasi Kegiatan",
    date: "05 November 2025",
    image: "/images/gallery/pengabdian-solarcell.jpg",
    caption:
      "Kegiatan upacara memperingati Dies Natalis Fakultas Teknik Universitas Palembang bersama seluruh civitas akademika.",
  },
  {
    id: "gal-8",
    title: "Kunjungan Industri Mahasiswa ke Kilang Pertamina Plaju",
    category: "Kegiatan Mahasiswa",
    date: "14 Oktober 2025",
    image: "/images/gallery/kunjungan-pertamina.jpg",
    caption:
      "Mahasiswa Teknik Mesin dan Elektro melakukan site visit ke fasilitas pengolahan PT Kilang Pertamina Internasional.",
  },
];

