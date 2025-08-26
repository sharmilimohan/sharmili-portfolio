import React from 'react';

const projects = [
  {
    title: "E-commerce App",
    description: "Order management for users and Responsive design for desktop and mobile",
    skills: ["HTML","CSS","react","API"],
    image: "images/ChatGPT Image Aug 21, 2025, 01_27_23 PM.png",
    link: "https://sharmilimohan.github.io/ecommerce-website"
  },
  {
    title: "Weather App",
    description: "Dynamic weather app with ReactJS",
    skills: ["HTML","ReactJS", "CSS", "API"],
    image: "https://cdn.pixabay.com/photo/2013/09/27/22/55/cloud-187596_1280.jpg",
    link: "https://sharmilimohan.github.io/weather-app/"
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <div className="cards">
        {projects.map((proj, index) => (
          <div key={index} className="card" onClick={() => window.open(proj.link, "_blank")}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>Skills: {proj.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
