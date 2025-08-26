import React from "react";

export default function Video() {
  return (
    <div className="video-page">
      {/* Main Heading */}
      <h2 className="video-title">My Video 🎥</h2>

      {/* Card Container */}
      <div className="video-container">
        {/* Card 1 */}
        <a
          href="https://youtu.be/zaQbal-4cwI?si=Hn6BEu4lyT7zwDZy"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658_1280.jpg"
            alt="E-Commerce"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>My E-Commerce App 🎥</h2>
            <p>
              An e-commerce website is essentially an online store that enables
              the buying and selling of goods or services over the internet.
              Offering a platform for businesses to showcase products, and manage
              customer interactions, all within a virtual environment.
            </p>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://youtu.be/zaQbal-4cwI?si=Hn6BEu4lyT7zwDZy"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/01/11/08/53/sky-5907605_1280.jpg"
            alt="Weather App"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>My Weather App 🎥</h2>
            <p>
              A weather app is a mobile or desktop application that provides users
              with current atmospheric conditions, including temperature,
              precipitation, wind speed, and humidity, for a specific location.
              These apps use data from weather map API.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
