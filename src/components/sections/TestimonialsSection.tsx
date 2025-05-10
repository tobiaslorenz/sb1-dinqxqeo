import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Samdog has revolutionized how we handle regulatory documentation. What used to take weeks now takes days, with greater accuracy and fewer revisions.",
      author: "Dr. Sarah Johnson",
      position: "Regulatory Affairs Director",
      company: "MedTech Innovations",
      rating: 5
    },
    {
      content: "The AI-powered analysis caught compliance issues that our team had missed for years. It's like having a regulatory expert working 24/7.",
      author: "Michael Chen",
      position: "Quality Assurance Manager",
      company: "Precision Medical Devices",
      rating: 5
    },
    {
      content: "We reduced our regulatory submission preparation time by 70% and had our 510(k) approved on the first submission. The ROI is incredible.",
      author: "Jennifer Morales",
      position: "CEO",
      company: "NeuroCare Solutions",
      rating: 5
    },
    {
      content: "Our auditors were impressed by the completeness and organization of our documentation. Samdog has given us confidence in our compliance process.",
      author: "Robert Williams",
      position: "VP of Compliance",
      company: "Global Health Systems",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Early Feedback from Beta Users
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            See what our beta users are saying about SamDoq's innovative approach to regulatory compliance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Beta Program Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Placeholder for client logos */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;