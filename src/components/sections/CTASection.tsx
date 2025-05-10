import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Part of the Future of Regulatory Compliance
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-8">
          Join our exclusive beta program and help shape the future of medical device compliance with SamDoq.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
            Apply for Beta Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;