import BookingConfirmation from "./BookingConfirmation";
import Payment from "./Payment";
import CancellationsRefunds from "./CancellationsRefunds";
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"></div> {/* Keeping this as per your request */}
            <p className="ml-4 text-xl">Terms and Condition</p>
            <p className="ml-4 text-xl">Meet the heroes behind our Success.</p>
          </div>
        </div>
      </div>

      {/* Imported Sections */}
      <BookingConfirmation />
      <Payment />
      <CancellationsRefunds />
            {/* Footer Section */}
            <Footer />
    </div>
  );
};

export default TermsAndConditions;
