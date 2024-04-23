import React from 'react';
import NavBarLanding from "../components/NavBarLanding";
import Footer from "../components/Footer";

const TestimonialCard = ({ username, handle, testimonial }) => {
    return (
      <div className="flex flex-col items-center p-4 border rounded-lg bg-white shadow">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
          {/* Placeholder for avatar */}
          <span className="text-2xl">👤</span>
        </div>
        <h3 className="text-lg font-bold">{username}</h3>
        <p className="text-sm text-gray-500">{handle}</p>
        <p className="text-gray-700 mt-2 text-center">{testimonial}</p>
      </div>
    );
  };
  
  const Testimonials = () => {
    const testimonials = [
      {
        username: "Username",
        handle: "@username",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      // ... more testimonials
    ];
  
    return (
      <div className="py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">TESTIMONIALS</h2>
          <div>
            <button aria-label="Previous" className="mr-2">
              <span>&lt;</span>
            </button>
            <button aria-label="Next">
              <span>&gt;</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          {/* Pagination dots */}
          {[...Array(testimonials.length)].map((_, index) => (
            <span key={index} className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
          ))}
        </div>
      </div>
    );
  };
  
const SectionWithImage = ({ title, text, imageSrc, imageAlt, reverse }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between bg-gray-900 text-white p-8 my-4 rounded-lg`}>
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="flex-1">
        <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

const FeaturedNews = () => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">FEATURED NEWS</h2>
        <div>
          <button aria-label="Previous" className="mr-2">
            <span>&lt;</span>
          </button>
          <button aria-label="Next">
            <span>&gt;</span>
          </button>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="min-w-[300px] h-[400px] border-2 border-gray-300 rounded-lg"></div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        {[...Array(3)].map((_, index) => (
          <span key={index} className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const missionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
  const visionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";

  return (
    <>
      <NavBarLanding />

      <div className="bg-white p-8">
        <div className="text-center mb-4">
          <h1 className="text-6xl font-rubik-one">TELEO</h1>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl uppercase">Something na saying ng teleo here</h2>
        </div>
        <div className="text-center mb-8 px-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div className="text-center">
          <button className="bg-black text-white uppercase px-8 py-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Join us in lorem ipsum
          </button>
        </div>
      </div>

      <FeaturedNews />
      
      <SectionWithImage 
        title="Our Mission" 
        text={missionText} 
        imageSrc="/path-to-mission-image.jpg" // Replace with your image path
        imageAlt="Mission Image" 
        reverse={false}
      />

      <SectionWithImage 
        title="Our Vision" 
        text={visionText} 
        imageSrc="/path-to-vision-image.jpg" // Replace with your image path
        imageAlt="Vision Image" 
        reverse={true}
      />

    <Testimonials />

      <Footer />
    </>
  );
};

export default LandingPage;
