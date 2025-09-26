import myimage from "../images/sharmili photo.jpg";
export default function Home() {
  return (
    <div className="home-container">
      <img src={myimage} alt="Sharmili" className="profile-pic" />
      <h1>Sharmili . M</h1>
      <p>Full Stack Developer (PHP) | Passionate about building clean and efficient web apps.A full-stack PHP developer is a versatile professional who possesses a comprehensive skill set to handle every aspect of web application development. Unlike a front-end developer who focuses solely on the user interface, or a back-end developer who works exclusively on the server side, a full-stack developer is proficient in both.</p>
    </div>
  );
}
