import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo RotRotStore!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ASubjek: ${formData.subject}%0APesan: ${formData.message}`;
    window.open(`https://wa.me/62895385588528?text=${waMessage}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telepon / WhatsApp",
      value: "+62 895-3855-88528",
      link: "https://wa.me/62895385588528",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "889yasuo@gmail.com",
      link: "mailto:889yasuo@gmail.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lokasi",
      value: "Bogor, Indonesia",
      link: "#",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Jam Operasional",
      value: "Senin - Sabtu, 08:00 - 22:00",
      link: "#",
      color: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <section id="kontak" className="relative bg-gradient-to-b from-white via-primary-50/30 to-surface-50 py-16 sm:py-24 overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-surface-900 leading-tight">
            Ada Pertanyaan?{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-surface-600 leading-relaxed">
            Tim kami siap membantu Anda memilih source code yang tepat untuk kebutuhan bisnis Anda.
            Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-surface-100 hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-200 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-surface-400 font-medium">{info.label}</div>
                  <div className="text-sm sm:text-base font-bold text-surface-800 group-hover:text-primary-600 transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/62895385588528?text=Halo%20Kak%2C%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-surface-100 shadow-xl shadow-primary-500/5">
              <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-1">Kirim Pesan</h3>
              <p className="text-sm text-surface-500 mb-6">Isi form di bawah dan kami akan menghubungi Anda segera</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-surface-900 mb-2">Pesan Terkirim!</h4>
                  <p className="text-surface-500">Anda akan diarahkan ke WhatsApp untuk konfirmasi.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                      Subjek
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Tanya tentang source code..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-800 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-base shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="h-5 w-5" />
                    Kirim Pesan via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
