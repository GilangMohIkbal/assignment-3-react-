let experience = [
  {
    id: 1,
    color: "event-date bg-soft-success text-success",
    category: "Project 1",
    name: "Classroom",
    about: "Membuat website yang menyerupai Google Classroom",
    detail:
      "Pembuatan website pembelajaran seperti Google Classroom untuk kegiatan pembelajaran",
    fitur:
      "user dapat membuat kelas sendiri sebagai guru atau join ke kelas yang dibua oleh user lain untuk memulai pembelajaran sebagai siswa",
    peran: "BackEnd & 40% Front-end",
    tools: [
      "Node Js ",
      " | ",
      "ExpressJs",
      " | ",
      "MySQL",
      " | ",
      "VueJS",
      " | ",
      "NuxtJS",
    ],
    tautan: "",
    status: "Belum di Deploy",
  },
  {
    id: 2,
    color: "event-date bg-soft-danger text-danger",
    category: "Project 2",
    name: "Web Kampus",
    about:
      "Membuat web kampus yang meliputi informasi kegiatan kampus dan data mahasiswa",
    detail:
      "Pembuatan website Sistem Informasi Untuk Program Profesi Guru (PPG) Universitas Negeri Jakarta",
    fitur:
      "Mahasiswa PPG dapat melihat informasi/pengumuman terbaru terkait kegiatan PPG dan dapat melihat data mahasiswa untuk mengambil sertifikat kelulusan ataupun melihat data Dosen yang mengajar",
    peran: "Front-end",
    tools: ["VueJS ", " | ", "NuxtJS ", " | ", "Boostrap 5 "],
    tautan: "https://simppg.unj.ac.id/",
    status: "baru selesai 40%",
  },
  {
    id: 3,
    color: "event-date bg-soft-warning text-warning",
    category: "Project 3",
    name: "Try Out Digital",
    about:
      "membuat web Try out untuk mahasiswa PPG dalam menghadapi Ujian Kompetensi",
    detail:
      "Pembuatan website Uji Coba untuk mahasiswa PPG UNJ dalam menghadapi Ujian Kompetensi yang diselenggarakan oleh Kemendikbud",
    fitur:
      "mahasiswa dapat melatih mengerjakan soal dari kategori-kategori soal yang akan diujikan lalu dapat melihat pembahasan nya juga disetiap soal nya untuk mempelajari lebih lanjut",
    peran: "Front-end",
    tools: ["VueJS", " | ", "NuxtJS", " | ", "Boostrap 5"],
    tautan: "https://simppg.unj.ac.id/ukmppg",
    status: "selesai",
  },
  {
    id: 4,
    color: "event-date bg-soft-primary text-primary",
    category: "Project 4",
    name: "Course Learning",
    about: "Membuat website pembelajran berbayar berbasis video",
    detail:
      "Pembuatan website pembelajaran seperti vue school yang menyediakan berbagai video pembelajaran",
    fitur:
      "user dapat belajar dari video yang disediakan, ada yang tersedia secara gratis ada juga yang hanya tersedia setelah membayar",
    peran: "Front-end",
    tools: ["VueJS", " | ", "NuxtJS", " | ", "Supabase", " | ", "Prisma"],
    tautan:
      "https://6563416025e1946aa7f4981f--jovial-beijinho-346ac2.netlify.app/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
    status: "belum selesai",
  },
];

export function getData() {
  return experience;
}
