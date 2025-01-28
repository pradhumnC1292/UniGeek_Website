import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection.jsx";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <CoursesSection />
    </div>
  );
}
