import React from 'react';
import IMAGES from '../assets/images/image';
import Footer from './Footer';

const Teams = () => {
    const teamMembers = [
        { name: "Emmy Rosum", role: "Founder", image: IMAGES['Emmy'] },
        { name: "Nandan Manek", role: "Project Director", image: IMAGES['Manek'] },
        { name: "Hana Mira", role: "Project Advisor", image: IMAGES['Hana'] },
        { name: "Jitendra", role: "Project Leader", image: IMAGES['Jite'] },
        { name: "William Henry", role: "Project Leader", image: IMAGES['William'] },
        { name: "Emily Rose", role: "Project Leader", image: IMAGES['Emily'] },
        { name: "Sophie Anne", role: "Asst Project Leader", image: IMAGES['Sofi'] },
        { name: "Emmy Rosum", role: "Asst Project Leader", image: IMAGES['Rosam'] }
    ];

    return (
        <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        {/* Bottom Section: Title, Subtitle, and Search Bar */}
        <div className="mt-4 flex items-center">
        <div>
            <div className="mb-17"> {/* Added margin-bottom here */}
            </div>
            <p className="ml-4 text-xl">Our Team</p>
            <p className="ml-4 text-xl">Meet the heroes behind our Success.</p>
          </div>
          </div>
          </div>


          

            {/* ✅ Our Team Section */}
            <div className="container mx-auto px-4 py-8">
                

                {/* ✅ Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500 text-center"
                        >
                            <img src={member.image} alt={member.name} className="w-full h-60 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Section */}
      <Footer />
        </div>
    );
};

export default Teams;
