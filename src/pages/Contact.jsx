import React, { useContext } from "react";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import styled, { ThemeConsumer } from "styled-components";
import {
  pageAnimation,
  titleAnim,
  imgAnim,
  cardLeftAnim,
  cardRightAnim,
  fade,
  photoAnim,
} from "../animation";
//Contect
import ThemeContext from "../context/themeContext";
import Meta from "../components/Meta";
import { useScroll } from "../components/useScroll";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const mapStyles = {
  width: "100%",
  height: "100%",
};

const AnyReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon style={{ color: "#50c1e9;", fontSize: "2rem" }} />
  </div>
);
const Contact = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [element, controls] = useScroll();

  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      theme={theme}
    >
      <Meta title="Contact Janvinsha" />
      <ScrollToTop />

      <motion.div className="in-touch">
        <Hide className="desk">
          <motion.h2 variants={titleAnim}>Let's Get In Touch</motion.h2>
        </Hide>
        <Hide>
          <motion.h3 variants={imgAnim} className="desk">
            Doesn't matter if you just want to chat or offer a job,
          </motion.h3>
        </Hide>
        <Hide>
          <motion.h3 variants={imgAnim} className="desk">
            feel free to contact me either on social media
          </motion.h3>
        </Hide>
        <Hide>
          <motion.h3 variants={imgAnim} className="desk">
            or via my contact details.
          </motion.h3>
        </Hide>
        <Hide className="mobile">
          <motion.h2 variants={titleAnim}>Let's Get In Touch</motion.h2>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim} className="mobile">
            Doesn't matter if you just want to chat
          </motion.h3>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim} className="mobile">
            or offer a job, feel free to contact
          </motion.h3>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim} className="mobile">
            me either on social media or
          </motion.h3>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim} className="mobile">
            via my contact details.
          </motion.h3>
        </Hide>
      </motion.div>
      <motion.div className="contacts">
        <motion.span>
          <Hide>
            <motion.h3 variants={titleAnim}>EMAIL</motion.h3>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim}>
              <a href="mailto:janvinsha@gmail.com">janvinsha@gmail.com</a>
            </motion.h4>
          </Hide>
        </motion.span>

        <motion.span>
          <Hide>
            <motion.h3 variants={titleAnim}>MOBILE</motion.h3>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim}>+2348025132897</motion.h4>
          </Hide>
        </motion.span>
        <motion.span>
          <Hide>
            <motion.h3 variants={titleAnim}>LOCATION</motion.h3>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim}>Benue, Nigeria</motion.h4>
          </Hide>
        </motion.span>
        <motion.span>
          <Hide>
            <motion.h3 variants={titleAnim}></motion.h3>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim}></motion.h4>
          </Hide>
        </motion.span>
      </motion.div>
      <Hide>
        <motion.div className="map">
          {/* <motion.div className="line"></motion.div> */}
          <motion.div
            variants={photoAnim}
            ref={element}
            animate={controls}
            initial="hidden"
          >
            <GoogleMapReact
              bootstrapURLKeys={
                {
                  // key: process.env.REACT_APP_API_KEY,
                }
              }
              defaultCenter={{
                lat: 7.7292535,
                lng: 8.4858848,
              }}
              defaultZoom={6}
            >
              <AnyReactComponent
                lat={7.7292535}
                lng={8.4858848}
                text="My Marker"
              />
            </GoogleMapReact>
          </motion.div>
        </motion.div>
      </Hide>
      <Footer />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  .in-touch {
    padding: 3rem 5rem;
    width: 50%;
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
    @media screen and (max-width: 900px) {
      padding: 0rem 1rem;
      width: 100%;
    }
    h2 {
      padding: 1.4rem 0rem;
      @media screen and (max-width: 900px) {
        padding: 0.6rem 0rem;
      }
    }
    h3 {
      line-height: 1.7rem;
      @media screen and (max-width: 900px) {
        width: 100%;
        line-height: 1.6rem;
      }
    }
  }
  .contacts {
    padding: 3rem 5rem;
    padding-bottom: 6rem;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
      padding: 1rem 1rem;
      padding-bottom: 1rem;
      flex-flow: column wrap;
      align-items: center;
    }
    span {
      display: flex;
      flex-flow: column wrap;
      @media screen and (max-width: 900px) {
        padding: 0.6rem 0rem;
        align-items: center;
      }

      h3 {
      }
      h4 {
        font-size: 1.2rem;
      }
    }
  }
  .map {
    height: 30rem;
    @media screen and (max-width: 900px) {
      height: 20rem;
    }
    width: 100%;
    /* .line {
      height: 0.2rem;
      background: #50c1e9;
    } */
    div {
      height: 100%;
      width: 100%;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default Contact;
