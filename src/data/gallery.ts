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
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    caption:
      "Mahasiswa Teknik Sipil melakukan pengujian sampel silinder beton di Laboratorium Bahan dan Struktur.",
  },
  {
    id: "gal-2",
    title: "Seminar Nasional Teknologi Informasi & Industri (SNTII 2026)",
    category: "Seminar",
    date: "20 April 2026",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    caption:
      "Pelaksanaan SNTII 2026 yang menghadirkan pembicara utama dari Kementerian Kominfo dan Praktisi Industri.",
  },
  {
    id: "gal-3",
    title: "Yudisium Sarjana Teknik Periode I Tahun 2026",
    category: "Wisuda",
    date: "10 Maret 2026",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    caption:
      "Suasana pelepasan 120 lulusan Sarjana Teknik Fakultas Teknik Universitas Palembang di Aula Utama Kampus.",
  },
  {
    id: "gal-4",
    title: "Lomba Robotika Antar Perguruan Tinggi Sumatera",
    category: "Kegiatan Mahasiswa",
    date: "18 Februari 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    caption:
      "Tim Robotika HMTE Fakultas Teknik berhasil meraih Juara 2 Kategori Robot Line Follower.",
  },
  {
    id: "gal-5",
    title: "Praktikum Pemrograman Web & Mobile",
    category: "Praktikum",
    date: "28 Januari 2026",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    caption:
      "Mahasiswa Teknik Informatika saat mengikuti sesi hands-on praktikum pengembangan aplikasi Next.js di Lab Komputer.",
  },
  {
    id: "gal-6",
    title: "Workshop Pengelasan & Fabrication Mesin",
    category: "Seminar",
    date: "12 Desember 2025",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    caption:
      "Pelatihan teknik pengelasan TIG/MIG kerjasama FT UNPAL dengan PT Pusri Palembang.",
  },
  {
    id: "gal-7",
    title: "Perayaan Dies Natalis & Upacara Bendera Fakultas",
    category: "Dokumentasi Kegiatan",
    date: "05 November 2025",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption:
      "Kegiatan upacara memperingati Dies Natalis Fakultas Teknik Universitas Palembang bersama seluruh civitas akademika.",
  },
  {
    id: "gal-8",
    title: "Kunjungan Industri Mahasiswa ke Kilang Pertamina Plaju",
    category: "Kegiatan Mahasiswa",
    date: "14 Oktober 2025",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    caption:
      "Mahasiswa Teknik Mesin dan Elektro melakukan site visit ke fasilitas pengolahan PT Kilang Pertamina Internasional.",
  },
];
