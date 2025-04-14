import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../Utilities/Util';
import { FaBus, FaUtensils, FaHome, FaHiking, FaBriefcaseMedical, FaStar } from 'react-icons/fa';
import "./Eventssection.css";
import IMAGES from '../assets/images/image';
import VIDEOS from '../assets/videos/video';

const EventCard = ({ title, backgroundImage, showIcons }) => (
  <div className="event-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="overlay"></div>
    <div className="card-content">
      <h3 className="event-title"><em>{title}</em></h3>
      {showIcons && (
        <div className="icon-container" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <FaBus />
          <FaUtensils />
          <FaHome />
          <FaHiking />
          <FaBriefcaseMedical />
        </div>
      )}
    </div>
  </div>
);

const StyledEventCard = ({ title, backgroundImage }) => (
  <div className="relative rounded-lg shadow-lg border border-gray-300 overflow-hidden" style={{ width: '236px', height: '313px' }}>
    <div className="bg-cover bg-center h-60" style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className="absolute top-2 left-0 right-0 text-white text-lg font-bold uppercase text-center">{title}</div>
    <div className="bg-white py-2 text-center border-t">
      <h3 className="text-md font-semibold">{title}</h3>
    </div>
  </div>
);

const ExperienceCard = ({ videoUrl }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer" style={{ width: '347px', height: '368px', marginRight: '20px' }}>
    <iframe
      className="w-full h-full"
      src={videoUrl.replace("watch?v=", "embed/")}
      title="Experience Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const TestimonialCard = ({ name, role, ratings, profileImage, review }) => {
  const [imgSrc, setImgSrc] = useState(profileImage);

  const handleImageError = () => {
    setImgSrc(IMAGES.defaultProfile);
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`star ${i < Math.floor(ratings) ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <img 
          src={imgSrc} 
          alt={name} 
          className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md mb-3"
          onError={handleImageError}
          loading="lazy"
        />
        <h4 className="text-xl font-semibold text-center">{name}</h4>
        {role && <p className="text-gray-500 text-sm text-center">{role}</p>}
        <div className="flex items-center my-2">
          <span className="text-yellow-500 font-bold mr-1">{ratings?.toFixed(1)}</span>
          <div className="flex">
            {renderStars()}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-center mt-3 italic">"{review}"</p>
    </div>
  );
};

const EventsSection = () => {
  const [highlightedEvents, setHighlightedEvents] = useState([]);
  const [summerEvents, setSummerEvents] = useState([]);
  const [snowTreks, setSnowTreks] = useState([]);
  const [epicAdventures, setEpicAdventures] = useState([]);
  const [specialEvents, setSpecialEvents] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState({
    highlighted: true,
    summer: true,
    snow: true,
    epic: true,
    special: true,
    testimonials: true
  });
  

  useEffect(() => {
    const fetchEvents = async () => {
      const fetcher = async (endpoint, setter, fallbackData = []) => {
        try {
          const response = await axios.get(endpoint);
          const data = Array.isArray(response.data) ? response.data : [];
          setter(data.map(event => ({
            title: event.heading || event.title,
            backgroundImage: event.bannerImages1 || event.image || IMAGES.defaultEventImage
          })));
        } catch (err) {
          console.error(`Error fetching ${endpoint}:`, err);
          setter(fallbackData);
        }
      };

      await Promise.all([
        fetcher(ENDPOINTS.HIGHLIGHTED_EVENTS, setHighlightedEvents, [
          { title: 'Featured Trek', backgroundImage: IMAGES.KirimanjaloTrek },
          { title: 'Wildlife Safari', backgroundImage: IMAGES.kruger }
        ]),
        fetcher(ENDPOINTS.SUMMER_EVENTS, setSummerEvents, [
          { title: 'Kruger Park', backgroundImage: IMAGES.kruger },
          { title: 'Western Cape', backgroundImage: IMAGES.WesternCape },
          { title: 'Addo Park', backgroundImage: IMAGES.Ado },
          { title: 'Masai Mara', backgroundImage: IMAGES.masai }
        ]),
        fetcher(ENDPOINTS.SNOW_TREKS, setSnowTreks, [
          { title: 'Kilimanjaro', backgroundImage: IMAGES.KirimanjaloTrek },
          { title: 'Mount Kenya', backgroundImage: IMAGES.MountainKenya },
          { title: 'Rwenzori', backgroundImage: IMAGES.rwenzori },
          { title: 'Atlas', backgroundImage: IMAGES.Atlas }
        ]),
        fetcher(ENDPOINTS.EPIC_ADVENTURES, setEpicAdventures, [
          { title: 'Kilimanjaro Trek', backgroundImage: IMAGES.KirimanjaloTrek },
          { title: 'Hwange Park', backgroundImage: IMAGES.HwangerPark },
          { title: 'Botswana', backgroundImage: IMAGES.Botswana }
        ]),
        fetcher(ENDPOINTS.SPECIAL_EVENTS, setSpecialEvents, [
          { title: 'Hunting', backgroundImage: IMAGES.Hunting },
          { title: 'Training Camp', backgroundImage: IMAGES.Trainingcump }
        ]),
        (async () => {
          try {
            const response = await axios.get(ENDPOINTS.TESTIMONIALS);
            // Properly map the testimonial data to match the component props
            setTestimonials(response.data.map(testimonial => ({
              name: testimonial.name,
              role: testimonial.role,
              ratings: testimonial.ratings,
              profileImage: testimonial.profileImage,
              review: testimonial.review
            })));
          } catch (err) {
            console.error("Error fetching testimonials:", err);
            // Fallback testimonials with proper structure
            setTestimonials([
              {
                name: "Sarah Johnson",
                role: "Adventurer",
                ratings: 4.8,
                profileImage: IMAGES.defaultProfile,
                review: "Amazing experience with the team!"
              },
              {
                name: "Michael Brown",
                role: "Traveler",
                ratings: 4.5,
                profileImage: IMAGES.defaultProfile,
                review: "The trip was well organized and fun!"
              }
            ]);
          } finally {
            setIsLoading(prev => ({ ...prev, testimonials: false }));
          }
        })()
      ]);

      setIsLoading(prev => ({
        ...prev,
        highlighted: false,
        summer: false,
        snow: false,
        epic: false,
        special: false
      }));
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container p-4">
      {/* Highlighted Events */}
      <div className="section mb-10">
        <h6 className="text-lg font-semibold mb-2">Highlighted Events</h6>
        <p className="text-gray-600 mb-4">Recommended camps by our Instructors</p>

        {error && <p className="text-red-500">{error}</p>}

        {isLoading.highlighted ? (
          <p>Loading highlighted events...</p>
        ) : (
          <div className="cards-container">
            {highlightedEvents.map((event, index) => (
              <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} showIcons={true} />
            ))}
          </div>
        )}
      </div>

      {/* Snow Treks */}
      <div className="section snow-treks-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Snow Treks</h2>
        <p className="text-gray-600 mb-4">Experience the magic of winter landscapes with our guided snow treks</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {snowTreks.map((trek, index) => (
            <StyledEventCard key={index} title={trek.title} backgroundImage={trek.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Summer Events */}
      <div className="section summer-events-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Summer Events</h2>
        <p className="text-gray-600 mb-4">Join our exciting range of summer activities</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {summerEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Epic Adventures */}
      <div className="section epic-adventures-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Epic Adventures</h2>
        <p className="text-gray-600 mb-4">Push your limits with our most thrilling outdoor challenges</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {epicAdventures.map((adventure, index) => (
            <StyledEventCard key={index} title={adventure.title} backgroundImage={adventure.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Special Events */}
      <div className="section special-events-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Special Events</h2>
        <p className="text-gray-600 mb-4">Join us for unique, limited-time gatherings that celebrate remarkable occasions</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {specialEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Experience Yourself Section */}
      <section className="experience-yourself-section p-6 rounded-xl shadow-lg mt-10 mb-10 bg-pink-100">
        <div className="mb-8 text-left">
          <h3 className="text-lg text-gray-700 font-semibold">Experience yourself</h3>
          <h2 className="text-2xl font-bold">Exclusive footage from our camps</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=QgwWRQWTLpM" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=prTzU3yrGcw" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=ezUpLsgXbeg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section p-6 rounded-xl shadow-lg bg-white mt-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">What People Are Saying</h2>
          <p className="text-gray-600 mt-2">Real testimonials from our happy adventurers</p>
        </div>
        {isLoading.testimonials ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                ratings={testimonial.ratings}
                profileImage={testimonial.profileImage}
                review={testimonial.review}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsSection;