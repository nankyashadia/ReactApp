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

const EventsSection = () => {
  const [highlightedEvents, setHighlightedEvents] = useState([]);
  const [summerEvents, setSummerEvents] = useState([]);
  const [snowTreks, setSnowTreks] = useState([]);
  const [epicAdventures, setEpicAdventures] = useState([]);
  const [specialEvents, setSpecialEvents] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState({
    highlighted: true,
    summer: true,
    snow: true,
    epic: true,
    special: true,
    testimonials: true
  });

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={`inline ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

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
            setTestimonials(response.data || [
              {
                name: "Alice Johnson",
                role: "Traveler",
                ratings: 4.9,
                profileImage: "https://i.postimg.cc/TPyq5Rjr/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.avif",
                review: "An absolutely fantastic experience! The coordination was seamless, and the support team was always available to assist. Highly recommended!"
              },
              {
                name: "Mark Williamson",
                role: "Adventure Enthusiast",
                ratings: 4.7,
                profileImage: "https://i.postimg.cc/26G6zWqT/people-smiling-men-handsome-cheerful-1187-6057.jpg",
                review: "From start to finish, the trip was well-organized. The itinerary was perfect, and the support team ensured everything went smoothly."
              },
              {
                name: "Sophia Lee",
                role: "Solo Traveler",
                ratings: 4.8,
                profileImage: "https://i.postimg.cc/ydyJk5Gm/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop-23-2148029483.jpg",
                review: "Traveling alone can be daunting, but the excellent coordination and 24/7 support made me feel safe and comfortable. A wonderful experience!"
              },
              {
                name: "Daniel Brown",
                role: "Family Vacationer",
                ratings: 4.6,
                profileImage: "https://i.postimg.cc/Y9M0KRSh/serious-man-isolated-orange-background-confident-person-looking-camera-482257-25138.jpg",
                review: "Our family trip was well-planned, and the travel coordinators were extremely helpful. Great customer support and hassle-free travel experience!"
              },
              {
                name: "Emma Wilson",
                role: "Business Traveler",
                ratings: 4.9,
                profileImage: "https://i.postimg.cc/PrxL5SQD/how-may-i-assist-you-smiling-friendly-woman-standing-pleasant-formal-pose-keeping-emotions-together.jpgg",
                review: "Everything was meticulously arranged, from airport transfers to accommodations. The support team was always just a call away. Highly professional service!"
              }
            ]);
          } catch (err) {
            console.error("Error fetching testimonials:", err);
            setError("Failed to load testimonials. Showing sample data instead.");
            setTestimonials([
              {
                name: "Alice Johnson",
                role: "Traveler",
                ratings: 4.9,
                profileImage: "https://i.postimg.cc/TPyq5Rjr/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.avif",
                review: "An absolutely fantastic experience! The coordination was seamless, and the support team was always available to assist. Highly recommended!"
              },
              {
                name: "Mark Williamson",
                role: "Adventure Enthusiast",
                ratings: 4.7,
                profileImage: "https://i.postimg.cc/26G6zWqT/people-smiling-men-handsome-cheerful-1187-6057.jpg",
                review: "From start to finish, the trip was well-organized. The itinerary was perfect, and the support team ensured everything went smoothly."
              },
              {
                name: "Sophia Lee",
                role: "Solo Traveler",
                ratings: 4.8,
                profileImage: "https://i.postimg.cc/ydyJk5Gm/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop-23-2148029483.jpg",
                review: "Traveling alone can be daunting, but the excellent coordination and 24/7 support made me feel safe and comfortable. A wonderful experience!"
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
      <div className="section mb-10 relative">
        <h6 className="text-lg font-semibold mb-2">Highlighted Events</h6>
        <p className="text-gray-600 mb-4">Recommended camps by our Instructors</p>

        {error && <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>}

        <div className="relative">
          <button
            onClick={() => {
              const container = document.querySelector('.highlighted-events-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.highlighted-events-container');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            &gt;
          </button>
          {isLoading.highlighted ? (
            <p>Loading highlighted events...</p>
          ) : (
            <div
              className="highlighted-events-container cards-container flex overflow-x-auto scrollbar-hide space-x-4 py-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {highlightedEvents.map((event, index) => (
                <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} showIcons={true} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Snow Treks */}
      <div className="section snow-treks-section mb-10 relative">
        <h2 className="text-2xl font-bold mb-2">Snow Treks</h2>
        <p className="text-gray-600 mb-4">Experience the magic of winter landscapes with our guided snow treks</p>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.querySelector('.snow-treks-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.snow-treks-container');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            &gt;
          </button>
          <div
            className="snow-treks-container flex overflow-x-auto scrollbar-hide space-x-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {snowTreks.map((trek, index) => (
              <div key={index} className="flex-shrink-0">
                <StyledEventCard title={trek.title} backgroundImage={trek.backgroundImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summer Events */}
      <div className="section summer-events-section mb-10 relative">
        <h2 className="text-2xl font-bold mb-2">Summer Events</h2>
        <p className="text-gray-600 mb-4">Join our exciting range of summer activities</p>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.querySelector('.summer-events-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.summer-events-container');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            &gt;
          </button>
          <div
            className="summer-events-container flex overflow-x-auto scrollbar-hide space-x-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {summerEvents.map((event, index) => (
              <div key={index} className="flex-shrink-0">
                <StyledEventCard title={event.title} backgroundImage={event.backgroundImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Epic Adventures */}
      <div className="section epic-adventures-section mb-10 relative">
        <h2 className="text-2xl font-bold mb-2">Epic Adventures</h2>
        <p className="text-gray-600 mb-4">Push your limits with our most thrilling outdoor challenges</p>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.querySelector('.epic-adventures-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.epic-adventures-container');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            &gt;
          </button>
          <div
            className="epic-adventures-container flex overflow-x-auto scrollbar-hide space-x-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {epicAdventures.map((adventure, index) => (
              <div key={index} className="flex-shrink-0">
                <StyledEventCard title={adventure.title} backgroundImage={adventure.backgroundImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Events */}
      <div className="section special-events-section mb-10 relative">
        <h2 className="text-2xl font-bold mb-2">Special Events</h2>
        <p className="text-gray-600 mb-4">Join us for unique, limited-time gatherings that celebrate remarkable occasions</p>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.querySelector('.special-events-container');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.special-events-container');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            &gt;
          </button>
          <div
            className="special-events-container flex overflow-x-auto scrollbar-hide space-x-6 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {specialEvents.map((event, index) => (
              <div key={index} className="flex-shrink-0">
                <StyledEventCard title={event.title} backgroundImage={event.backgroundImage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="experience-yourself-section p-6 rounded-xl shadow-lg mt-10 mb-10 bg-pink-100">
        <div className="mb-8 text-left">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg text-gray-700 font-semibold">Experience yourself</h3>
              <h2 className="text-2xl font-bold">Exclusive footage from our camps</h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  const container = document.querySelector('.experience-videos-container');
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Scroll left"
              >
                &lt;
              </button>
              <button
                onClick={() => {
                  const container = document.querySelector('.experience-videos-container');
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Scroll right"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div 
          className="experience-videos-container flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=QgwWRQWTLpM" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=prTzU3yrGcw" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=ezUpLsgXbeg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section p-6 mt-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Experience the best with us</h1>
        </div>

        {isLoading.testimonials ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Images and Names on Left */}
            <div className="w-full md:w-1/3">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`mb-6 cursor-pointer flex items-center gap-4 ${activeTestimonial === index ? 'font-semibold' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    onError={(e) => {
                      e.target.src = IMAGES.defaultProfile;
                    }}
                  />
                  <div>
                    <h2 className="text-xl font-bold">{testimonial.name}</h2>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l border-gray-200"></div>

            {/* Content on Right with Stars */}
            <div className="w-full md:w-2/3">
              {testimonials.length > 0 && (
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(testimonials[activeTestimonial].ratings)}
                    </div>
                    <span className="text-yellow-500 font-bold">
                      {testimonials[activeTestimonial].ratings?.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    "{testimonials[activeTestimonial].review}"
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsSection;