import React from "react";

export default function Video() {
  return (
    <div className="video-page">
      {/* Main Heading */}
      <h2 className="video-title">My Video 🎥</h2>

      {/* Card Container */}
      <div className="video-container">
        {/* Card 1 quiz*/}

            <a
          href="https://youtu.be/MJ7-N7MwNqI?si=Xi4t3taEsPK5ldNw"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/07/27/03/00/maze-1544457_1280.png"
            alt="E-Commerce"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>My Quiz-App
    🎥</h2>
            <p>
           Multiple-choice questions with instant scoring



Scoreboard to track user performance

Next/Previous navigation for smooth flow

Responsive design for mobile, tablet, and desktop

User-friendly interface with attractive animations
            </p>
          </div>
        </a>
          {/* Card 2 discovery*/}
            <a
          href="https://youtu.be/e_VN38FD2D0?si=6mCo6Hp1KGZ9ZCL7"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/06/01/03/40/app-7234739_1280.png"
            alt="E-Commerce"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>My Discovery Template 🎥</h2>
            <p>
           



Discovery Template is a modern, responsive portfolio layout designed for professionals .It combines a clean Built with HTML, CSS, and JavaScript interactive making it both functional and user-friendly
            </p>
          </div>
        </a>
          {/* Card 3 commerce*/}
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

              {/* Card 3 */}
    
 <a
          href="https://youtu.be/spe2TdSKLpw?si=I9bFUoN1wtN1Dw5A"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="E-Commerce"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>My Portfolio🎥</h2>
            <p>
              An e-commerce website is essentially an online store that enables
              the buying and selling of goods or services over the internet.
              Offering a platform for businesses to showcase products, and manage
              customer interactions, all within a virtual environment.
            </p>
          </div>
        </a>

        {/* Card 4 weather app*/}
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

        {/* Card 5 to do list */}
        <a
          href="https://youtu.be/zaQbal-4cwI?si=Hn6BEu4lyT7zwDZy"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/08/31/05/19/to-do-list-6587736_1280.png"
            alt="To-Do-App"
            className="video-thumbnail"
          />
          <div className="video-details">
            <h2>To-Do-App</h2>
            <p>
A To-Do App application that helps users organize and track their daily activities. Users can add new tasks and delete tasks when they’re no longer needed. The app ensures productivity by keeping all tasks in one place, making it easy to manage personal, study, or work-related goals.            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
