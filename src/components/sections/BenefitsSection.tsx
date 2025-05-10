import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Reduce documentation time by up to 75%",
    "Minimize regulatory submission rejections",
    "Stay compliant with automatic updates on changing regulations",
    "Enhance product safety with AI-assisted risk management",
    "Streamline audit preparation and reduce stress",
    "Cut costs associated with regulatory consultants",
    "Speed up time-to-market for new medical devices",
    "Eliminate human error in compliance documentation"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 mb-10 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical technology professional using Samdog" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Regulatory Compliance Process
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our AI-powered eQMS platform revolutionizes how medical device manufacturers handle regulatory compliance, making it faster, more accurate, and less resource-intensive.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;