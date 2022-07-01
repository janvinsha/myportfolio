import React, { useContext, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
//Image
import Dp from "../images/abo.png";
//Context
import ThemeContext from "../context/themeContext";

//Animations
import { titleAnim, fade, photoAnim, imgAnim } from "../animation";

const Nav = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = useState(false);
  const handlerThemeSwitch = () => {
    setTheme(!theme);
    setMenuToggle(!menuToggle);
  };
  return (
    <StyledNav them={theme} menuToggle={menuToggle}>
      <div className="left">
        <span>
          <Link id="logo" to="/">
            <img src={Dp} alt="image" variants={imgAnim} />
          </Link>
        </span>
        <h2>
          <Link to="/">Janvinsha</Link>{" "}
        </h2>
      </div>

      <div
        className="right"
        {...useSwipeable({
          onSwipedRight: () => setMenuToggle(!menuToggle),
        })}
      >
        <span className="toggle" onClick={() => setMenuToggle(!menuToggle)}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <div className="slideMenu">
          <span className="toggle " onClick={() => setMenuToggle(!menuToggle)}>
            <FontAwesomeIcon icon={faTimes} />
          </span>

          <span
            onClick={() => {
              history.push("/");
              setMenuToggle(!menuToggle);
            }}
          >
            <Link to="/">Home</Link>
            <div className="line" id={pathname === "/" && "active"}></div>
          </span>
          <span
            onClick={() => {
              history.push("/about");
              setMenuToggle(!menuToggle);
            }}
          >
            <Link to="/about">About</Link>
            <div className="line" id={pathname === "/about" && "active"}></div>
          </span>
          <span
            onClick={() => {
              history.push("/contact");
              setMenuToggle(!menuToggle);
            }}
          >
            <Link to="/contact">Contact</Link>
            <div
              className="line"
              id={pathname === "/contact" && "active"}
            ></div>
          </span>
          <span>
            {theme ? (
              <button onClick={handlerThemeSwitch} className="moon">
                <FontAwesomeIcon icon={faMoon} color="whitesmoke" />
              </button>
            ) : (
              <button onClick={handlerThemeSwitch} className="sun">
                <FontAwesomeIcon icon={faSun} color="gray" />
              </button>
            )}
          </span>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  top: 0;
  z-index: 10;
  @media (max-width: 900px) {
    padding: 0rem 0rem;
  }
  .left {
    @media (max-width: 900px) {
      padding: 1rem;
    }
    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 50%;
      @media (max-width: 900px) {
        width: 2.7rem;
        height: 2.7rem;
      }
    }
    display: flex;
    align-items: center;
    span {
      margin: 0rem 0.3rem;
      overflow: hidden;
    }
    h2 {
      padding-left: 0.3rem;
      font-size: 1.5rem;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 900px) {
      padding-right: 2rem;
    }
    span {
      position: relative;
      display: flex;
      padding: 0.2rem 0.2rem;
      margin: 0rem 2rem;
      align-items: center;
      @media (max-width: 900px) {
        font-size: 1.5rem;
        padding: 0.5rem 0rem;
        margin: 0.4rem 0rem;
        align-items: center;
      }
      &:hover {
        cursor: pointer;
        a {
          transition: 0.5s ease-in-out;
          color: #50c1e9;
        }
        .line {
          width: 100%;
        }
      }
      #active {
        width: 100%;
      }
      .line {
        height: 0.15rem;
        background: #50c1e9;
        width: 0%;
        position: absolute;
        bottom: 0%;
        left: 50%;
        right: 0%;
        transform: translate(-50%, 0);
        transition: 0.5s;
      }
    }
    button {
      background: #50c1e9;
      padding: 0.4rem 0.7rem;
      border-radius: 10px;
      border: 2px solid #50c1e9;
      cursor: pointer;
      color: ${({ them }) => (them ? "white" : "black")};
      &:hover {
        background: #4cb1d6;
      }
    }
    .toggle {
      display: none;
      color: ${({ them }) => (them ? "white" : "black")};
      font-size: 1.5rem;
      @media (max-width: 900px) {
        display: flex;
      }
    }
    .slideMenu {
      display: flex;
      .toggle {
        margin-left: auto;
        width: 2rem;
        color: ${({ them }) => (them ? "white" : "black")};
      }
      @media (max-width: 900px) {
        display: flex;
        background: ${({ them }) => (them ? "#171818" : "#f8f8f8")};
        z-index: 10;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        color: ${({ them }) => (them ? "white" : "black")};
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        padding: 2rem;
        transition: all 0.5s ease-in-out;
        transform: ${({ menuToggle }) =>
          menuToggle ? "translateX(0%)" : "translateX(100%)"};
      }
    }
  }
`;

export default Nav;
