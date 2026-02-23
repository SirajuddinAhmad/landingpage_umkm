export interface Product {
  id: number;
  title: string;
  description: string;
  framework: string;
  category: string;
  price: string;
  features: string[];
  color: string;
  icon: string;
}

export const products: Product[] = [
  
  
  
  {
    id: 4,
    title: "Digital Arsip Management",
    description: "Sistem arsip digital untuk mengelola surat fitur manajemen surat, pengajuan, Membuat Surat Keterangan, Reset Database dan Backup data.",
    framework: "Vue.js + React.js",
    category: "Restoran & POS",
    price: "Rp 200.000",
    features: ["Manajemen Surat", "Pengajuan", "Surat Keterangan", "Backup Data", "Reset Data"],
    color: "from-orange-500 to-red-500",
    icon: "🧾",
  },
 
  {
    id: 6,
    title: "Website Landing Page",
    description: "Sistem manajemen Landing Page lengkap dengan fitur CURD, untuk mengubah struktur tampilan gambar, font, logo dan link link lainnya.",
    framework: "Vue.js + React.js",
    category: "WLP / LP",
    price: "Rp 200.000",
    features: ["CURD", "Edit tampilan Gambar", "Edit Font", "Edit Logo"],
    color: "from-indigo-500 to-blue-600",
    icon: "🖥️",
  },
];
