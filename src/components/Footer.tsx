import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-surface-900 text-white overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">RotCode</span>
            </a>
            <p className="text-surface-400 text-sm leading-relaxed max-w-xs">
              Marketplace source code web aplikasi berkualitas tinggi untuk
              mempercepat pengembangan bisnis digital Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Profil", href: "#profil" },
                { label: "Produk", href: "#produk" },
                { label: "Kontak", href: "#kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-surface-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Produk Populer</h4>
            <ul className="space-y-2.5">
              {[
                
                "RestoMaster POS",
              ].map((name) => (
                <li key={name}>
                  <a
                    href="#produk"
                    className="text-surface-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-2.5 text-sm text-surface-400">
              <li>📞 +62 895-3855-88528</li>
              <li>✉️ 889yasuo@gmail.com</li>
              <li>📍 Bogor, Indonesia</li>
              <li>🕐 Sen - Sab, 08:00 - 22:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-surface-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-surface-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} RotCode. Semua hak dilindungi.
            </p>
            <p className="flex items-center gap-1 text-surface-500 text-sm">
              Dibuat dengan Sirajuddin Ahmad Kurniawan 
               di Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
