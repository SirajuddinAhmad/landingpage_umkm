import { ArrowDown, ShoppingCart, Star, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface-50 via-primary-50/30 to-surface-50"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-primary-200/40 to-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-accent-400/20 to-pink-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-primary-100/30 to-transparent blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-xl shadow-primary-500/30 flex items-center justify-center text-xl sm:text-2xl">
            💻
          </div>
        </div>
        <div className="absolute top-40 right-[15%] animate-float animate-delay-200">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl shadow-emerald-500/30 flex items-center justify-center text-lg sm:text-2xl">
            ⚡
          </div>
        </div>
        <div className="absolute bottom-40 left-[20%] animate-float animate-delay-400">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl shadow-orange-500/30 flex items-center justify-center text-lg sm:text-xl">
            🚀
          </div>
        </div>
        <div className="absolute bottom-32 right-[10%] animate-float animate-delay-300 hidden sm:flex">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-xl shadow-pink-500/30 flex items-center justify-center text-xl sm:text-2xl">
            🛒
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 border border-primary-200/60 text-primary-700 text-sm font-semibold mb-6 sm:mb-8 animate-fade-in-up">
            <Zap className="h-4 w-4" />
            <span>Marketplace Source Code #1 Indonesia</span>
            <Star className="h-4 w-4 fill-primary-500 text-primary-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-surface-900 leading-tight animate-fade-in-up animate-delay-100">
            Solusi{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                Source Code
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
            <br />
            Web Aplikasi dan LandingPage
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-surface-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Dapatkan source code web aplikasi berkualitas tinggi, siap pakai, dan mudah
            dikustomisasi untuk kebutuhan bisnis Anda. Hemat waktu dan biaya
            pengembangan hingga <span className="font-bold text-primary-600">80%</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#produk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              Lihat Produk
            </a>
            <a
              href="#profil"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white text-surface-700 font-bold text-base sm:text-lg shadow-lg border border-surface-200 hover:border-primary-300 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
            >
              Pelajari Lebih Lanjut
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-fade-in-up animate-delay-400">
            {[
              { value: "50+", label: "Source Code" },
              { value: "200+", label: "Client Puas" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-surface-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
