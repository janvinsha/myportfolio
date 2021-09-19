import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
  letter,
  sentence,
} from "../animation";
//Contect
import ThemeContext from "../context/themeContext";

import { useScroll } from "../components/useScroll";
import Meta from "../components/Meta";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
//Image
import aImg from "../images/abo.jpg";
const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const line =
    "Full Stack Javascript / solidity developer with 3years experience in programming. Specialties in React, Redux, React Context, Html, Css, Sass, JQuery, Styled-components, Framer-motion, Figma, Adobe illustrator, MVC Architecture, Test Driven Development (TDD), Git, Nodejs, Mongodb, Solidity, Ganache, Truffle, Hardhat, Web3, React Native";
  return (
    <StyledAbout
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      theme={theme}
    >
      <ScrollToTop />

      <div className="row">
        <Image>
          <motion.img variants={photoAnim} src={aImg} alt="photo" />
        </Image>
        <div className="Hi">
          <Hide>
            <motion.h4 variants={titleAnim}>Jande Vincent Shater</motion.h4>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              Full Stack Javascript / Solidity
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Developer</motion.h2>
          </Hide>
          <Hide>
            <motion.h3 variants={sentence}>
              {line.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h3>
          </Hide>
        </div>
      </div>
      <Footer />
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  padding: 0rem 5rem;
  @media screen and (max-width: 900px) {
    padding: 0rem 1rem;
  }
  .row {
    display: flex;
    align-items: center;
    padding: 5rem 0rem;
    @media screen and (max-width: 900px) {
      flex-flow: column wrap;
      padding: 0.5rem 0rem;
    }
  }
  .Hi {
    width: 50%;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    h2 {
    }
    h3 {
      line-height: 2rem;
      margin-top: 1.2rem;
      @media screen and (max-width: 900px) {
        line-height: 1.6rem;
        margin-top: 0.8rem;
      }
    }
    h4 {
      padding: 0.4rem 0rem;
      font-size: 2.5rem;
      @media screen and (max-width: 900px) {
        font-size: 2rem;
      }
    }
  }
`;

const Image = styled.div`
  z-index: 2;
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  overflow: hidden;
  img {
    width: 90%;
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 20rem;
    }
    height: 35rem;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default About;
