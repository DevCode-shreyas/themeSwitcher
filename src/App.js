import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import HeroSection from "./components/Hero";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
