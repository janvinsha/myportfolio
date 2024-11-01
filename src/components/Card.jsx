import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import {

  fade

} from "../animation";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Card = ({ variants, project }) => {
  const [element, controls] = useScroll();

  return (
    <Hide>
      <motion.div
        className="project"
        variants={variants || fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <Link to={`${project.url}`}>
          <motion.div className="card">
            <img src={project.mainImg} alt="photo" />
            <ArrowRightAltIcon className="ico" />
            <span className="title">{project.title}</span>
          </motion.div>
        </Link>
      </motion.div>
    </Hide>
  );
};

const Hide = styled.div`
  overflow: hidden;
  .title{
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
  }
`;

export default Card;
