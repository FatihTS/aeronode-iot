export default function IoTLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300 mb-6">
              AERONODE IOT • EMBEDDED • TELEMETRY
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              AeroNode
              <span className="block text-emerald-400">IoT</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
              AeroNode IoT develops embedded systems, telemetry platforms,
              LoRaWAN infrastructure and battery-powered wireless devices
              for industrial and remote monitoring applications.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-4xl font-bold text-emerald-400">STM32</div>
          <p className="mt-2 text-zinc-400">
            Embedded firmware development and low-power optimization.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-4xl font-bold text-cyan-400">LoRaWAN</div>
          <p className="mt-2 text-zinc-400">
            Long-range telemetry and remote sensor communication systems.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-4xl font-bold text-purple-400">RF Design</div>
          <p className="mt-2 text-zinc-400">
            Battery-powered wireless products and sensor platforms.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="text-4xl font-bold">What We Build</h2>
            <p className="mt-4 text-zinc-400 text-lg">
              We develop custom IoT and embedded solutions for industrial,
              telemetry, tracking, and low-power applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "LoRaWAN Infrastructure",
                desc: "Long-range wireless telemetry and remote monitoring systems.",
              },
              {
                title: "Embedded Firmware Development",
                desc: "Low-power STM32 and embedded firmware solutions.",
              },
              {
                title: "Custom STM32 Solutions",
                desc: "Custom embedded hardware and firmware development.",
              },
              {
                title: "Battery Powered Devices",
                desc: "Efficient low-power battery operated IoT systems.",
              },
              {
                title: "Telemetry Platforms",
                desc: "Sensor data collection and remote telemetry infrastructure.",
              },
              {
                title: "RF & Wireless Systems",
                desc: "Wireless communication and RF based embedded products.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-emerald-500/40 transition"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="mt-4 text-zinc-400 text-lg">
              Example embedded systems and telemetry solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Smart Barn Monitoring System",
                desc: "Wireless livestock and barn monitoring platform with environmental sensing, telemetry infrastructure and low-power embedded hardware.",
              },
              {
                title: "Solar Telemetry Node",
                desc: "Low-power solar powered remote monitoring system with wireless telemetry.",
              },
              {
                title: "LoRaWAN Gateway System",
                desc: "Custom gateway infrastructure and remote sensor communication.",
              },
              {
                title: "Flight Computer",
                desc: "Real-time telemetry and embedded control systems.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-white/10" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">Contact AeroNode IoT</h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Contact us for custom embedded systems, telemetry platforms,
            wireless sensor networks, and IoT product development.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@aeronodeiot.com"
              className="rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400 transition"
            >
              info@aeronodeiot.com
            </a>

            <a
              href="https://github.com"
              className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
