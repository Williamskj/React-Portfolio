import React from 'react'
import { Container, Row } from 'react-materialize'

const Footer = () => {
  const styles = {
    emailLink: {
      padding: "15px",
      width: "250px",
    }
  }

  return (
    <Container className="center-align" id="footer">
      <Row style={styles.emailLink}>

        &copy; 2022 by Keyann Williams<br />
        <a href="mailto:wkeyann@gmail.com" target="_blank" rel="noreferrer">wkeyann@gmail.com</a>
        <br /><br />
        <a href="http://github.com/Williamskj" target="_blank" rel="noreferrer" ><img src="assets/images/githubsmall.png"
          alt="github icon" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/keyann-williams-ab714720a/" target="_blank" rel="noreferrer" ><img
          src="assets/images/linkedinsmall.png" alt="linkedin icon" /></a>

      </Row>
    </Container>
  )
}

export default Footer