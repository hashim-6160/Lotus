import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Hotels from "./Pages/Hotels";
import HotelDetails from "./Pages/HotelDetails";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />

            <Route
              path="/services"
              element={<div className="pt-16">Our Services</div>}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/book"
              element={<div className="pt-16">Book Now</div>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
