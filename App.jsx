// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "/src/components/Navbar";
// import Center from "/src/components/Center";
// import Register from "/src/components/Register";
// import Login from "/src/components/Login";

// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         {/* Navbar stays on top for all pages */}
//         <Navbar />

//         {/* Define all routes */}
//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<Center />} />

//           {/* Register/Login Page */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Center from "/src/components/Center";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar stays visible on all pages */}
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Center />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Temporary placeholder routes (to remove future warnings) */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<h2>Events Page Coming Soon</h2>} />
          <Route
            path="/community"
            element={<h2>Community Page Coming Soon</h2>}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<h2>Donate Page Coming Soon</h2>} />
          <Route path="/find" element={<h2>Find Page Coming Soon</h2>} />
          <Route path="/more" element={<h2>More Page Coming Soon</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
