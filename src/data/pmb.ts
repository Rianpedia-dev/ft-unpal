// ============================================================================
// DATA PENERIMAAN MAHASISWA BARU (PMB) FAKULTAS TEKNIK UNIVERSITAS PALEMBANG
// File ini digunakan untuk pengelolaan data Jalur Pendaftaran, Jenis Kelas,
// Persyaratan Berkas, Rincian Biaya, Tim Panitia PMB, serta Pertanyaan Umum (FAQ).
// ============================================================================

export interface JalurPendaftaran {
  nama: string;
  tagline: string;
  deskripsi: string;
  badge: string;
}

export interface JenisKelas {
  nama: string;
  kategori: "REGULER" | "KARYAWAN";
  deskripsi: string;
  jadwal: string;
  durasi: string;
}

export interface ProsedurStep {
  step: number;
  judul: string;
  deskripsi: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PMBMember {
  name: string;
  designation: string;
  imageSrc: string;
  phone?: string;
  email?: string;
}

// ----------------------------------------------------------------------------
// 1. SKEMA JALUR PENDAFTARAN MAHASISWA BARU
// Edit di sini untuk mengubah jalur penerimaan Murni (SLTA) & Transisi (Transfer/D3).
// ----------------------------------------------------------------------------
export const jalurPendaftaran: JalurPendaftaran[] = [
  {
    nama: "Lulusan Baru (Murni)",
    tagline: "S1 Reguler / Murni",
    deskripsi: "Jalur bagi lulusan SMA/SMK/MA sederajat.",
    badge: "Murni",
  },
  {
    nama: "Pindahan / Lanjutan (Transisi)",
    tagline: "S1 Transfer & Lanjutan",
    deskripsi: "Jalur bagi mahasiswa pindahan atau lulusan D3 ke S1.",
    badge: "Transisi",
  },
];

// ----------------------------------------------------------------------------
// 2. PILIHAN KELAS PERKULIAHAN (PAGI, SORE, AKHIR PEKAN)
// Edit opsi kelas perkuliahan, kategori reguler/karyawan, serta jadwal.
// ----------------------------------------------------------------------------
export const jenisKelas: JenisKelas[] = [
  {
    nama: "Kelas A Pagi",
    kategori: "REGULER",
    deskripsi: "Kuliah setiap hari kerja.",
    jadwal: "Senin - Kamis",
    durasi: "08:00 - 12:00",
  },
  {
    nama: "Kelas A Sore",
    kategori: "KARYAWAN",
    deskripsi: "Bagi yang bekerja di siang hari.",
    jadwal: "Senin - Kamis",
    durasi: "17:00 - 21:00",
  },
  {
    nama: "Kelas B Jum'at - Sabtu",
    kategori: "KARYAWAN",
    deskripsi: "Kuliah di akhir pekan.",
    jadwal: "Jum'at - Sabtu",
    durasi: "08:00 - 17:00",
  },
];

export interface RincianBiayaItem {
  kategori: string;
  badgeText: string;
  rincianKelas: {
    namaKelas: string;
    items: { label: string; nominal: string }[];
  }[];
}

export const rincianBiayaDetail: RincianBiayaItem[] = [
  {
    kategori: "Mahasiswa Murni",
    badgeText: "Lulusan SLTA",
    rincianKelas: [
      {
        namaKelas: "Kelas A (Pagi dan Sore)",
        items: [
          { label: "Biaya Kuliah", nominal: "Rp 3.500.000" },
          { label: "Orientasi Mahasiswa", nominal: "Rp 800.000" },
        ],
      },
      {
        namaKelas: "Kelas B (Jum'at-Sabtu)",
        items: [
          { label: "Biaya Kuliah", nominal: "Rp 4.000.000" },
          { label: "Orientasi Mahasiswa", nominal: "Rp 800.000" },
        ],
      },
    ],
  },
  {
    kategori: "Mahasiswa Transisi",
    badgeText: "Pindahan / D3 ke S1",
    rincianKelas: [
      {
        namaKelas: "Kelas A (Pagi dan Sore)",
        items: [
          { label: "Biaya Kuliah", nominal: "Rp 4.500.000" },
          { label: "Biaya Konversi", nominal: "Rp 1.000.000" },
          { label: "Orientasi Mahasiswa", nominal: "Rp 800.000" },
        ],
      },
      {
        namaKelas: "Kelas B (Jum'at-Sabtu)",
        items: [
          { label: "Biaya Kuliah", nominal: "Rp 5.000.000" },
          { label: "Biaya Konversi", nominal: "Rp 1.000.000" },
          { label: "Orientasi Mahasiswa", nominal: "Rp 800.000" },
        ],
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// 4. SYARAT PENDAFTARAN MAHASISWA MURNI (SLTA)
// Edit 10 poin persyaratan dokumen administrasi calon mahasiswa lulusan SLTA.
// ----------------------------------------------------------------------------
export const syaratMurni: string[] = [
  "Mengisi Formulir Pendaftaran",
  "Berijazah SLTA atau Sederajat",
  "Fotocopy Ijazah yang dilegalisir 3 (tiga) lembar",
  "Fotocopy Nilai Ujian Nasional 3 (tiga) lembar",
  "Fotocopy Nilai Raport semester terakhir 3 (tiga) lembar",
  "Fotocopy KTP/WNA Pasport sebanyak 3 (tiga) lembar",
  "Fotocopy Kartu Keluarga (KK) sebanyak 3 (tiga) lembar",
  "Pas Photo Hitam Putih 3×4 cm sebanyak 4 lembar",
  "Pas Photo Berwarna 3×4 cm sebanyak 4 lembar",
  "Biaya Pendaftaran Rp. 250.000,-",
];

// ----------------------------------------------------------------------------
// 5. SYARAT PENDAFTARAN MAHASISWA TRANSISI (TRANSFER / D3 / PINDAHAN)
// Edit 11 poin persyaratan dokumen administrasi calon mahasiswa pindahan / D3.
// ----------------------------------------------------------------------------
export const syaratTransisi: string[] = [
  "Mengisi Formulir Pendaftaran",
  "Berijazah Program Diploma",
  "Fotocopy Ijazah dan Transkrip Nilai yang dilegalisir masing-masing 3 lembar",
  "Pindahan/Transisi menyerahkan Surat Keterangan Pindah dari Perguruan Tinggi Asal dan Fotocopy Transkrip Nilai yang dilegalisir masing-masing 3 lembar",
  "Ijazah SLTA atau Sederajat untuk mahasiswa Pindahan sebanyak 3 (tiga) lembar",
  "Fotocopy KTP/WNA Pasport sebanyak 3 (tiga) lembar",
  "Fotocopy Kartu Keluarga (KK) sebanyak 3 (tiga) lembar",
  "Pas Photo Hitam Putih 3×4 cm sebanyak 4 lembar",
  "Pas Photo Berwarna 3×4 cm sebanyak 4 lembar",
  "Biaya Pendaftaran Rp. 250.000,-",
  "Biaya Konversi Rp. 1.000.000,-",
];

// ----------------------------------------------------------------------------
// 6. PORTAL URL & INFORMASI TIM PANITIA PMB
// Edit URL pendaftaran online, kontak hotline WhatsApp, email, dan panitia.
// ----------------------------------------------------------------------------
export const portalPMBUrl = "https://pmb.universitas-palembang.ac.id";

export const timPMB = {
  ketuaPanitia: "Dr. Rudi Hartono, S.T., M.Eng. (Wakil Dekan III)",
  sekretariat: "Ruang Loket PMB Gedung A Dekanat FT UNPAL",
  jamLayanan: "Senin - Sabtu: 08.00 - 16.00 WIB",
  hotline: "+62 821-7788-9900 (WhatsApp Only)",
  email: "pmb.ft@universitas-palembang.ac.id",
  stafHelpdesk: ["Surya Pratama, S.E.", "Eka Putri, A.Md."],
};

export const pmbMembersData: PMBMember[] = [
  {
    name: "Dr. Rudi Hartono, M.Eng.",
    designation: "Ketua Panitia PMB (WD III)",
    imageSrc: "/upload/image-civitas/43.avif",
    phone: timPMB.hotline,
    email: timPMB.email,
  },
  {
    name: "Surya Pratama, S.E.",
    designation: "Staf Verifikasi & Adm. PMB",
    imageSrc: "/upload/image-civitas/43.avif",
    phone: timPMB.hotline,
    email: timPMB.email,
  },
  {
    name: "Eka Putri, A.Md.",
    designation: "Staf Helpdesk & Informasi PMB",
    imageSrc: "/upload/image-civitas/43.avif",
    phone: timPMB.hotline,
    email: timPMB.email,
  },
];

// ----------------------------------------------------------------------------
// 7. BANNER CALL-TO-ACTION PMB UNTUK HALAMAN BERANDA
// Edit konten promo pendaftaran yang muncul di halaman utama (Beranda).
// ----------------------------------------------------------------------------
export const pmbBannerHome = {
  title: "Pendaftaran PMB Dibuka",
  description:
    "Penerimaan Mahasiswa Murni & Transisi S1 Teknik Sipil & Elektro. Pilihan Kelas Pagi, Sore, dan Akhir Pekan.",
  ctaLabel: "Daftar PMB Sekarang →",
  ctaHref: "/pmb",
};

// ----------------------------------------------------------------------------
// 8. PERTANYAAN UMUM PMB (FAQ)
// Edit pertanyaan dan jawaban yang muncul di komponen FAQ halaman PMB & Beranda.
// ----------------------------------------------------------------------------
export const faqItemsData: FAQItem[] = [
  {
    id: "item-1",
    question: "Apa saja Jalur Pendaftaran PMB Fakultas Teknik UNPAL?",
    answer:
      "FT UNPAL membuka Jalur Reguler (Seleksi Tes/Mandiri), Jalur Prestasi (Akademik & Non-Akademik), serta Jalur Transfer/Pindahan bagi mahasiswa lulusan D3/pindahan antar perguruan tinggi.",
  },
  {
    id: "item-2",
    question: "Program Studi apa saja yang dapat dipilih di Fakultas Teknik?",
    answer:
      "Kami menyelenggarakan dua Program Studi unggulan terakreditasi BAN-PT: S1 Teknik Sipil (Gelar S.T.) dan S1 Teknik Elektro (Gelar S.T.).",
  },
  {
    id: "item-3",
    question: "Apakah tersedia Kelas Karyawan / Kelas Malam?",
    answer:
      "Ya! Kami membuka Kelas Reguler Pagi dan Kelas Karyawan (Malam/Sabtu-Minggu) yang fleksibel bagi mahasiswa yang sudah bekerja.",
  },
  {
    id: "item-4",
    question: "Apa saja berkas persyaratan yang harus disiapkan?",
    answer:
      "Berkas utama meliputi: Fotokopi Ijazah/SKL SMA/SMK/MA legalisir, Pasfoto 3x4 (3 lembar), Fotokopi KTP/KK, serta mengisi Formulir Pendaftaran online/offline.",
  },
  {
    id: "item-5",
    question: "Bagaimana cara mendaftar dan menghubungi Sekretariat PMB?",
    answer:
      "Pendaftaran dapat dilakukan langsung di Sekretariat PMB Kampus UNPAL Jl. Dharmapala No.1 Palembang, atau menghubungi Helpdesk WhatsApp PMB resmi di Halaman Kontak.",
  },
];
