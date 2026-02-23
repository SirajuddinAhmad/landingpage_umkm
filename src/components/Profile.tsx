import { CheckCircle, Code, Globe, Headphones, Rocket, Shield, Users } from "lucide-react";

export function Profile() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Source Code Berkualitas",
      desc: "Kode bersih, terstruktur, dan mengikuti best practice modern development.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Siap Pakai",
      desc: "Langsung bisa dijalankan dengan dokumentasi instalasi yang lengkap.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Aman & Terupdate",
      desc: "Dibangun dengan framework terbaru dan standar keamanan terkini.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support Responsif",
      desc: "Tim support siap membantu instalasi dan kustomisasi kapan saja.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi Platform",
      desc: "Responsive design yang sempurna di desktop, tablet, dan mobile.",
    },
    
  ];

  return (
    <section id="profil" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary-50 to-primary-100/50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent-400/10 to-pink-400/5 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <Users className="h-4 w-4" />
            Tentang Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-surface-900 leading-tight">
            Kenapa Memilih{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              RotCode?
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-surface-600 leading-relaxed">
            <strong className="text-surface-800">RodCode</strong> adalah marketplace
            source code web aplikasi terpercaya yang menyediakan solusi digital
            siap pakai untuk berbagai kebutuhan bisnis. Kami hadir untuk membantu
            developer, startup, dan perusahaan mempercepat proses development
            dengan source code berkualitas tinggi yang telah diuji dan siap di-deploy.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl shadow-primary-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Visi Kami</h3>
              <p className="text-primary-100 leading-relaxed text-sm sm:text-base">
                Menjadi marketplace source code web aplikasi terdepan di Indonesia
                yang membantu mempercepat transformasi digital bagi semua kalangan,
                dari developer pemula, Profesional dan cocok untuk projek kuliah.
              </p>
            </div>
          </div>
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-800 to-surface-900 text-white shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Misi Kami</h3>
              <p className="text-surface-300 leading-relaxed text-sm sm:text-base">
                Menyediakan source code berkualitas dengan harga terjangkau, dokumentasi
                lengkap, dan support terbaik agar setiap orang bisa membangun aplikasi
                web profesional dengan cepat dan efisien.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 rounded-2xl bg-surface-50 border border-surface-100 hover:bg-white hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-surface-500 leading-relaxed">
                {feature.desc}
              </p>
              <div className="mt-3 flex items-center gap-1 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="h-4 w-4" />
                Tersedia
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
