import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  Shield, 
  FileText, 
  Clock, 
  BarChart3, 
  CheckCircle,
  Zap,
  Lock
} from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 opacity-0 translate-y-8"
    >
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="text-blue-600" />,
      title: "AI-Powered Documentation",
      description: "Our AI analyzes regulatory requirements and automatically generates compliant documentation tailored to your medical device.",
      delay: 100
    },
    {
      icon: <Shield className="text-blue-600" />,
      title: "Compliance Monitoring",
      description: "Real-time monitoring of regulatory changes with intelligent alerts to keep your documentation always up-to-date.",
      delay: 200
    },
    {
      icon: <FileText className="text-blue-600" />,
      title: "Document Management",
      description: "Centralized repository for all quality management documents with version control and approval workflows.",
      delay: 300
    },
    {
      icon: <Clock className="text-blue-600" />,
      title: "Time-Saving Automation",
      description: "Reduce documentation time by up to 75% with templates and automated form-filling based on your device specifications.",
      delay: 400
    },
    {
      icon: <BarChart3 className="text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track compliance status, documentation health, and potential regulatory risks.",
      delay: 500
    },
    {
      icon: <CheckCircle className="text-blue-600" />,
      title: "Audit Readiness",
      description: "Always be audit-ready with our pre-audit assessments and gap analysis tools powered by machine learning.",
      delay: 600
    },
    {
      icon: <Zap className="text-blue-600" />,
      title: "Accelerated Approvals",
      description: "Speed up regulatory approvals with perfectly formatted submissions that meet all requirements the first time.",
      delay: 700
    },
    {
      icon: <Lock className="text-blue-600" />,
      title: "Secure and Compliant",
      description: "Enterprise-grade security with role-based access controls and full audit trails for all document activities.",
      delay: 800
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Designed for Regulatory Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our AI-powered platform streamlines every aspect of medical device regulatory compliance, 
            saving you time and reducing the risk of non-compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;