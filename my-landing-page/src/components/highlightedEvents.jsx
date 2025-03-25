import React, { useState } from 'react';
import { FaBus, FaUtensils, FaHome, FaHiking, FaBriefcaseMedical } from 'react-icons/fa';
import './EventsSection.css';
import IMAGES from '../assets/images/image'; // Import images from image.jsx
import VIDEOS from '../assets/videos/video'; // Import videos from video.jsx

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
  <div
    className="relative rounded-lg shadow-lg border border-gray-300 overflow-hidden"
    style={{ width: '236px', height: '313px' }}
  >
    <div
      className="bg-cover bg-center h-60"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute top-2 left-0 right-0 text-white text-lg font-bold uppercase text-center">
      {title}
    </div>
    <div className="bg-white py-2 text-center border-t">
      <h3 className="text-md font-semibold">{title}</h3>
    </div>
  </div>
);

const ExperienceCard = ({ videoUrl }) => (
  <div 
    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
    style={{ width: '347px', height: '368px', marginRight: '20px' }}
  >
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

const WhyPeopleLoveInvincible = () => (
  <section className="why-people-love-section p-6 rounded-xl shadow-lg mt-10" style={{ backgroundColor: '#F0F0F0' }}>
    <div className="mb-8 text-left">
      <h3 className="text-lg text-gray-700 font-semibold">Why people ❤️ Invincible</h3>
      <h2 className="text-2xl font-bold">Discover what makes us special</h2>
    </div>
    <div className="flex justify-start gap-6">
      <div 
        className="relative rounded-lg shadow-lg border border-gray-300 overflow-hidden"
        style={{ width: '547px', height: '429px' }}
      >
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${IMAGES.Card1})` }}
        />
        <div className="absolute top-2 left-0 right-0 text-white text-lg font-bold uppercase text-center">
          Card 1 Title
        </div>
        <div className="bg-white py-2 text-center border-t">
          <h3 className="text-md font-semibold">Card 1 Description</h3>
        </div>
      </div>
      <div 
        className="relative rounded-lg shadow-lg border border-gray-300 overflow-hidden"
        style={{ width: '569px', height: '358px' }}
      >
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${IMAGES.Card2})` }}
        />
        <div className="absolute top-2 left-0 right-0 text-white text-lg font-bold uppercase text-center">
          Card 2 Title
        </div>
        <div className="bg-white py-2 text-center border-t">
          <h3 className="text-md font-semibold">Card 2 Description</h3>
        </div>
      </div>
    </div>
  </section>
);

const EventsSection = ({ highlightedEvents }) => {
  const [snowTreks] = useState([
    { title: 'Kilimanjaro', backgroundImage: IMAGES.KirimanjaloTrek },
    { title: 'Mount Kenya', backgroundImage: IMAGES.MountainKenya },
    { title: 'Rwenzori', backgroundImage: IMAGES.rwenzori },
    { title: 'Atlas', backgroundImage: IMAGES.Atlas },
  ]);

  const [summerEvents] = useState([
    { title: 'Kruger Park', backgroundImage: IMAGES.kruger },
    { title: 'Western Cape', backgroundImage: IMAGES.WesternCape },
    { title: 'Addo Park', backgroundImage: IMAGES.Ado },
    { title: 'Masai Mara', backgroundImage: IMAGES.masai }
  ]);

  const [epicAdventures] = useState([
    { title: 'Kilimanjaro Trek', backgroundImage: IMAGES.KirimanjaloTrek },
    { title: 'Hwange Park', backgroundImage: IMAGES.HwangerPark },
    { title: 'Botswana', backgroundImage: IMAGES.Botswana }
  ]);

  const [specialEvents] = useState([
    { title: 'Hunting', backgroundImage: IMAGES.Hunting },
    { title: 'Training Camp', backgroundImage: IMAGES.Trainingcump }
  ]);

  return (
    <div className="events-container">
      {/* Highlighted Events */}
      <div className="section">
        <h6>Highlighted Events</h6>
        <p>Recommended camps by our Instructors</p>
        <div className="cards-container">
          {highlightedEvents.map((event, index) => (
            <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} showIcons={true} />
          ))}
        </div>
      </div>

      {/* Snow Treks */}
      <div className="section snow-treks-section">
        <h2>Snow Treks</h2>
        <p>Experience the magic of winter landscapes with our guided snow treks</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {snowTreks.map((trek, index) => (
            <StyledEventCard key={index} title={trek.title} backgroundImage={trek.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Summer Events */}
      <div className="section summer-events-section">
        <h2>Summer Events</h2>
        <p>Join our exciting range of summer activities</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {summerEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Epic Adventures */}
      <div className="section epic-adventures-section">
        <h2>Epic Adventures</h2>
        <p>Push your limits with our most thrilling outdoor challenges</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {epicAdventures.map((adventure, index) => (
            <StyledEventCard key={index} title={adventure.title} backgroundImage={adventure.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Special Events */}
      <div className="section special-events-section">
        <h2>Special Events</h2>
        <p>Join us for unique, limited-time gatherings that celebrate remarkable occasions</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {specialEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

      {/* Experience Yourself Section */}
      <section 
        className="experience-yourself-section p-6 rounded-xl shadow-lg mt-10"
        style={{ backgroundColor: '#E8D0D0' }}
      >
        <div className="mb-8 text-left">
          <h3 className="text-lg text-gray-700 font-semibold">Experience yourself</h3>
          <h2 className="text-2xl font-bold">Exclusive footage from our camps</h2>
        </div>
        <div className="flex justify-start gap-6">
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=QgwWRQWTLpM" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=prTzU3yrGcw" />
          <ExperienceCard videoUrl="https://www.youtube.com/watch?v=ezUpLsgXbeg" />
        </div>
      </section>

      {/* Why People Love Invincible Section */}
      <WhyPeopleLoveInvincible />
    </div>
  );
};

export default EventsSection;