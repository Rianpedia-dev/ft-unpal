// ============================================================================
// DATA DETAIL PROGRAM STUDI FAKULTAS TEKNIK UNIVERSITAS PALEMBANG
// ============================================================================

export interface FeatureStep {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export interface ProspekKerja {
  peran: string;
}

export interface ProdiDetail {
  nama: string;
  akreditasi: string;
  bebasSKS: number;
  masaStudi: string;
  jumlahAlumni: string;
  kaprodi: {
    nama: string;
    gelar: string;
    foto: string;
  };
  deskripsiLengkap: string;
  visi: string;
  misi: string[];
  featuresList: FeatureStep[];
  prospekKerjaList: ProspekKerja[];
}

export const prodiDetailData: Record<string, ProdiDetail> = {
  "teknik-sipil": {
    nama: "Teknik Sipil",
    akreditasi: "Baik Sekali (BAN-PT)",
    bebasSKS: 144,
    masaStudi: "8 Semester (4 Tahun)",
    jumlahAlumni: "750+",
    kaprodi: {
      nama: "Dr. Ir. Hendra Wijaya, M.T.",
      gelar: "Ketua Program Studi Teknik Sipil",
      foto: "/upload/image-civitas/Marliyus Sunarhati, S.T., M.T.avif",
    },
    deskripsiLengkap:
      "Program Studi Teknik Sipil adalah cabang ilmu teknik yang berfokus pada perancangan, pembangunan, pemeliharaan, hingga renovasi berbagai infrastruktur fisik dan lingkungan, seperti gedung pencakar langit, jalan raya, jembatan, hingga bendungan. Mahasiswa di jurusan ini akan dibekali dengan kemampuan analitis tinggi yang mengandalkan prinsip matematika dan fisika (seperti mekanika teknik), sekaligus mempelajari berbagai perangkat lunak desain industri (seperti AutoCAD atau SAP2000). Ilmu ini umumnya dibagi menjadi lima konsentrasi utama, yaitu rekayasa struktur, geoteknik (ilmu tanah), manajemen konstruksi, teknik sumber daya air, dan rekayasa transportasi.\n\nKarena pembangunan dan pemeliharaan infrastruktur merupakan kebutuhan dasar setiap negara, lulusan Teknik Sipil memiliki prospek karier yang sangat luas dan stabil. Mereka dapat bekerja sebagai konsultan perencana yang membuat desain struktur di kantor, atau sebagai kontraktor pelaksana dan manajer proyek yang terjun langsung mengawasi jalannya konstruksi di lapangan. Selain di sektor swasta, sarjana Teknik Sipil juga sangat dibutuhkan di instansi pemerintahan seperti Kementerian PUPR atau BUMN bidang konstruksi.",
    visi:
      "Menjadi Program Studi Teknik Sipil yang unggul, berdaya saing nasional, dan terdepan dalam pengembangan rekayasa infrastruktur serta teknologi bahan bangunan ramah lingkungan pada tahun 2030.",
    misi: [
      "Menyelenggarakan pendidikan S1 Teknik Sipil berbasis kurikulum OBE yang relevan dengan kebutuhan industri konstruksi dan era digital.",
      "Mengembangkan penelitian terapan bidang rekayasa struktur, geoteknik, keairan, dan manajemen konstruksi yang berdampak bagi pembangunan nasional.",
      "Melaksanakan pengabdian kepada masyarakat melalui solusi teknis perencanaan dan perbaikan infrastruktur daerah.",
      "Memperluas jejaring kemitraan dengan BUMN konstruksi, konsultan perencana, serta instansi pemerintah dalam pelaksanaan MBKM dan magang kerja.",
    ],
    featuresList: [
      {
        step: "Bidang 1",
        title: "Dasar-Dasar Teknik Sipil",
        content: "Konsep dasar keilmuan matematika teknik, fisika terapan, mekanika bahan, dan gambar teknik dasar.",
        image: "/upload/prodi/teknik-sipil/Dasar-Dasar-Teknik-Sipil.avif",
      },
      {
        step: "Bidang 2",
        title: "Struktur Bangunan",
        content: "Perancangan gedung bertingkat, struktur beton bertulang, konstruksi baja, dan analisis ketahanan struktur terhadap gempa.",
        image: "/upload/prodi/teknik-sipil/Struktur-Bangunan.avif",
      },
      {
        step: "Bidang 3",
        title: "Geoteknik",
        content: "Pengujian mekanika tanah, analisis daya dukung fondasi dangkal & dalam, perkuatan lereng, serta rekayasa tanah bawah.",
        image: "/upload/prodi/teknik-sipil/Geoteknik.avif",
      },
      {
        step: "Bidang 4",
        title: "Jalan & Transportasi",
        content: "Perancangan geometrik jalan raya, perkerasan aspal/beton, manajemen lalu lintas perkotaan, dan sistem jaringan transportasi.",
        image: "/upload/prodi/teknik-sipil/Jalan-&-Transportasi.avif",
      },
      {
        step: "Bidang 5",
        title: "Sumber Daya Air",
        content: "Rekayasa hidrologi, pengelolaan wilayah sungai, saluran irigasi pertanian, bendungan, dan sistem pencegahan banjir.",
        image: "/upload/prodi/teknik-sipil/Sumber-Daya-Air.avif",
      },
      {
        step: "Bidang 6",
        title: "Manajemen Konstruksi",
        content: "Perencanaan waktu & biaya proyek (RAB), penjadwalan fisik, manajemen risiko, pengawasan mutu, dan hukum jasa konstruksi.",
        image: "/upload/prodi/teknik-sipil/Manajemen-Konstruksi.avif",
      },
      {
        step: "Bidang 7",
        title: "Teknologi Konstruksi",
        content: "Pemanfaatan sistem prefabrikasi, material konstruksi inovatif ramah lingkungan, serta teknologi komputer rekayasa modern.",
        image: "/upload/prodi/teknik-sipil/Teknologi-Konstruksi.avif",
      },
      {
        step: "Bidang 8",
        title: "Surveying & Pemetaan",
        content: "Pengukuran topografi lahan, penggunaan total station, pemetaan GPS/GIS, dan pengukuran posisi presisi proyek fisik.",
        image: "/upload/prodi/teknik-sipil/Surveying-&-Pemetaan.avif",
      },
      {
        step: "Bidang 9",
        title: "Teknik Lingkungan",
        content: "Pengelolaan drainase ramah lingkungan, pengolahan air bersih & limbah cair konstruksi, serta Analisis Mengenai Dampak Lingkungan (AMDAL).",
        image: "/upload/prodi/teknik-sipil/Teknik-Lingkungan.avif",
      },
      {
        step: "Bidang 10",
        title: "Keselamatan Konstruksi",
        content: "Penerapan sistem K3 (Keselamatan dan Kesehatan Kerja), mitigasi risiko kecelakaan kerja lahan, serta sertifikasi keselamatan kerja fisik.",
        image: "/upload/prodi/teknik-sipil/Keselamatan-Konstruksi.avif",
      },
      {
        step: "Bidang 11",
        title: "Perencanaan Infrastruktur",
        content: "Penyusunan tata ruang makro, perancangan fasilitas umum masyarakat, penguatan daya tahan lingkungan, serta pembangunan kota berkelanjutan.",
        image: "/upload/prodi/teknik-sipil/Perencanaan-Infrastruktur.avif",
      },
      {
        step: "Bidang 12",
        title: "Praktikum & Proyek Akhir",
        content: "Pengujian laboratorium bahan & mekanika tanah terpadu, proyek studio perancangan fisik, serta tugas akhir skripsi keteknikan.",
        image: "/upload/prodi/teknik-sipil/Praktikum-&-Proyek.avif",
      },
    ],
    prospekKerjaList: [
      { peran: "Project Manager Konstruksi" },
      { peran: "Site Engineer Proyek" },
      { peran: "Structural Consultant Engineer" },
      { peran: "Civil Engineer Infrastruktur" },
      { peran: "Quality Control Specialist" },
      { peran: "Estimator RAB Proyek" },
      { peran: "Geotechnical Specialist" },
      { peran: "Aparatur Sipil Negara Dinas PUPR" },
    ],
  },
  "teknik-elektro": {
    nama: "Teknik Elektro",
    akreditasi: "Baik Sekali (BAN-PT)",
    bebasSKS: 144,
    masaStudi: "8 Semester (4 Tahun)",
    jumlahAlumni: "500+",
    kaprodi: {
      nama: "Dr. Ir. Dewi Anggraini, M.T.",
      gelar: "Ketua Program Studi Teknik Elektro",
      foto: "/upload/image-civitas/Marliyus Sunarhati, S.T., M.T.avif",
    },
    deskripsiLengkap:
      "Program Studi Teknik Elektro adalah cabang ilmu teknik yang berfokus pada studi, perancangan, dan aplikasi sistem yang melibatkan kelistrikan, elektronika, dan elektromagnetisme. Mahasiswa di jurusan ini mempelajari cara membangkitkan, mendistribusikan, dan memanfaatkan energi listrik, mulai dari skala raksasa seperti jaringan pembangkit listrik hingga skala mikro seperti cip sirkuit di dalam smartphone. Perkuliahan Teknik Elektro sangat mengandalkan dasar matematika dan fisika terapan, di mana mahasiswanya dibekali kemampuan analitis untuk merancang perangkat keras (hardware), mengembangkan jaringan telekomunikasi, hingga memprogram sistem otomasi dan Internet of Things (IoT) yang menggerakkan berbagai teknologi modern.\n\nSecara umum, keilmuan ini terbagi dalam beberapa konsentrasi utama, yaitu teknik tenaga listrik (arus kuat), elektronika (arus lemah), telekomunikasi, dan sistem kendali atau robotika. Karena peradaban masa kini sangat bergantung pada energi listrik dan konektivitas digital, lulusan Teknik Elektro memiliki prospek karier yang sangat cerah dan fleksibel di berbagai sektor. Mereka sangat dibutuhkan oleh perusahaan energi dan utilitas (seperti PLN atau pengembang energi terbarukan), perusahaan telekomunikasi, industri manufaktur dan otomotif, perminyakan, hingga perusahaan teknologi multinasional sebagai engineer yang merancang teknologi masa depan.",
    visi:
      "Menjadi Program Studi Teknik Elektro yang unggul dalam ilmu pengetahuan dan teknologi kelistrikan, energi terbarukan, serta sistem kontrol otomatis berdaya saing tinggi pada tahun 2030.",
    misi: [
      "Menyelenggarakan pendidikan S1 Teknik Elektro bereputasi dengan penekanan pada arus kuat, energi terbarukan, dan otomasi industri.",
      "Melaksanakan riset terapan di bidang ketenagalistrikan, sistem tenaga, dan pengembangan Energi Baru Terbarukan (EBT).",
      "Menerapkan teknologi tepat guna bidang kelistrikan dan elektronika untuk pengabdian kepada masyarakat.",
      "Mengembangkan kerja sama dengan industri kelistrikan seperti PT PLN (Persero), PT Kilang Pertamina Internasional, dan PT Pusri.",
    ],
    featuresList: [
      {
        step: "Bidang 1",
        title: "Dasar-Dasar Teknik Elektro",
        content: "Rangkaian listrik, elektronika dasar, pengukuran listrik, matematika dan fisika teknik terapan.",
        image: "/upload/prodi/teknik-elektro/Dasar-Dasar-Teknik-Elektroo.avif",
      },
      {
        step: "Bidang 2",
        title: "Sistem Tenaga Listrik",
        content: "Pembangkitan, transmisi dan distribusi listrik, instalasi industri, serta proteksi sistem tenaga.",
        image: "/upload/prodi/teknik-elektro/Sistem-Tenaga-Listrik.avif",
      },
      {
        step: "Bidang 3",
        title: "Elektronika",
        content: "Komponen elektronika, perancangan rangkaian analog & digital, mikrokontroler, dan sistem elektronika.",
        image: "/upload/prodi/teknik-elektro/Elektronika.avif",
      },
      {
        step: "Bidang 4",
        title: "Sistem Kendali & Otomasi",
        content: "Prinsip sistem kontrol cerdas, pemrograman PLC industri, otomasi pabrik, dan instrumentasi.",
        image: "/upload/prodi/teknik-elektro/Sistem-Kendali-&-Otomasi.avif",
      },
      {
        step: "Bidang 5",
        title: "Telekomunikasi",
        content: "Sistem komunikasi nirkabel, arsitektur jaringan komunikasi, antena transmisi, dan transmisi komunikasi digital.",
        image: "/upload/prodi/teknik-elektro/Telekomunikasi-&-IoT.avif",
      },
      {
        step: "Bidang 6",
        title: "Komputer & Teknologi Digital",
        content: "Pemrograman sistem, logika digital, aplikasi Internet of Things (IoT), dan pemodelan embedded system.",
        image: "/upload/prodi/teknik-elektro/Komputer-&-Teknologi-Digital.avif",
      },
      {
        step: "Bidang 7",
        title: "Robotika",
        content: "Dasar robotika modern, integrasi sensor dan aktuator, algoritma kendali robot, serta pemrograman robotika.",
        image: "/upload/prodi/teknik-elektro/Robotika.avif",
      },
      {
        step: "Bidang 8",
        title: "Energi Terbarukan",
        content: "Pemanfaatan energi surya, instalasi panel surya (PLTS), sistem energi terbarukan, dan manajemen efisiensi daya.",
        image: "/upload/prodi/teknik-elektro/Energi-Terbarukan.avif",
      },
      {
        step: "Bidang 9",
        title: "Praktikum & Proyek Akhir",
        content: "Pengalaman praktikum di laboratorium terpadu, riset alat/sistem, serta penyusunan skripsi tugas akhir keteknikan.",
        image: "/upload/prodi/teknik-elektro/Praktikum-&-Proyek-Akhir.avif",
      },
    ],
    prospekKerjaList: [
      { peran: "Electrical Power Engineer" },
      { peran: "Grid Transmission Specialist" },
      { peran: "Industrial Automation Engineer" },
      { peran: "PLC Control Specialist" },
      { peran: "Renewable Energy Consultant" },
      { peran: "Solar PV Engineer" },
      { peran: "Maintenance Facility Engineer" },
      { peran: "Substation Operation Engineer" },
    ],
  },
};
