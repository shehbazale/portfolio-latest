import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import app49 from "../../Assets/Projects/49app.png";
import weather from "../../Assets/Projects/weather.png";
import robx from "../../Assets/Projects/robx.png";
import shop from "../../Assets/Projects/shop.png";
import deliver from "../../Assets/Projects/deliver.png";
import snapcheck from "../../Assets/Projects/snapcheck.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="E-Commerce Website"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/shehbazale/shopping-Cart"
              demoLink="https://shehbazale.github.io/shopping-Cart/index.html#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapcheck}
              isBlog={false}
              title="Snapcheck App"
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shehbazale"
              demoLink="https://snapcheck.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robx}
              isBlog={false}
              title="Robx Website"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/shehbazale"
              demoLink="https://robx.ai/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app49}
              isBlog={false}
              title="49 Social Website"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/shehbazale/49socialpounds"
              demoLink="https://49socialpound.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliver}
              isBlog={false}
              title="Salt n Pepper"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/shehbazale/salt-n-pepper"
              demoLink="https://shehbazale.github.io/salt-n-pepper/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/shehbazale/Weather-App"
              demoLink="https://shehbazale.github.io/Weather-App/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
