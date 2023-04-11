import { Container, Row, Col, Nav } from "react-bootstrap";
import "animate.css";

import covidTracker from "../assets/img/projects/covidTracker.jpg";
import codingQuiz from "../assets/img/projects/codingQuiz.jpg";
import noteTaker from "../assets/img/projects/noteTaker.jpg";
import friendlyChatApp from "../assets/img/projects/friendlyChatApp.jpg";
import weatherDashboard from "../assets/img/projects/weatherDashboard.jpg";
import techBlog from "../assets/img/projects/techBlog.jpg";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <div>
                <Row>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://ltrapaga.github.io/covid19-data-tracker/"
                    >
                      <img
                        src={covidTracker}
                        alt="COVID-19 Tracker screenshot"
                      />
                      <div className="proj-txtx">
                        <h4>{"COVID-19 Tracker"}</h4>
                        <span>{"Front-End Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://ltrapaga.github.io/lauras-coding-quiz/"
                    >
                      <img src={codingQuiz} alt="Coding Quiz screenshot" />
                      <div className="proj-txtx">
                        <h4>{"Coding Quiz"}</h4>
                        <span>{"Front-End Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://lauras-note-taker.herokuapp.com/"
                    >
                      <img src={noteTaker} alt="Note Taker screenshot" />
                      <div className="proj-txtx">
                        <h4>{"Note Taker"}</h4>
                        <span>{"Full-Stack Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://friendly-chatapp.herokuapp.com/login"
                    >
                      <img src={friendlyChatApp} alt="Friendly screenshot" />
                      <div className="proj-txtx">
                        <h4>{'"Friendly" Chat App'}</h4>
                        <span>{"Full-Stack Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://ltrapaga.github.io/lauras-weather-dashboard/"
                    >
                      <img
                        src={weatherDashboard}
                        alt="Weather Dashboard screenshot"
                      />
                      <div className="proj-txtx">
                        <h4>{"Weather Dashboard"}</h4>
                        <span>{"Front-End Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <Nav.Link
                      className="proj-imgbx"
                      href="https://ltrapaga-tech-blog.herokuapp.com/"
                    >
                      <img src={techBlog} alt="The Tech Blog screenshot" />
                      <div className="proj-txtx">
                        <h4>{"Weather Dashboard"}</h4>
                        <span>{"Front-End Application"}</span>
                      </div>
                    </Nav.Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
