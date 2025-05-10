import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const transform = `translateY(${scrollPosition * 0.3}px)`;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0tMjAgMEMxNiAzNS4xIDE1LjEgMzYgMTQgMzZzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem00MCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTYwIDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0yMC0yMEMxNiAxNS4xIDE1LjEgMTYgMTQgMTZzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0yMCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMjAgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTAgMTZjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0yMC0yMEMxNiAtMy45IDE1LjEtMyAxNCAtM3MtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTIwIDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0yMCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnpNMCAtNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div ref={heroRef} className="max-w-3xl transition-all duration-300">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The Future of Medical Device Regulatory Compliance
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Join our closed beta and be among the first to experience our AI-powered quality management system for streamlined regulatory compliance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-white text-blue-800 font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center">
              Join Beta Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;