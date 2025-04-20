import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../Utilities/Util';
import Footer from './Footer';

const Teams = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(ENDPOINTS.TEAM);
                
                if (Array.isArray(response.data)) {
                    // Ensure all images are properly formatted
                    const formattedMembers = response.data.map(member => ({
                        ...member,
                        profileImage: member.profileImage || 'https://via.placeholder.com/300x400?text=No+Image'
                    }));
                    
                    setTeamMembers(formattedMembers);
                } else {
                    throw new Error('API response is not an array');
                }
            } catch (err) {
                console.error("Fetch Error:", err);
                setError("Failed to load team data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <p className="text-xl">Loading team data...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-gray-900 bg-white">
            {/* ONLY ADDED THIS HEADER SECTION - REST REMAINS UNCHANGED */}
            <div className="bg-[#E05C2A] text-white pt-24 pb-4 px-6">
                <div className="mt-4 flex flex-col md:flex-row items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-xl font-bold">Our Team</p>
                        <p className="text-lg">Meet the heroes behind our Success.</p>
                    </div>
                </div>
            </div>

            {/* REST OF YOUR ORIGINAL CODE REMAINS EXACTLY THE SAME */}
            {error && (
                <div className="container mx-auto px-4 py-2 text-red-500">
                    {error}
                </div>
            )}

            {/* Team Grid */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {teamMembers.map((member) => (
                        <div 
                            key={member.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500 text-center"
                        >
                            <div className="h-60 overflow-hidden">
                                <img 
                                    src={member.profileImage} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Found';
                                        e.target.className = "w-full h-full object-contain bg-gray-100";
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Teams;