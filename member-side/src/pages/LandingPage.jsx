import React, { useState } from 'react';
import NavBarLanding from "../components/NavBarLanding";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="py-8 px-12"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold ml-4">TESTIMONIALS</h2>
        <div>
          <button aria-label="Previous" className="mr-2">
            <span>&lt;</span>
          </button>
          <button aria-label="Next">
            <span>&gt;</span>
          </button>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={item}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
      <div className="flex justify-center items-center mt-4">
        {/* Pagination dots */}
        {[...Array(testimonials.length)].map((_, index) => (
          <span key={index} className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
        ))}
      </div>
    </motion.div>
  );
};

const SectionWithImage = ({ title, text, imageSrc, imageAlt, reverse }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between bg-gray-900 text-white p-10 my-8 w-5rounded-lg`}>
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
  const newsItems = [
    { title: "News Title 1", content: "Description of the first news item." },
    { title: "News Title 2", content: "Description of the second news item." },
    {title: "News Title 3", content: "Description of the third news item." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : newsItems.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < newsItems.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="py-8 px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">FEATURED NEWS</h2>
        <div>
          <button aria-label="Previous" onClick={handlePrev} className="mr-5">
            <span>&lt;</span>
          </button>
          <button aria-label="Next" onClick={handleNext}>
            <span>&gt;</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="min-w-[300px] h-[400px] border-2 border-gray-300 rounded-lg p-4">
          <h3 className="font-bold text-lg">{newsItems[currentIndex].title}</h3>
          <p>{newsItems[currentIndex].content}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        {newsItems.map((_, index) => (
          <span key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}></span>
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
            <h1 className="text-[10rem] font-bold font-rubik-one text-gray-900" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', letterSpacing: '0.1em' }}>TELEO</h1>
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
            <a href="/" className="border-2 border-black text-black uppercase px-8 py-2 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Join us in TELEO!
            </a>
        </div>
      </div>
      <hr className="w-9/12 h-0.5 mx-auto my-6 bg-gray-700 rounded md:my-2 dark:bg-gray-700" />
      <FeaturedNews />
      <hr className="w-9/12 h-0.5 mx-auto my-6 bg-gray-700 rounded md:my-2 dark:bg-gray-700" />
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
        <hr className="w-9/12 h-0.5 mx-auto my-6 bg-gray-700 rounded md:my-2 dark:bg-gray-700" />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;