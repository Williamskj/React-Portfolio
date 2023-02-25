import React from 'react'
import '../App.css';
import { Container, Row } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectsNav from '../components/ProjectsNav';
import ReturnToTop from '../components/ReturnToTop';

const Projects = () => {
  const styles = {
    cardLinks: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "15px",
      marginRight: "15px",
      marginBottom: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.329)",
    }
  }

  return (
    <>
      <Header />
      <ProjectsNav />
      <Container className="center-align">
        <Row id="workDesc">
          Previous Projects
        </Row>
        <Row className="center-align" id="workRow">
          <div>
            <div id="reactDashboard">
              <img src="./assets/images/reactdashboard.png" useMap="#reactDashboard" alt="screenshot of a React Dashboard" />
              <map name="reactDashboard">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://williamskj.github.io/React-Admin-Dashboard/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="reactdashboardContent" style={styles.cardLinks}><a href="https://williamskj.github.io/React-Admin-Dashboard/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/Williamskj/React-Admin-Dashboard/tree/main" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /></div>
          </div>

          <div>
            <div id="weatherApp">
              <img src="./assets/images/weatherdashboard.png" useMap="#weatherApp" alt="screenshot of weather app" />
              <map name="weatherApp" id="weatherMap">
                <area shape="rect" coords="15,15,228,232" alt="Computer" href="https://williamskj.github.io/Weather-Dashboard/"
                  target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="weatherAppContent" style={styles.cardLinks}>
              <a href="https://williamskj.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/Williamskj/Weather-Dashboard" target="_blank" rel="noreferrer">GitHub
                Repo</a><br /></div>
          </div>

          <div>
            <div id="digitalAnvil">
              <img src="./assets/images/digitalanvil.png" useMap="#digitalAnvil" alt="screenshot of Digital Anvil" />
              <map name="digitalAnvil">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://shrouded-woodland-50128.herokuapp.com/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="digitalanvilContent" style={styles.cardLinks}><a href="https://shrouded-woodland-50128.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/DanPGolden/project2" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /></div>
          </div>

          <div>
            <div id="impulseflights">
              <img src="assets/images/impulseflights.png" useMap="#impulseflights" alt="screenshot of impulseflights" />
              <map name="impulseflights">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://williamskj.github.io/Project-01/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="impulseflightsContent" style={styles.cardLinks}><a href="https://williamskj.github.io/Project-01/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/Williamskj/Project-01" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /></div>
          </div>

          <div>
            <div id="booksearchengine">
              <img src="assets/images/booksearchengine.png" useMap="#booksearchengine" alt="screenshot of book search engine" />
              <map name="booksearchengine">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://homework-02-19-22.herokuapp.com/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="booksearchengineContent" style={styles.cardLinks}><a href="https://homework-02-19-22.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/Williamskj/Book-Search-Engine" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /></div>
          </div>

          <div>
            <div id="jate">
              <img src="assets/images/jate.png" useMap="#jate" alt="screenshot of code quiz" />
              <map name="jate">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://homework-02-04-22.herokuapp.com/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="jateContent" style={styles.cardLinks}><a href="https://homework-02-04-22.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/Williamskj/PWA-Text-Editor" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /></div>
          </div>
        </Row>
        <ReturnToTop />
      </Container>
      <Footer />
    </>
  )
}

export default Projects