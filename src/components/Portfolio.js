import React from 'react';
import ecommerce from "../images/ChatGPT Image Aug 21, 2025, 01_27_23 PM.png";
const projects = [


  {
    title: "E-commerce App",
    description: "Order management for users and Responsive design for desktop and mobile",
    skills: ["HTML","CSS","react","API"],
    image: "https://cdn.pixabay.com/photo/2022/03/24/21/03/online-shop-7089861_1280.png",
    link: "https://sharmilimohan.github.io/ecommerce-website"
  },
  {
    title: "Weather App",
    description: "Dynamic weather app with ReactJS",
    skills: ["HTML","ReactJS", "CSS", "API"],
    image: "https://cdn.pixabay.com/photo/2013/09/27/22/55/cloud-187596_1280.jpg",
    link: "https://sharmilimohan.github.io/weather-app/"
  },
    {
    title: "Quiz App",
    description: "Quiz App with ReactJS",
    skills: ["HTML","ReactJS", "CSS", "API"],
    image: "https://cdn.pixabay.com/photo/2024/10/31/10/08/quiz-9163786_1280.jpg",
    link: "https://sharmilimohan.github.io/quiz-app/"
  },
    {
    title: "Simple-Portfolio",
    description: " Responsive design for desktop and mobile",
    skills: ["HTML","CSS","JS"],
        image: "data:image/webp;base64,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",

    link: "https://sharmilimohan.github.io/first-template/"
  },
      {
    title: "TO-DO App",
    description: "TO-DO App with ReactJS",
    skills: ["HTML","ReactJS", "CSS"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2iL8dmEiqg_36MvHjuYv8ws0rzIOcjDPlw&s",
    link: "https://sharmilimohan.github.io/to-do-list/"
  },
  {
    title: "Personal-shape Website",
    description: "Personal-Shape",
    skills: ["HTML", "CSS"],
    image: "https://cdn.pixabay.com/photo/2013/10/25/17/26/tree-200795_1280.jpg",
    link: "https://sharmilimohan.github.io/personal-shape/"
  },
   {
  title: "Discovery Platform UI",
  description: "A responsive discovery platform interface where users can browse and search topics like Web Design, Graphic, and Logo Design.",
  skills: ["HTML", "CSS", "JavaScript"],
  image: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg", 
  link: "https://sharmilimohan.github.io/discovery/"
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
