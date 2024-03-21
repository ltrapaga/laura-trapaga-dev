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
                    <div className="proj-imgbx">
                      <img src={covidTracker} alt="COVID-19 Tracker screenshot" />
                      <div className="proj-txtx">
                        <h4>{"COVID-19 Tracker"}</h4>
                        <br />
                        <Nav.Link href="https://ltrapaga.github.io/covid19-data-tracker/" target="blank">
                         <span>Deployed Application</span>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ltrapaga/covid19-data-tracker" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <div className="proj-imgbx">
                      <img src={codingQuiz} alt="Coding Quiz screenshot" />
                      <div className="proj-txtx">
                        <h4>{"Coding Quiz"}</h4>
                        <br />
                        <Nav.Link href="https://ltrapaga.github.io/lauras-coding-quiz/" target="blank">
                          <span>Deployed Application</span>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ltrapaga/lauras-coding-quiz" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <div className="proj-imgbx">
                      <img src={noteTaker} alt="Note Taker screenshot" />
                      <div className="proj-txtx">
                          <h4>{"Note Taker"}</h4>
                          <br />
                        <Nav.Link href="https://github.com/ltrapaga/lauras-note-taker" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <div className="proj-imgbx">
                      <img src={friendlyChatApp} alt="Friendly screenshot" />
                      <div className="proj-txtx">
                          <h4>{'"Friendly" Chat App'}</h4>
                          <br />
                        <Nav.Link href="https://github.com/ltrapaga/friendly-chat-app" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <div className="proj-imgbx">
                      <img src={weatherDashboard} alt="Weather Dashboard screenshot" />
                      <div className="proj-txtx">
                      <h4>{"Weather Dashboard"}</h4>
                      <br />
                        <Nav.Link href="https://ltrapaga.github.io/lauras-weather-dashboard/" target="blank">
                          <span>Deployed Application</span>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ltrapaga/lauras-weather-dashboard" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
                  </Col>
                  <Col size={12} sm={6} md={4}>
                    <div className="proj-imgbx">
                      <img src={techBlog} alt="The Tech Blog screenshot" />
                      <div className="proj-txtx">
                          <h4>{"The Tech Blog"}</h4>
                          <br />
                        <Nav.Link href="https://github.com/ltrapaga/lauras-tech-blog" target="blank">
                          <span>GitHub Repository</span>
                        </Nav.Link>
                      </div>
                    </div>
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
