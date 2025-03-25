import React, { useState } from 'react';
import { FaBus, FaUtensils, FaHome, FaHiking, FaBriefcaseMedical } from 'react-icons/fa';
import './EventsSection.css';
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

const WhyPeopleLoveInvincible = ({ profileImages }) => {
  const testimonials = {
    milton: {
      name: "Milton Austin",
      role: "Sales Manager, ABC",
      message:
        "This trekking organization is excellent. Their costs are minimal due to their NGO's non-profit efforts. The best part is the food they provide during the trek.",
    },
    annie: {
      name: "Annie",
      role: "Head of Sales, ABC",
      message:
        "I had an amazing experience! The trek was well-organized, and the guides were extremely helpful. I highly recommend this adventure to everyone.",
    },
    sandra: {
      name: "Sandra",
      role: "Head of Sales, ABC",
      message:
        "An unforgettable experience! The support team ensured we had everything we needed. The entire trek was breathtaking, and I can't wait to do it again!",
    },
  };

  const [selectedPerson, setSelectedPerson] = useState("milton");

  return (
    <section className="why-people-love-section p-10 bg-gray-50 rounded-xl shadow-lg mt-10">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Why people ❤️ Invincible
        </h1>
        <h2 className="text-xl font-normal text-gray-600">
          Experience the best with us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image Section */}
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ width: "547px", height: "429px" }}
        >
          <div className="space-y-8 h-full flex flex-col justify-center bg-[#EEE6E6]">
            {Object.keys(testimonials).map((key) => (
              <div
                key={key}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedPerson(key)}
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden border-2 border-transparent hover:border-blue-500 transition">
                  <img
                    src={profileImages[key]}
                    alt={testimonials[key].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className={`font-bold text-gray-800 text-xl ${
                      selectedPerson === key ? "text-blue-500" : ""
                    }`}
                  >
                    {testimonials[key].name}
                  </h3>
                  <p className="text-md text-gray-500">
                    {testimonials[key].role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Display Section */}
        <div className="flex flex-col">
          <div className="flex mb-4 ml-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl text-yellow-400">★</span>
            ))}
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            style={{ width: "569px", height: "358px" }}
          >
            <p className="text-gray-700 leading-relaxed text-lg h-full flex items-center">
              {testimonials[selectedPerson].message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


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

  const profileImages = {
    milton: IMAGES.Milton,
    annie: IMAGES.Annie,
    sandra: IMAGES.Sandra
  };

  return (
    <div className="events-container p-4">
      <div className="section mb-10">
        <h6 className="text-lg font-semibold mb-2">Highlighted Events</h6>
        <p className="text-gray-600 mb-4">Recommended camps by our Instructors</p>
        <div className="cards-container">
          {highlightedEvents.map((event, index) => (
            <EventCard key={index} title={event.title} backgroundImage={event.backgroundImage} showIcons={true} />
          ))}
        </div>
      </div>

      <div className="section snow-treks-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Snow Treks</h2>
        <p className="text-gray-600 mb-4">Experience the magic of winter landscapes with our guided snow treks</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {snowTreks.map((trek, index) => (
            <StyledEventCard key={index} title={trek.title} backgroundImage={trek.backgroundImage} />
          ))}
        </div>
      </div>

      <div className="section summer-events-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Summer Events</h2>
        <p className="text-gray-600 mb-4">Join our exciting range of summer activities</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {summerEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

      <div className="section epic-adventures-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Epic Adventures</h2>
        <p className="text-gray-600 mb-4">Push your limits with our most thrilling outdoor challenges</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {epicAdventures.map((adventure, index) => (
            <StyledEventCard key={index} title={adventure.title} backgroundImage={adventure.backgroundImage} />
          ))}
        </div>
      </div>

      <div className="section special-events-section mb-10">
        <h2 className="text-2xl font-bold mb-2">Special Events</h2>
        <p className="text-gray-600 mb-4">Join us for unique, limited-time gatherings that celebrate remarkable occasions</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {specialEvents.map((event, index) => (
            <StyledEventCard key={index} title={event.title} backgroundImage={event.backgroundImage} />
          ))}
        </div>
      </div>

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

      <WhyPeopleLoveInvincible profileImages={profileImages} />
    </div>
  );
};

export default EventsSection;