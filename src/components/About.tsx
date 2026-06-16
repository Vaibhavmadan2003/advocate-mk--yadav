'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-900">Advocate MK Yadav</span>
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated to providing the highest standard of legal representation and counsel
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Justice & Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of dedicated practice at the High Court, Advocate MK Yadav has earned a reputation for delivering exceptional legal services. Our commitment to justice and client satisfaction drives every case we undertake.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-900 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">⚖️ Our Mission</h4>
                <p className="text-blue-100 leading-relaxed">
                  To provide accessible, professional, and effective legal representation to individuals and businesses, ensuring their rights are protected and justice is served.
                </p>
              </div>

              <div className="bg-gray-800 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">🎯 Our Vision</h4>
                <p className="text-gray-100 leading-relaxed">
                  To be recognized as the most trusted and reliable legal partner in Prayagraj, known for integrity, expertise, and unwavering commitment to our clients' success.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Advocate MK Yadav?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Expert Knowledge</h4>
                    <p className="text-blue-100">Deep expertise in civil, criminal, and constitutional law</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">High Court Practice</h4>
                    <p className="text-blue-100">Extensive experience at the High Court level</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Proven Track Record</h4>
                    <p className="text-blue-100">95% success rate with 200+ cases handled</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Client-Centric Approach</h4>
                    <p className="text-blue-100">Personalized attention and dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
