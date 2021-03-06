import React from 'react'
import '../App.css';
import ReactTooltip from "react-tooltip"
import { Container, Col } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactNav from '../components/ContactNav';

const Contact = () => {

  return (

    <>
      <Header />
      <ContactNav />
      <Container>
        <div id="contactMeDesc">
          Other places to find me
        </div>

        <div id="contactMeContent">
          <ReactTooltip place="top" type="success" effect="solid" />
          <a href="mailto:wkeyann@gmail.com" target="_blank" rel="noreferrer" ><img src="assets/images/emailicon.png" alt="email icon" data-tip="Email" data-text-color="black" /></a>

          <a href="http://github.com/Williamskj" target="_blank" rel="noreferrer" ><img src="assets/images/githubicon.png"
            data-tip="GitHub" alt="github icon" data-text-color="black" /></a>
          <a href="https://www.linkedin.com/in/keyann-williams-ab714720a/" target="_blank" rel="noreferrer" ><img
            src="assets/images/linkedinicon.png" data-tip="LinkedIn" alt="linkedin icon" data-text-color="black" /></a>
          <a href="assets/williamsresume.pdf" download rel="noreferrer" ><img src="assets/images/resume.png"
            data-tip="Resume" alt="resume icon" data-text-color="black" /></a>
        </div>


        <Col s={12} className="center-align">
        </Col>

      </Container>
      <Footer />
    </>

  )
}

export default Contact