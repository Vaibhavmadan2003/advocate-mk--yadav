'use client';

const Hero = () => {
  return (
    <section className="pt-56 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-blue-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400/30">
              <span className="text-sm font-semibold">⚖️ LEGAL EXCELLENCE SINCE YEARS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-2 leading-tight">
              Advocate MK Yadav
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              in <span className="text-blue-300">Prayagraj</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional legal services at the High Court with expertise in civil, criminal, and constitutional law. Your trusted partner for justice and legal excellence in Prayagraj, Uttar Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919219118092"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                📞 Schedule Consultation
              </a>
              <a
                href="https://wa.me/919219118092"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                💬 Quick Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-300 mb-2">200+</div>
              <p className="text-blue-100 font-semibold">Cases Handled</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-300 mb-2">95%</div>
              <p className="text-blue-100 font-semibold">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-300 mb-2">15+</div>
              <p className="text-blue-100 font-semibold">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-300 mb-2">100%</div>
              <p className="text-blue-100 font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
