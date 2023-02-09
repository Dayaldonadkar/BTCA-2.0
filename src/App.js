import React from "react";
import Mid from "./Components/Mid";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Objective from "./Components/Objective";
import Working from "./Components/Working";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mid />
      <News />
      <Working />
      <Objective />
    </div>
  );
};

export default App;
