import React, { useState } from 'react';
import NavBarLanding from "../components/NavBarLanding";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ username, handle, testimonial }) => {
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg bg-white shadow">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
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
            username: "Username1",
            handle: "@username1",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            username: "Username2",
            handle: "@username2",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            username: "Username3",
            handle: "@username3",
            testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
        },
        {
            username: "Username4",
            handle: "@username4",
            testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
        {
            username: "Username5",
            handle: "@username5",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },    
        {
            username: "Username6",
            handle: "@username6",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            username: "Username7",
            handle: "@username7",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
    ];

    const [index, setIndex] = useState(0);
    const itemsPerPage = window.innerWidth < 768 ? 1 : 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage));
    };

    const getPaginationIndex = () => {
        return Math.floor(index / itemsPerPage);
    };

    return (
        <div className="py-8 px-12 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold">TESTIMONIALS</h2>
                <div className="flex items-center">
                    <motion.button aria-label="Previous" onClick={handlePrev} whileTap={{ scale: 0.9 }} className="mr-2 focus:outline-none">
                        <span>&lt;</span>
                    </motion.button>
                    <motion.button aria-label="Next" onClick={handleNext} whileTap={{ scale: 0.9 }} className="focus:outline-none">
                        <span>&gt;</span>
                    </motion.button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.slice(index, index + itemsPerPage).map((testimonial, i) => (
                    <TestimonialCard key={i} {...testimonial} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                {[...Array(totalPages)].map((_, idx) => (
                    <input
                        key={idx}
                        type="radio"
                        id={`testimonialDot${idx}`}
                        name="testimonialDot"
                        className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${getPaginationIndex() === idx ? 'bg-current' : 'bg-white border border-black'}`}
                        checked={getPaginationIndex() === idx}
                        onChange={() => setIndex(idx * itemsPerPage)}
                    />
                ))}
            </div>
        </div>
    );
};



const SectionWithImage = ({ title, text, imageSrc, imageAlt, reverse }) => {
    return (
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-center bg-gray-900 text-white py-10 my-8 mx-auto max-w-6xl rounded-2xl shadow-lg`}>
        <div className="flex-1 px-6">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="flex-1 px-6">
          <img src={imageSrc} alt={imageAlt} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    );
  };
  
  const FeaturedNews = () => {
    const newsItems = [
        { title: "News Title 1", content: "Description of the first news item." },
        { title: "News Title 2", content: "Description of the second news item." },
        { title: "News Title 3", content: "Description of the third news item." },
        { title: "News Title 4", content: "Description of the fourth news item." },
        { title: "News Title 5", content: "Description of the fifth news item." },
        { title: "News Title 6", content: "Description of the sixth news item." },
        { title: "News Title 7", content: "Description of the seventh news item." },
        { title: "News Title 8", content: "Description of the eighth news item." },
        { title: "News Title 9", content: "Description of the ninth news item." },
        { title: "News Title 10", content: "Description of the tenth news item." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    };

    const calculateOffset = (index) => {
        return `calc(${index - currentIndex} * -300px)`;
    };

    return (
        <div style={{ height: '600px', margin: '50px 0', display: 'grid', gridTemplateRows: '50px 500px 100px', gridTemplateColumns: '1fr 30px 30px 30px 30px 30px 1fr', alignItems: 'center', justifyItems: 'center', position: 'relative' }}>
            <h2 className="text-4xl font-bold" style={{ gridColumn: '1 / 3', textAlign: 'center', position: 'absolute', top: '0' }}>FEATURED NEWS</h2>
            <button aria-label="Previous" onClick={handlePrev} style={{ gridColumn: '2', gridRow: '1', alignSelf: 'center', position: 'absolute', top: '0', marginLeft: '20px', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #000', backgroundColor: 'transparent', zIndex: '2' }} className="mr-5">&lt;</button>
            <button aria-label="Next" onClick={handleNext} style={{ gridColumn: '3', gridRow: '1', alignSelf: 'center', position: 'absolute', top: '0', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #000', backgroundColor: 'transparent', zIndex: '2', marginLeft: '40px' }}>&gt;</button>
            <main id="carousel" style={{ gridRow: '2 / 3', gridColumn: '1 / 8', width: '100vw', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', transformStyle: 'preserve-3d', perspective: '600px', pointerEvents: 'none' }}>
                {newsItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="item border-2 border-black bg-white bg-opacity-75"
                        style={{ position: 'absolute', width: '300px', height: '400px', transform: `rotateY(calc(-10deg * calc(${index} - ${currentIndex}))) translateX(${calculateOffset(index)})`, zIndex: `${(currentIndex - Math.abs(index - currentIndex))}`, transition: 'all 0.25s linear', borderRadius: '35px' }}
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-1/2 text-center">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </main>
            <div style={{ gridColumn: '2 / 7', gridRow: '3 / 4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {newsItems.map((_, index) => (
                    <input key={`radio${index}`} type="radio" id={`radio${index + 1}`} name="radio" style={{ marginRight: '5px' }} checked={currentIndex === index} onChange={() => setCurrentIndex(index)} />
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
  <div className="text-center mb-2">
    <h1 className="text-[10rem] font-bold font-rubik-one text-gray-900" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
      TELEO
    </h1>
    <h2 className="text-2xl uppercase mb-2" style={{ marginTop: '-2rem', marginBottom: '2.5rem' }}> {/* Adjusted marginTop */}
      Something na saying ng teleo here
    </h2>
  </div>
  <div className="text-center mb-4 px-4" style={{ marginTop: '-1.5rem' }}>
    <p className="text-gray-700" style={{ maxWidth: '32rem', margin: '0 auto', textAlign: 'justify' }}>
      {/*
        Set max-width and margin auto to center the text and limit its width
      */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <div className="text-center" style={{ marginTop: '2rem' }}> {/* Added marginTop */}
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
        imageSrc="/event.jpeg" // Replace with your image path
        imageAlt="Mission Image" 
        reverse={false}
      />
      <SectionWithImage 
        title="Our Vision" 
        text={visionText} 
        imageSrc="/event.jpeg" // Replace with your image path
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