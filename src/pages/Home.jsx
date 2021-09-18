import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { ThemeConsumer } from "styled-components";
import {
  pageAnimation,
  titleAnim,
  imgAnim,
  cardLeftAnim,
  cardRightAnim,
  fade,
  toDownAnim,
  photoAnim,
} from "../animation";
//Contect
import ThemeContext from "../context/themeContext";

import { useScroll } from "../components/useScroll";
import Meta from "../components/Meta";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
//Image
import homeImg from "../images/home.jpg";
//Icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ProjectState } from "../projectState";
const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const history = useHistory();
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [project1, setProject1] = useState(ProjectState()[0]);
  const [project2, setProject2] = useState(ProjectState()[1]);
  const [project3, setProject3] = useState(ProjectState()[2]);
  const [project4, setProject4] = useState(ProjectState()[3]);

  return (
    <StyledHome
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      theme={theme}
    >
      <Meta />
      <ScrollToTop />
      <div className="row">
        <div className="Hi">
          <Hide className="desk">
            <motion.h2 variants={titleAnim}>
              Hi, I Am Jande Vincent. I Am
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className="desk">
              {" "}
              A Full-Stack Javascript /
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className="desk">
              Solidity Developer
            </motion.h2>
            <Hide className="mobile">
              <motion.h2 variants={titleAnim}>
                Hi, I Am Jande Vincent.
              </motion.h2>
            </Hide>
            <Hide className="mobile">
              <motion.h2 variants={titleAnim}>
                I Am A Full Stack Javascript /
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim} className="mobile">
                Solidity Developer
              </motion.h2>
            </Hide>
          </Hide>
          <Hide>
            <div className="con">
              <motion.h3 variants={imgAnim}>
                Want to contact me? Let's Talk{" "}
              </motion.h3>{" "}
              <motion.span
                variants={fade}
                className="talk"
                onClick={() => history.push("/contact")}
              >
                <ArrowRightIcon className="no" />
              </motion.span>
            </div>
          </Hide>
        </div>
        <Image>
          <motion.img variants={photoAnim} src={homeImg} alt="photo" />
        </Image>
      </div>
      <motion.div className="projects">
        <Hide>
          <motion.h2 variants={toDownAnim}>Top Projects</motion.h2>
        </Hide>
        <ProjectList>
          <motion.div
            className="project"
            variants={cardLeftAnim}
            ref={element}
            animate={controls}
            initial="hidden"
          >
            <Link to="/project/wandart">
              <motion.div className="card">
                <img src={project1.mainImg} alt="photo" />
                <ArrowRightAltIcon className="ico" />
                <span className="title">{project1.title}</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="project"
            variants={fade}
            ref={element2}
            animate={controls2}
            initial="hidden"
          >
            {" "}
            <Link to="/project/janvinsha-stores">
              <motion.div className="card">
                <img src={project2.mainImg} alt="photo" />
                <ArrowRightAltIcon className="ico" />
                <span className="title">{project2.title}</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="project"
            variants={cardLeftAnim}
            ref={element3}
            animate={controls3}
            initial="hidden"
          >
            {" "}
            <Link to="/project/ignite">
              <motion.div className="card">
                <img src={project3.mainImg} alt="photo" />
                <ArrowRightAltIcon className="ico" />
                <span className="title">{project3.title}</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="project"
            variants={fade}
            ref={element4}
            animate={controls4}
            initial="hidden"
          >
            {" "}
            <Link to="/project/capture">
              <motion.div className="card">
                <img src={project4.mainImg} alt="photo" />
                <ArrowRightAltIcon className="ico" />
                <span className="title">{project4.title}</span>
              </motion.div>
            </Link>
          </motion.div>
        </ProjectList>
      </motion.div>
      <Footer />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 900px) {
    padding: 0rem 1rem;
  }
  .mobile {
    display: none;
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
    }
  }
  .desk {
    @media (max-width: 900px) {
      display: none;
    }
  }
  .row {
    display: flex;
    align-items: center;
    padding: 3rem 0rem;
    @media (max-width: 900px) {
      padding: 0rem 0rem;
      flex-flow: column wrap;
    }
  }
  .Hi {
    width: 50%;
    overflow: hidden;
    @media (max-width: 900px) {
      width: 100%;
    }
    h5 {
      @media (max-width: 900px) {
        text-align: center;
      }
    }
    h2 {
      line-height: 3.4rem;
      @media (max-width: 900px) {
        text-align: center;
        line-height: 2.4rem;
      }
    }
    h3 {
      line-height: 4rem;
      @media (max-width: 900px) {
        text-align: center;
        line-height: 2rem;
      }
    }
    .con {
      display: flex;
      align-items: center;

      @media (max-width: 900px) {
        justify-content: center;
        padding-bottom: 0.5rem;
      }
    }
    .talk {
      margin-left: 0.2rem;
      cursor: pointer;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      &:hover {
        .no {
          background: #4cb1d6;
        }
      }
      .no {
        transform: translateX(0);
        padding: 0rem;
        font-size: 1.7rem;
        border-radius: 50%;
        background: #50c1e9;
      }
    }
  }
  .projects {
    h2 {
      padding: 1rem 0rem;
      @media (max-width: 900px) {
        padding: 0.6rem 0rem;
      }
    }
  }
`;

const ProjectList = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 0.6rem;
  grid-row-gap: 0.6rem;
  padding: 0rem 0rem;

  .project {
    height: 20rem;
    @media (max-width: 900px) {
      height: 13rem;
    }
    .card {
      background: black;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      color: white;
      img {
        width: 100%;
        height: 100%;
        transition: 0.25s ease-in-out;
        opacity: 0.8;
      }
      .ico {
        position: absolute;
        right: 5%;
        bottom: 2%;
        font-size: 5.5rem;
        opacity: 0;
        transition: 0.25s ease-in-out;
        padding: 0rem;
        @media (max-width: 900px) {
          font-size: 3rem;
          right: 10%;
          bottom: 4%;
        }
      }
      .title {
        position: absolute;
        left: 10%;
        bottom: 10%;
        font-size: 2rem;
        color: white;
        @media (max-width: 900px) {
          font-size: 1.6rem;
          left: 5%;
          bottom: 8%;
        }
      }
      &:hover {
        img {
          opacity: 0.5;
        }
        .ico {
          opacity: 1;
        }
      }
    }
  }
`;

const Image = styled.div`
  z-index: 2;
  width: 50%;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default Home;
