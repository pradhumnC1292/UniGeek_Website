import React from "react";
import "./NavBar.css"; // Import the separate CSS file

export default function NavBar() {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our work", path: "/work" },
    { name: "Blogs", path: "/blogs" },
    { name: "About us", path: "/about" },
  ];

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo-box">LOGO</div>
      </div>

      {/* Menu Items (shown on medium screens and above) */}
      <ul className="menu-links">
        {menuLinks.map((link) => (
          <li key={link.name}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* Contact Button (shown on medium screens and above) */}
      <button className="contact-button">Contact us</button>
    </nav>
  );
}
