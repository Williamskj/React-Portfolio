import './App.css';
import { useNavigate } from "react-router-dom"
import 'materialize-css'
import { Button, Row } from 'react-materialize'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {

  let navigate = useNavigate();

  const aboutPage = () => {
    navigate("/about");
  };
  const projectPage = () => {
    navigate("/projects");
  };
  const contactPage = () => {
    navigate("/contact");
  };

  return (

    <div className="App">

      <Header />
      <main id="main">

        <div id="intro">
          <Row id="heroRow">
            <div className="col s12 m6 center-align" id="heroCol1">
              <img id="myPhotoImg" src="./assets/images/keyann1.png" alt="Keyann Williams" />
            </div>
            <div className="col s12 m6" id="heroCol2">
              <div>
                <p id="introSubtitle">Hello, my name is Keyann Williams, and I am a Certified Web Developer </p>

                I hope that you will be willing to take a glance through some of my previous works, and I hope you enjoy browsing through my Portfolio
                <p></p>

                <Button onClick={aboutPage}>About
                  Me</Button><br />
                <Button onClick={projectPage}>Previous Projects</Button><br />
                <Button onClick={contactPage}>Contact Me</Button>

                <br />
              </div>
            </div>
          </Row>
        </div>
      </main>
      <Footer />
    </div>
  );
}

