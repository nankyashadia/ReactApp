import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import IMAGES from '/../assets/images/image';

export const TestimonialPerson = ({ 
  name, 
  role, 
  isActive, 
  onClick, 
  profileImage 
}) => {
  const [imgSrc, setImgSrc] = useState(profileImage || IMAGES.defaultProfile);

  const handleImageError = () => {
    setImgSrc(IMAGES.defaultProfile);
  };

  return (
    <div 
      className={`flex items-center p-4 cursor-pointer transition-all ${
        isActive ? 'bg-pink-100 rounded-lg' : 'hover:bg-gray-50 rounded-lg'
      }`}
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md mr-3"
        onError={handleImageError}
        loading="lazy"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export const TestimonialReview = ({ review, ratings }) => (
  <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-center">
    <div className="flex mb-4 items-center">
      {Array(5).fill(0).map((_, i) => (
        <FaStar 
          key={i} 
          className={`text-xl ${
            i < Math.floor(ratings) ? 'text-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 font-semibold">{ratings?.toFixed(1)}</span>
    </div>
    <p className="text-gray-700 italic text-lg">"{review}"</p>
  </div>
);

export const Testimonials = ({ data = [], isLoading, error }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!data || data.length === 0) return <p className="text-center">No testimonials available</p>;

  const activeTestimonial = data[activeIndex] || {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-2">
        {data.map((testimonial, index) => (
          <TestimonialPerson
            key={index}
            name={testimonial.name || "Guest"}
            role={testimonial.role || "Traveler"}
            profileImage={testimonial.profileImage}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      
      <div className="lg:col-span-2">
        <TestimonialReview 
          review={activeTestimonial.review || "No review available"} 
          ratings={Number(activeTestimonial.ratings) || 5} 
        />
      </div>
    </div>
  );
};