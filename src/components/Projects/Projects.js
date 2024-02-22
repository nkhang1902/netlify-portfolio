import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/music.png";
import game from "../../Assets/Projects/game.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import techxi from "../../Assets/Projects/techxi.png";
import academy from "../../Assets/Projects/academy.png";
import classroom from "../../Assets/Projects/classroom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techxi}
              isBlog={false}
              title="TechXi Application"
              description="A Grab Clone application for organizing customers, drivers, bookings, payments, and travel. It comes with Google Maps APIs and an MVC-based architecture. The project includes a moblie application for drivers and customers, also a web application for organizers. Build with ReactJS, ReactNative and Javasript with MongoDB. I'm mainly responsible with front-end development, the website and the mobile app."
              ghLink="https://github.com/orgs/KTPM-Techxi/repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classroom}
              isBlog={false}
              title="Goolge Classroom Application"
              description="A Google Classroom alike websites with fully functionally features like the originals. The Application works with OAuth, email confirming sign up, live notifications,... The project is built with ReactJS framework on the frontend, with TypeScript and PostgreSQL. I'm mainly responsible for frontend development."
              ghLink="https://github.com/Danteee27/Online-Classroom"
              demoLink="https://online-classroom-navy.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="BookWorms E-commerce Website"
              description= "An online bookstore with fully operational features like other e-commerce websites. This was one of my first applications with ReactJS and JavaScript, utilizing Firebase DB. I'm responsible for both the front-end and back-end of this project."
              ghLink="https://github.com/nkhang1902/bookStore"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={academy}
              isBlog={false}
              title="Online Academy Website"
              description="An online website for users to buy and attend courses with tutorial videos. Additionally, teachers can create courses and upload lesson materials. The application is built with HTML and JavaScript, with MySQL as the database. I mainly worked on the front-end and database for this application. "
              ghLink="https://github.com/Danteee27/Online-Academy-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Android Music Player"
              description="A music player for Android with basic features of a music app such as skip, reverse, pause, etc. It also includes functions like creating new playlists or browsing trending music categories. This mobile application for Android users is built with Kotlin and Java, and I fully participated in the development process."
              ghLink="https://github.com/Danteee27/Android-Music-Player"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="The Last Soil VideoGame"
              description="This is my first game product power by Unity, it is a 2D top down replicate of Plants Vs Zombie with a mix of mordern roguelike games. I mainly took part in coming up and designing the gameplay, also the implementing ideas into actual game by C# and Unity FrameWork."
              ghLink="https://github.com/TheUltraBadDuck/TheLastSoil"
              demoLink="https://www.youtube.com/watch?v=2A0Re1deQ8I"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
