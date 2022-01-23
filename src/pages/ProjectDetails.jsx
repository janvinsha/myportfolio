import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
//Contect
import ThemeContext from "../context/themeContext";
//Animations
import { motion } from "framer-motion";

import Meta from "../components/Meta";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import LinkIcon from "@material-ui/icons/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  pageAnimation,
  titleAnim,
  imgAnim,
  cardLeftAnim,
  cardRightAnim,
  fade,
  toDownAnim,
  photoAnim,
  letter,
  sentence,
} from "../animation";
const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState());
  const [project, setProject] = useState(null);

  const { theme, setTheme } = useContext(ThemeContext);

  //UseEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
    console.log(setProject);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          them={theme}
        >
          <Meta title="Project" />
          <div className="img desk">
            <img src={project.mainImg} />
          </div>
          <div className="img mobile">
            <img src={project.mobileImg} />
          </div>
          <div className="desc">
            <Hide>
              <motion.h2 variants={titleAnim}>{project.title}</motion.h2>
            </Hide>
            <Hide>
              <motion.h3 variants={titleAnim}>{project.subTitle}</motion.h3>
            </Hide>
          </div>
          <div className="about">
            <Hide>
              <motion.h2 variants={toDownAnim}>The Project</motion.h2>
            </Hide>
            <Hide>
              <motion.h3 variants={sentence}>
                {project.details.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </Hide>

            <Navigation>
              {project.title != projects[0].title && (
                <span
                  className="previous"
                  onClick={() => {
                    let indexEle = projects.findIndex(
                      (element) => element.title == project.title
                    );
                    history.push(projects[indexEle - 1].url);
                  }}
                >
                  <ArrowBackIosIcon className="icon" />
                  <h3>Previous Project</h3>
                </span>
              )}
              {project.title != projects[projects.length - 1].title && (
                <span
                  className="next"
                  onClick={() => {
                    let indexEle = projects.findIndex(
                      (element) => element.title == project.title
                    );
                    history.push(projects[indexEle + 1].url);
                  }}
                >
                  <h3>Next Project</h3>
                  <ArrowForwardIosIcon className="icon" />
                </span>
              )}
            </Navigation>
          </div>
          <ScrollToTop />
          <a href={project.liveLink} target="_blank">
            {" "}
            <Link>
              <LinkIcon className="ic" />
            </Link>
          </a>

          <Footer />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 1;
  .mobile {
    display: none;
    @media screen and (max-width: 900px) {
      display: flex;
    }
  }
  .desk {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  .img {
    z-index: -2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      opacity: 0.7;
    }
  }
  .desc {
    padding: 5rem;
    @media screen and (max-width: 900px) {
      display: flex;
      padding: 4rem 0rem;
    }
    padding-bottom: 10rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.5rem;
      @media screen and (max-width: 900px) {
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
  .about {
    padding: 4rem 5rem;
    padding-top: 6rem;
    background: ${({ them }) => (them ? "#0f0f0f" : "#ffffff")};
    transition: 0.3s ease-in-out;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    h2 {
      font-size: 2.2rem;
      padding: 1rem 0rem;
    }
    h3 {
      font-size: 1.5rem;
      @media screen and (max-width: 900px) {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 900px) {
      padding: 1rem 1rem;
      padding-top: 1rem;
    }
  }
`;

const Link = styled(motion.div)`
  position: fixed;
  display: flex;
  border-radius: 50%;
  width: 3.5rem;
  bottom: 7%;
  left: 7%;
  align-items: center;
  height: 3.5rem;
  justify-content: center;
  color: white;
  z-index: 1000;
  cursor: pointer;
  .ic {
    font-size: 2rem;
    color: white;
  }
  transition: opacity 0.4s;
  background: #50c1e9;
  &:hover {
    background: #4cb1d6;
  }
`;

const Navigation = styled(motion.div)`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    cursor: pointer;
    &:hover {
      color: #50c1e9;
      h3 {
        color: #50c1e9;
      }
    }
    h3 {
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default ProjectDetail;
