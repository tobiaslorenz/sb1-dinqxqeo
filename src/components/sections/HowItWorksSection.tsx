import React, { useEffect, useRef } from 'react';
import { FileText, Database, Shield, CheckCircle } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const Step = ({ number, title, description, icon, isActive, onClick }: StepProps) => {
  return (
    <div 
      className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-white text-gray-800 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`mr-4 p-2 rounded-full ${
          isActive ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
        }`}>
          {icon}
        </div>
        <div>
          <div className={`text-sm font-semibold ${
            isActive ? 'text-blue-200' : 'text-blue-600'
          }`}>
            STEP {number}
          </div>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <p className={isActive ? 'text-blue-100' : 'text-gray-600'}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Upload Device Information",
      description: "Simply upload your medical device specifications and regulatory requirements.",
      icon: <FileText size={24} />
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our AI analyzes your device against current regulations and identifies documentation needs.",
      icon: <Database size={24} />
    },
    {
      number: 3,
      title: "Generate Documentation",
      description: "The system automatically generates compliant documentation tailored to your device.",
      icon: <Shield size={24} />
    },
    {
      number: 4,
      title: "Validate & Submit",
      description: "Review, make any final adjustments, and submit with confidence.",
      icon: <CheckCircle size={24} />
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Samdog Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our streamlined process makes regulatory compliance straightforward and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={step.number === activeStep}
              onClick={() => setActiveStep(step.number)}
            />
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See Samdog in Action
            </h3>
            <p className="text-gray-600 mb-6">
              Watch how our AI-powered platform simplifies regulatory compliance for medical device manufacturers.
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-500">Click to play demo video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;