'use client';

const Services = () => {
  const services = [
    {
      icon: '📋',
      title: 'Writ Petitions',
      description: 'Expert handling of constitutional writ petitions including habeas corpus, mandamus, prohibition, and certiorari.'
    },
    {
      icon: '🔐',
      title: 'Bail Matters',
      description: 'Specialized bail advocacy for criminal cases at all levels including anticipatory bail applications.'
    },
    {
      icon: '⚖️',
      title: 'Civil Cases',
      description: 'Comprehensive legal representation in commercial disputes, contractual matters, and civil litigations.'
    },
    {
      icon: '🚨',
      title: 'Criminal Cases',
      description: 'Aggressive defense and prosecution in serious criminal matters including white-collar crimes.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Disputes',
      description: 'Sensitive handling of family matters including divorce, custody, and inheritance disputes.'
    },
    {
      icon: '🏠',
      title: 'Property Matters',
      description: 'Expert guidance on property disputes, land issues, succession cases, and conveyancing matters.'
    },
    {
      icon: '📜',
      title: 'Constitutional Cases',
      description: 'Representation in constitutional law matters and cases involving fundamental rights.'
    },
    {
      icon: '📞',
      title: 'Legal Consultation',
      description: 'Personalized legal advisory services for businesses and individuals on all legal matters.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-900">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal services covering all major practice areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Legal Assistance?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Advocate MK Yadav for a free consultation and discuss your legal matters with an experienced professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919219118092"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919219118092"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
