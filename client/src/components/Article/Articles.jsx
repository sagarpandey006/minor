import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const mentalIllnesses = [
  {
    id: 1,
    title: 'Anxiety Disorder',
    description: 'A mental health disorder characterized by excessive worry and fear.',
    link: '/anxiety',
    image: 'https://www.calmclinic.com/storage/images/213/qoxihx/main/w1600.png' ,

  },
  {
    id: 2,
    title: 'Depression',
    description: 'A common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
    link: '/depression',
    image: 'https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg',
  },
  {
    id: 3,
    title: 'Obsessive-Compulsive Disorder',
    description: 'A common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts and/or behaviors that he or she feels the urge to repeat over and over.',
    link: '/ocd',
    image: 'https://superblog.supercdn.cloud/site_cuid_cl92i00jg261301kozfglx818f/images/obsessive-compulsive-disorder-ocd-1685709447808-compressed.jpg',
  },
  {
    id: 4,
    title: 'Panic Disorder',
    description: 'A sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.',
    link: '/panicdisorder',
    image: 'https://images.prismic.io/cerebral/42857718-d8da-4e17-8a20-b8d1fdd31158_Panic%20Attacks.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=3420&h=1897',
  },
  {
    id: 5,
    title: 'Bipolar Affective Disorder',
    description: 'A type of mood disorder, previously referred to as manic depression. A person with bipolar disorder experiences episodes of mania (elation) and depression.',
    link: '/bipolar-article',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcGLdRM1yXyiPCTN6KMDsypH7FHMnrlX1Lw&usqp=CAU',
  },
  {
    id: 6,
    title: 'Schizophrenia',
    description: 'A serious mental illness that affects how a person thinks, feels, and behaves.',
    link: '/schizophrenia',
    image: 'https://www.health.com/thmb/sMXUhpkvLq2h7VEBwdjnOH1vHIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg',
  },
  {
    id: 7,
    title: 'Post-traumatic Stress Disorder',
    description: 'A mental health condition that can develop in some people who have experienced a shocking, scary, or dangerous event.',
    link: '/ptsd',
    image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_7061_1662009165227664.jpg',
  },
  {
    id: 8,
    title: 'Psychosis',
    description: 'A loss of contact with reality that can include hallucinations and delusions.',
    link: '/psychosis',
     image: 'data:image/jpeg;base64,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',
  },
];

const MentalIllnessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mentalIllnesses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mentalIllnesses.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide(); // swipe left
    }
    
    if (touchStart - touchEnd < -50) {
      prevSlide(); // swipe right
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mental Health Resources</h2>
      
      <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
        {/* Main carousel area */}
        <div 
          className="h-full w-full flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {mentalIllnesses.map((illness) => (
            <div 
              key={illness.id} 
              className="min-w-full h-full flex flex-col relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              
              <img 
                src={illness.image} 
                alt={illness.title} 
                className="object-cover h-full w-full"
              />

              
              <div className="relative z-20 mt-auto p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{illness.title}</h3>
                <p className="mb-4 text-gray-100">{illness.description}</p>
                <Link 
                  to={illness.link} 
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center z-20 backdrop-blur-sm transition-colors duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center z-20 backdrop-blur-sm transition-colors duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {mentalIllnesses.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Alternative grid view */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">All Mental Health Topics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentalIllnesses.map((illness) => (
            <Link 
              to={illness.link}
              key={illness.id} 
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-40 bg-gray-200 relative">
              <img 
                   src={illness.image} 
                   alt={illness.title} 
                   className="object-cover h-full w-full"
              />

              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{illness.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{illness.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalIllnessCarousel;