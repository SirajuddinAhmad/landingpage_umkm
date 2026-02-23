import { useState } from "react";
import { products } from "../data/products";
import { ShoppingBag, Tag, Layers, ExternalLink, Search, ChevronRight } from "lucide-react";

export function Products() {
  const categories = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produk" className="relative bg-gradient-to-b from-white via-surface-50/80 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary-100/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <ShoppingBag className="h-4 w-4" />
            Produk Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-surface-900 leading-tight">
            Koleksi{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Source Code
            </span>{" "}
            Premium
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-surface-600 leading-relaxed">
            Pilih source code web aplikasi sesuai kebutuhan bisnis Anda. Semua produk
            dilengkapi dokumentasi lengkap dan support instalasi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white text-surface-600 border border-surface-200 hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl bg-white border border-surface-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200 transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Top Gradient Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${product.color}`} />

              <div className="p-5 sm:p-6 lg:p-7">
                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg transition-transform duration-300 ${
                      hoveredId === product.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    {product.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-100 text-surface-600 text-xs font-semibold">
                    <Tag className="h-3 w-3" />
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-surface-500 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Framework Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-4 w-4 text-primary-500" />
                  <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">
                    {product.framework}
                  </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs sm:text-sm text-surface-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-surface-100 pt-4 sm:pt-5">
                  <div className="flex items-center justify-between">
                    {/* Price */}
                    <div>
                      <div className="text-xs text-surface-400 font-medium">Mulai dari</div>
                      <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                        {product.price}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/62895385588528?text=Halo%20RotCode%2C%20saya%20ingin%20memesan%20source%20code%20${encodeURIComponent(product.title)}%20(${product.framework})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${product.color} text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Pesan
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-surface-900">Tidak menemukan yang dicari?</h4>
                <p className="text-sm text-surface-500">Kami bisa buatkan custom sesuai kebutuhan Anda</p>
              </div>
            </div>
            <a
              href="https://wa.me/62895385588528?text=Halo%20CodeMart%2C%20saya%20ingin%20request%20custom%20source%20code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
            >
              Request Custom
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
