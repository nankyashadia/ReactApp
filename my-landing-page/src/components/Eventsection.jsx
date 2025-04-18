import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../Utilities/Util';
import { FaBus, FaUtensils, FaHome, FaHiking, FaBriefcaseMedical, FaStar } from 'react-icons/fa';
import "./Eventssection.css";
import IMAGES from '../assets/images/image';

const EventCard = ({ title, backgroundImage, showIcons }) => (
  <div className="event-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="overlay"></div>
    <div className="card-content">
      <h3 className="event-title"><em>{title}</em></h3>
      {showIcons && (
        <div className="icon-container">
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

const EventsSection = () => {
  const [eventsData, setEventsData] = useState({
    highlighted: [],
    summer: [],
    snow: [],
    epic: [],
    special: [],
    testimonials: []
  });
  const [loading, setLoading] = useState({
    highlighted: true,
    summer: true,
    snow: true,
    epic: true,
    special: true,
    testimonials: true
  });
  const [error, setError] = useState(null);

  // Refs for scrollable sections
  const highlightedRef = useRef(null);
  const summerRef = useRef(null);
  const snowRef = useRef(null);
  const epicRef = useRef(null);
  const specialRef = useRef(null);

  // Scroll functions
  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 300, behavior: 'smooth' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel
        const responses = await Promise.all([
          axios.get(ENDPOINTS.HIGHLIGHTED_EVENTS),
          axios.get(ENDPOINTS.SUMMER_EVENTS),
          axios.get(ENDPOINTS.SNOW_TREKS),
          axios.get(ENDPOINTS.EPIC_ADVENTURES),
          axios.get(ENDPOINTS.SPECIAL_EVENTS),
          axios.get(ENDPOINTS.TESTIMONIALS)
        ]);

        // Process responses
        setEventsData({
          highlighted: processEventData(responses[0].data),
          summer: processEventData(responses[1].data),
          snow: processEventData(responses[2].data),
          epic: processEventData(responses[3].data),
          special: processEventData(responses[4].data),
          testimonials: processTestimonialData(responses[5].data)
        });

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        // Set fallback data
        setEventsData({
          highlighted: [{ title: 'Featured Trek', backgroundImage: IMAGES.KirimanjaloTrek }],
          summer: [{ title: 'Summer Adventure', backgroundImage: IMAGES.kruger }],
          snow: [{ title: 'Snow Trek', backgroundImage: IMAGES.MountainKenya }],
          epic: [{ title: 'Epic Journey', backgroundImage: IMAGES.HwangerPark }],
          special: [{ title: 'Special Event', backgroundImage: IMAGES.Hunting }],
          testimonials: [{
            name: "Guest User",
            role: "Adventurer",
            ratings: 4.5,
            profileImage: IMAGES.defaultProfile,
            review: "Great experience overall!"
          }]
        });
      } finally {
        setLoading({
          highlighted: false,
          summer: false,
          snow: false,
          epic: false,
          special: false,
          testimonials: false
        });
      }
    };

    const processEventData = (data) => {
      return Array.isArray(data) ? data.map(event => ({
        title: event.heading || event.title || 'Event',
        backgroundImage: event.bannerImages1 || event.image || IMAGES.defaultEventImage
      })) : [];
    };

    const processTestimonialData = (data) => {
      return Array.isArray(data) ? data.map(t => ({
        name: t.name || 'Anonymous',
        role: t.role || 'Traveler',
        ratings: t.ratings || 5,
        profileImage: t.profileImage || IMAGES.defaultProfile,
        review: t.review || 'Great experience!'
      })) : [];
    };

    fetchData();
  }, []);

  return (
    <div className="events-container">
      {/* Highlighted Events Section */}
      <div className="section">
        <h2>Highlighted Events</h2>
        <p>Recommended by our team</p>
        <div className="relative">
          <button onClick={() => scrollLeft(highlightedRef)} className="scroll-button left">&lt;</button>
          <div ref={highlightedRef} className="cards-container scrollbar-hide">
            {loading.highlighted ? (
              <div>Loading...</div>
            ) : (
              eventsData.highlighted.map((event, index) => (
                <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} showIcons={true} />
              ))
            )}
          </div>
          <button onClick={() => scrollRight(highlightedRef)} className="scroll-button right">&gt;</button>
        </div>
      </div>

      {/* Other Sections with similar pattern */}
      <div className="section">
        <h2>Summer Events</h2>
        <div className="relative">
          <button onClick={() => scrollLeft(summerRef)} className="scroll-button left">&lt;</button>
          <div ref={summerRef} className="cards-container scrollbar-hide">
            {eventsData.summer.map((event, index) => (
              <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
            ))}
          </div>
          <button onClick={() => scrollRight(summerRef)} className="scroll-button right">&gt;</button>
        </div>
      </div>

      {/* Add similar sections for Snow Treks, Epic Adventures, Special Events */}

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        {loading.testimonials ? (
          <div>Loading testimonials...</div>
        ) : (
          <div className="testimonials-grid">
            {eventsData.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonial.profileImage} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.ratings ? 'filled' : ''} />
                  ))}
                </div>
                <p className="review">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsSection;