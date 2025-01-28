// CoursesSection.jsx
import React from "react";
import "./CoursesSection.css";
import CardDefault from "../components/CardDefault"; // adjust path if needed

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "UI & UX Design",
      description: "Design that simplifies, engages, and excites",
      image:
        "https://rishihood.edu.in/wp-content/uploads/2024/11/UX-UI-in-2025.jpg",
    },
    {
      id: 2,
      title: "App Development",
      description: "Your app, our passion for digital innovation",
      image:
        "https://rishihood.edu.in/wp-content/uploads/2024/11/UX-UI-in-2025.jpg",
    },
  ];

  return (
    <section className="courses-section">
      <h2 className="section-heading">Our Courses</h2>

      <div className="courses-container">
        {courses.map((course) => (
          <CardDefault
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
}
