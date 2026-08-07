// Data PMB (Penerimaan Mahasiswa Baru)

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

export interface BiayaPendidikan {
  kategori: string;
  kelasA: string;
  kelasB: string;
}

export interface ProsedurStep {
  step: number;
  judul: string;
  deskripsi: string;
}

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

export const rincianBiayaNew: BiayaPendidikan[] = [
  {
    kategori: "Mahasiswa Murni",
    kelasA: "Kelas A (Pagi & Sore)",
    kelasB: "Kelas B (Jum'at - Sabtu)",
  },
  {
    kategori: "Mahasiswa Transisi",
    kelasA: "Kelas A (Pagi & Sore)",
    kelasB: "Kelas B (Jum'at - Sabtu)",
  },
];

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

export const portalPMBUrl = "https://pmb.universitas-palembang.ac.id";

export const timPMB = {
  ketuaPanitia: "Dr. Rudi Hartono, S.T., M.Eng. (Wakil Dekan III)",
  sekretariat: "Ruang Loket PMB Gedung A Dekanat FT UNPAL",
  jamLayanan: "Senin - Sabtu: 08.00 - 16.00 WIB",
  hotline: "+62 821-7788-9900 (WhatsApp Only)",
  email: "pmb.ft@universitas-palembang.ac.id",
  stafHelpdesk: ["Surya Pratama, S.E.", "Eka Putri, A.Md."],
};
