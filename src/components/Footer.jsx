import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
//Image
import Dp from "../images/dp.jpg";
//Context
import ThemeContext from "../context/themeContext";

//Animations
import { titleAnim, fade, photoAnim, imgAnim } from "../animation";
//Icons
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <StyledFooter them={theme}>
      <div className="icons">
        <a href="http://www.twitter.com/janvinsha" target="_blank">
          {" "}
          <TwitterIcon className="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/jande-vincent-1650431b9"
          target="_blank"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="http://github.com/janvinsha" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.div)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  .icons {
    width: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      font-size: 2rem;
      color: ${({ them }) => (them ? "white" : "black")};
      &:hover {
        color: #50c1e9;
      }
    }
  }
`;
export default Footer;
