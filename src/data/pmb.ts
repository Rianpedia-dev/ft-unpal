// Data PMB (Penerimaan Mahasiswa Baru)

export interface GelombangPMB {
  nama: string;
  pendaftaran: string;
  tes: string;
  pengumuman: string;
  daftarUlang: string;
  status: "Selesai" | "Buka" | "Akan Datang";
}

export interface BiayaKuliah {
  prodi: string;
  dpp: string; // Dana Pengembangan Pendidikan (sekali bayar)
  spp: string; // SPP per semester
  praktikum: string; // Biaya praktikum per semester
}

export interface ProsedurStep {
  step: number;
  judul: string;
  deskripsi: string;
}

export const gelombangPMB: GelombangPMB[] = [
  {
    nama: "Gelombang 1 (Jalur Prestasi & Dini)",
    pendaftaran: "02 Januari - 31 Maret 2026",
    tes: "Tanpa Tes (Seleksi Rapor/Prestasi)",
    pengumuman: "05 April 2026",
    daftarUlang: "06 April - 30 April 2026",
    status: "Selesai",
  },
  {
    nama: "Gelombang 2 (Jalur Reguler Utama)",
    pendaftaran: "01 April - 30 Juni 2026",
    tes: "05 Juli 2026",
    pengumuman: "10 Juli 2026",
    daftarUlang: "11 Juli - 31 Juli 2026",
    status: "Buka",
  },
  {
    nama: "Gelombang 3 (Jalur Akhir & Transfer)",
    pendaftaran: "01 Juli - 25 Agustus 2026",
    tes: "28 Agustus 2026",
    pengumuman: "30 Agustus 2026",
    daftarUlang: "31 Agustus - 05 September 2026",
    status: "Akan Datang",
  },
];

export const persyaratanPMB = [
  "Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMA/SMK/MA sederajat yang telah dilegalisir (2 lembar).",
  "Fotokopi Rapor semester 1 s.d. 5 (khusus pendaftar Jalur Prestasi).",
  "Pasfoto terbaru background merah ukuran 3x4 (4 lembar) dan 4x6 (2 lembar).",
  "Fotokopi Kartu Keluarga (KK) dan Kartu Tanda Penduduk (KTP) / Kartu Pelajar (2 lembar).",
  "Surat Keterangan Bebas Narkoba dari instansi kesehatan resmi.",
  "Surat Keterangan Tidak Buta Warna (khusus Prodi Teknik Elektro & Teknik Mesin).",
  "Membayar biaya formulir pendaftaran sebesar Rp 300.000,-.",
];

export const rincianBiaya: BiayaKuliah[] = [
  {
    prodi: "Teknik Sipil (S1)",
    dpp: "Rp 4.500.000,-",
    spp: "Rp 3.200.000,-",
    praktikum: "Rp 450.000,-",
  },
  {
    prodi: "Teknik Mesin (S1)",
    dpp: "Rp 4.500.000,-",
    spp: "Rp 3.200.000,-",
    praktikum: "Rp 500.000,-",
  },
  {
    prodi: "Teknik Elektro (S1)",
    dpp: "Rp 4.500.000,-",
    spp: "Rp 3.200.000,-",
    praktikum: "Rp 500.000,-",
  },
  {
    prodi: "Teknik Informatika (S1)",
    dpp: "Rp 5.000.000,-",
    spp: "Rp 3.500.000,-",
    praktikum: "Rp 400.000,-",
  },
];

export const prosedurPMB: ProsedurStep[] = [
  {
    step: 1,
    judul: "Pendaftaran Online / Offline",
    deskripsi:
      "Isi formulir pendaftaran secara online melalui portal PMB UNPAL atau datang langsung ke Sekretariat PMB Gedung FT UNPAL.",
  },
  {
    step: 2,
    judul: "Pembayaran Formulir",
    deskripsi:
      "Lakukan pembayaran formulir sebesar Rp 300.000,- melalui rekening resmi Bank Sumsel Babel / Mandiri UNPAL.",
  },
  {
    step: 3,
    judul: "Upload / Serah Berkas",
    deskripsi:
      "Unggah berkas persyaratan (Ijazah/SKL, KTP, Foto, dll) ke portal pendaftaran atau serahkan berkas fisik ke panitia.",
  },
  {
    step: 4,
    judul: "Pelaksanaan Ujian Seleksi",
    deskripsi:
      "Ikuti Ujian Saringan Masuk (USM) berbasis Komputer (CBT) sesuai jadwal gelombang yang dipilih (bebas tes bagi jalur prestasi).",
  },
  {
    step: 5,
    judul: "Pengumuman Hasil",
    deskripsi:
      "Cek pengumuman kelulusan melalui portal pendaftaran atau papan pengumuman Kampus FT Universitas Palembang.",
  },
  {
    step: 6,
    judul: "Daftar Ulang & Orientasi",
    deskripsi:
      "Lakukan pembayaran SPP & DPP pertama, dilanjutkan registrasi ulang dan mengikuti Pengenalan Kehidupan Kampus (PKKMB).",
  },
];

export const portalPMBUrl = "https://pmb.universitas-palembang.ac.id";

export const faqPMB = [
  {
    pertanyaan: "Apakah pendaftaran PMB Fakultas Teknik UNPAL bisa dilakukan secara online?",
    jawaban:
      "Ya, seluruh alur pendaftaran dapat dilakukan secara daring melalui portal resmi PMB di pmb.universitas-palembang.ac.id atau secara luring langsung di Gedung Dekanat FT UNPAL.",
  },
  {
    pertanyaan: "Apakah ada fasilitas Beasiswa bagi mahasiswa baru?",
    jawaban:
      "Tersedia berbagai skema beasiswa seperti Beasiswa KIP Kuliah, Beasiswa Prestasi Akademik/Non-Akademik, Beasiswa Kemitraan Bank Sumsel Babel, dan Beasiswa Yayasan.",
  },
  {
    pertanyaan: "Bagaimana sistem perkuliahan bagi calon mahasiswa yang sudah bekerja?",
    jawaban:
      "Fakultas Teknik menyediakan Kelas Reguler Sore / Eksekutif untuk Program Studi Teknik Sipil, Mesin, Elektro, dan Informatika dengan jadwal yang disesuaikan.",
  },
  {
    pertanyaan: "Apakah lulusan SMK / MA Keagamaan bisa mendaftar di Fakultas Teknik?",
    jawaban:
      "Bisa. Semua jurusan dari SMA/SMK/MA sederajat berhak mendaftar untuk seluruh program studi S1 Teknik Sipil, Mesin, Elektro, maupun Informatika.",
  },
];

export const timPMB = {
  ketuaPanitia: "Dr. Rudi Hartono, S.T., M.Eng. (Wakil Dekan III)",
  sekretariat: "Ruang Loket PMB Gedung A Dekanat FT UNPAL",
  jamLayanan: "Senin - Sabtu: 08.00 - 16.00 WIB",
  hotline: "+62 821-7788-9900 (WhatsApp Only)",
  email: "pmb.ft@universitas-palembang.ac.id",
  stafHelpdesk: ["Surya Pratama, S.E.", "Eka Putri, A.Md."],
};

