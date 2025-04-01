

 import Footer from './Footer';
// Contact.js
const Contact = () => {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
        {/* Navigation Section with Orange Background */}
        <div className="bg-[#E05C2A] text-white py-4 px-6">
          {/* Bottom Section: Title, Subtitle, and Search Bar */}
          <div className="mt-4 flex items-center">
            <div>
              <div className="mb-17"> {/* Added margin-bottom here */}
              </div>
              <p className="ml-4 text-xl">Contact</p>
              <p className="ml-4 text-xl">Life is either a daring adventure or nothing.</p>
            </div>
            </div>
            </div>
            

        
         {/* Our Offices Section */}
         <div className="container mx-auto px-4 py-8">
                
                 {/* Office Cards Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Office 1 */}
                    <div className="bg-[#FFF4F1] rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Office 1 (Head Office)</h3>
                        <p className="text-gray-700">
                            308, University, Above Chocolate Room, <br />
                            ABC Cross Roads, XYZ, <br />
                            XXX, - 3X00X9
                        </p>
                        <p className="mt-2 text-orange-500"><strong>Office Timings:</strong> 11AM to 8PM</p>
                        <p className="text-orange-500 mt-2">📞 +91-XXX6475XXX</p>
                        <p className="text-orange-500">📞 +91-XXX6475XXX</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-orange-500 font-semibold">
                                View On Map ↗
                            </a>
                        </div>
                    </div>

                    {/* Office 2 */}
                    <div className="bg-[#FFF4F1] rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Office 2</h3>
                        <p className="text-gray-700">
                            308, University, Above Chocolate Room, <br />
                            ABC Cross Roads, XYZ, <br />
                            XXX, - 3X00X9
                        </p>
                        <p className="mt-2 text-orange-500"><strong>Office Timings:</strong> 11AM to 8PM</p>
                        <p className="text-orange-500 mt-2">📞 +91-XXX6475XXX</p>
                        <p className="text-orange-500">📞 +91-XXX6475XXX</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-orange-500 font-semibold">
                                View On Map ↗
                            </a>
                        </div>
                    </div>

                    {/* Office 3 */}
                    <div className="bg-[#FFF4F1] rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Office 3</h3>
                        <p className="text-gray-700">
                            308, University, Above Chocolate Room, <br />
                            ABC Cross Roads, XYZ, <br />
                            XXX, - 3X00X9
                        </p>
                        <p className="mt-2 text-orange-500"><strong>Office Timings:</strong> 11AM to 8PM</p>
                        <p className="text-orange-500 mt-2">📞 +91-XXX6475XXX</p>
                        <p className="text-orange-500">📞 +91-XXX6475XXX</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-orange-500 font-semibold">
                                View On Map ↗
                            </a>
                        </div>
                    </div>

                    {/* Office 4 */}
                    <div className="bg-[#FFF4F1] rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Office 4</h3>
                        <p className="text-gray-700">
                            308, University, Above Chocolate Room, <br />
                            ABC Cross Roads, XYZ, <br />
                            XXX, - 3X00X9
                        </p>
                        <p className="mt-2 text-orange-500"><strong>Office Timings:</strong> 11AM to 8PM</p>
                        <p className="text-orange-500 mt-2">📞 +91-XXX6475XXX</p>
                        <p className="text-orange-500">📞 +91-XXX6475XXX</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-orange-500 font-semibold">
                                View On Map ↗
                            </a>
                        </div>
                    </div>
                </div>
       
            </div>
                     {/* Footer Section */}
      <Footer />
        </div>
        
    );
  };
  
  export default Contact;