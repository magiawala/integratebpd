import svgPaths from "@/imports/svg-hl8ovy5yis";
import imgScreenshot20250927At21814Pm1 from "figma:asset/09eb3db5fdf3e6261ecf80eed8d1e98a47d19570.png";
import imgIntegrate from "figma:asset/5402555b754bc317d46ff14ba54fee2dadc3b87b.png";
import imgLinkIntegrate from "figma:asset/bdcedcd64a148ce17e04736baaa149e03bb5f5bf.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={imgIntegrate} alt="Integrate" className="h-8 sm:h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Our Programs</button>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900">How It Works</button>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Results</button>
              <span className="text-sm font-medium text-gray-600 underline">About Us</span>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-xs font-semibold text-gray-600 rounded-lg hover:bg-gray-100">
                Client Login
              </button>
              <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-[#EE5F2B] to-[#F2825A] hover:shadow-xl transition-shadow">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0b1c38] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            {/* Left Content */}
            <div className="flex-1 w-full">
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-300">Our Mission</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-8">
                Self-administered solutions addressing root causes to conquer the world's toughest personality disorders.
              </h1>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-lg">
              <img 
                src={imgScreenshot20250927At21814Pm1} 
                alt="Therapy session" 
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <svg className="w-8 h-6 mb-3" fill="none" viewBox="0 0 32 24">
                <path d={svgPaths.p2ab78900} fill="#2563EB" />
              </svg>
              <h3 className="text-4xl font-bold text-[#0b1c38] mb-3">2,000+</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                individuals worldwide helped via Integrate BPD, providing critical support and resources for those with Borderline Personality Disorder (BPD)
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <svg className="w-9 h-8 mb-3" fill="none" viewBox="0 0 34 32">
                <path d={svgPaths.pce94100} fill="#2563EB" />
              </svg>
              <h3 className="text-4xl font-bold text-[#0b1c38] mb-3">80%</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                reduction in self-harm and suicidal behaviors observed within three months of consistent engagement with Integrate BPD.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <svg className="w-8 h-8 mb-3" fill="none" viewBox="0 0 36 36">
                <path d={svgPaths.p285ce380} stroke="#3E7BFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
              <h3 className="text-4xl font-bold text-[#0b1c38] mb-3">1,200+</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                hours of training have been completed by professionals using Integrate BPD resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Elements Section */}
      <section className="bg-[#f8fafc] py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-blue-300/90 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#11233b]">Our Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141d29] mb-6">
              Core Elements of Integrate BPD
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Integrate BPD blends cutting-edge psychoanalytic research with compassionate care to address the root causes of borderline personality disorder (BPD). Our approach focuses on lasting, transformative change by targeting identity diffusion and the fragmented object relations to promote holistic and irreversible integration.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Root Cause Analysis */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.p2efcb180} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Root Cause Analysis</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Understanding the root cause of BPD, identity diffusion (where a child's personality remains split and undeveloped), is key to our approach.
              </p>
            </div>

            {/* Card 2 - Community Focused */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-6" fill="none" viewBox="0 0 34.9886 26">
                  <path d={svgPaths.p267e8b80} fill="black" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Community Focused</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Our community-driven platform fosters collaboration, offering both peer and expert support throughout the healing process.
              </p>
            </div>

            {/* Card 3 - Holistic Integration */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.p163d2900} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Holistic Integration</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Our approach emphasizes the holistic integration of fragmented personality aspects, promoting full-spectrum healing.
              </p>
            </div>

            {/* Card 4 - Psychoanalytic Roots */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.p39361500} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Psychoanalytic Roots</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Our program is built on psychoanalytic theories, offering deep insights into the mind and behavior of those with BPD.
              </p>
            </div>

            {/* Card 5 - Measurement Tools */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.pbbf1500} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Measurement Tools</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Regular evaluations track progress and integration, highlighting areas needing improvement to ensure complete integration.
              </p>
            </div>

            {/* Card 6 - Self-Administered */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-300/40 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.p1c419e80} fill="#1D1B20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#141d29] mb-4">Self-Administered</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Allowing full control over the healing process, fostering a deep sense of ownership and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b1c38] py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            We are here for you
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you have questions about our services, need support, or want to learn more about how Integrate BPD can assist you, please feel free to reach out to us. Our team is dedicated to providing you with the information and assistance you need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3.5 text-lg font-semibold text-white rounded-2xl shadow-lg bg-gradient-to-r from-[#EE5F2B] to-[#F2825A] hover:shadow-xl transition-shadow">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4l8 4-8 4z" />
              </svg>
            </button>
            <button className="w-full sm:w-auto px-10 py-3.5 text-lg font-semibold text-white rounded-2xl border-2 border-white/30 hover:border-white/50 transition-colors">
              Learn More
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                <g>
                  <path d={svgPaths.p1b122e80} stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
                  <path d={svgPaths.p17a68100} stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
                </g>
              </svg>
              <span className="text-white/80">support@integratebpd.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p32db8200} stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
              </svg>
              <span className="text-white/80">(800) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#11233b] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
            {/* Left Column - Brand & Newsletter */}
            <div className="flex-1 max-w-xl">
              <img src={imgIntegrate} alt="Integrate" className="h-10 w-auto mb-6" />
              <p className="text-white/70 leading-relaxed mb-8">
                Empower individuals to overcome personality disorders with self-administered therapies that address root causes often missed by traditional treatments.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Sign up for our newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                  />
                  <button className="px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE5F2B] to-[#F2825A] hover:shadow-lg transition-shadow">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { path: svgPaths.p3c358280, viewBox: "0 0 18 18" },
                  { path: svgPaths.pba1780, viewBox: "0 0 18 18" },
                  { path: [svgPaths.p299a6200, svgPaths.p3cad6d80], viewBox: "0 0 18 18" },
                  { path: [svgPaths.p204bd7c0, svgPaths.pad25e80], viewBox: "0 0 18 18" },
                  { path: [svgPaths.p1e200900, svgPaths.p35138200], viewBox: "0 0 18 18" },
                ].map((icon, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox={icon.viewBox}>
                      {Array.isArray(icon.path) ? (
                        icon.path.map((p, i) => (
                          <path key={i} d={p} stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        ))
                      ) : (
                        <path d={icon.path} stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      )}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Columns - Links */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Who are we</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">What we do</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Our Values</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Free Tools</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">E-books</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Use</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">HIPAA Notice</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <div>
                <p className="mb-2">Phone Inquiries: <span className="text-white/70">(800) 123-4567</span></p>
                <p>Our Address: <span className="text-white/70">123 Therapy Lane, Wellness City, WC 12345</span></p>
              </div>
              <p>© 2025 Integratebpd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
