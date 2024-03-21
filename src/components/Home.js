import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
//import selfPortrait from "../assets/img/selfPortrait.jpg";

export const Home = () => {
  const [loop, setloop] = useState(0);
  const [deletingText, setdeletingText] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let homeTextTimer = setInterval(() => {
      timer();
    }, delta);

    return () => {
      clearInterval(homeTextTimer);
    };
  }, [text]);

  const timer = () => {
    let i = loop % toRotate.length;
    let allText = toRotate[i];
    let subText = deletingText
      ? allText.substring(0, text.length - 1)
      : allText.substring(0, text.length + 1);

    setText(subText);

    if (deletingText) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!deletingText && subText === allText) {
      setdeletingText(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (deletingText && subText === "") {
      setdeletingText(false);
      setloop(loop + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="welcome">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Laura, `}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Fullstack Developer", "Frontend Developer", "Backend Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                    <p>
                      Welcome! My name is Laura Trapaga and I am full-stack web developer. 
                      I have many passions such as gaming, flying airplanes, and just about 
                      any activity outdoors with my dog! In search of a career change, I 
                      signed up the Full Stack Coding Bootcamp at Georgia Tech, from which I 
                      recently graduated. I am thrilled to now have the knowledge to confidently 
                      enter an industry that challenges me, while also bringing 
                      me joy and inspiration. Stay tuned as my coding experience and portfolio 
                      continue to grow!
                    </p>
                  <button onClick={() => console.log("connect")}>
                  <a href="mailto:lbtrapaga@gmail.com">Connect With Me</a>
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  {/*} <img src={selfPortrait} alt="Self Portrait"/>*/}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
