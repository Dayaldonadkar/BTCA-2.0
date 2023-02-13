import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewsPage from "./Components/NewsPage";
import Organizers from "./Components/Organizers";
import Arbiter from "./Components/Arbiter";
import Coaches from "./Components/Coaches";
import Gallery from "./Components/Gallery";
import Address from "./Components/Address";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/News" element={<NewsPage />} />
          <Route path="/Organizers" element={<Organizers />} />
          <Route path="/Arbiters" element={<Arbiter />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Coaches" element={<Coaches />} />
        </Routes>
        <Address />
      </BrowserRouter>
    </div>
  );
};

export default App;
