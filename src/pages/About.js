import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-materialize'
import AboutNav from '../components/AboutNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReturnToTop from '../components/ReturnToTop';

const About = () => {

  return (
    <>
      <Header />
      <AboutNav />
      <Container id="aboutme">
        <Row id="aboutMeDesc">
          <Col s={12} id="aboutMeTitle">
            A bit about Me
          </Col>
          <Col s={12} className="center-align" id="aboutMeCol">
            <br /><img id="aboutMeImg" src="assets/images/keyann2.png" alt="Keyann Williams" />
          </Col>
        </Row>
        <Container className="left-align" id="aboutMeText">I am a young man in the proccess of setting up his career in a booming industry that has need of my skills and determination to see a beautiful image come to life. Not with a paintbrush, but with a mouse and keyboard. <br /><br />I am a graduate of Bellevue College, with a Assosiates in Arts and Science. I also graduated Trinity's Coding Bootcamp hosted and sponsored by the University of Washington. I have experience in multiple different technologies, including Javascript ES6+, HTML5, CSS3, Sequelize, Mongoose, JQuery, and more.
          <br />
          <br />As far as my personal interests, I enjoy physical activity. Primarily hiking Mt. Si, and weight lifting. I also enjoy occasional writing, character creation, and creative puzzle creation and solving. I am a big Fan of Tabletop Roleplaying games, such as Dungeons and Dragons and Pathfinder.
          <br />
          <br />
        </Container>

        <Col s={12} className="center-align">
          <ReturnToTop />
        </Col>


      </Container>
      <Footer />
    </>

  )
}

export default About