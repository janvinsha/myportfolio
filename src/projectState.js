//Import Images
import wandart1 from "./images/wandart1.png";
import wandart2 from "./images/wandart2.png";
import wandart3 from "./images/wandart3.png";
import wandart4 from "./images/wandart4.png";

import jvs1 from "./images/jvs1.png";
import jvs2 from "./images/jvs2.png";
import jvs3 from "./images/jvs3.png";
import jvs4 from "./images/jvs4.png";

import ignite1 from "./images/ignite1.png";
import ignite2 from "./images/ignite2.png";
import ignite3 from "./images/ignite3.png";
import ignite4 from "./images/ignite4.png";

import capture1 from "./images/capture1.png";
import capture2 from "./images/capture2.png";
import capture3 from "./images/capture3.png";
import capture4 from "./images/capture4.png";

import mobileWandart from "./images/mobileWandart.png";
import mobileJvs from "./images/mobileJvs.png";
import mobileCapture from "./images/mobileCapture.png";
import mobileIgnite from "./images/mobileIgnite.png";

export const ProjectState = () => {
  return [
    {
      title: "Wandart",
      subTitle: "The fastest growing wallpaper and art community",
      url: "/project/wandart",
      liveLink: "https://wandart.art",
      about: "",
      builtUsing: "",
      mainImg: wandart3,
      mobileImg: mobileWandart,
      images: [wandart2, wandart1, wandart4],
      details:
        "Wandart is a wallpaper and art community web application, The Frontend is built using React, Redux, Figma, Adobe illustrator, Framer-motion, Styled-components, Material-UI, Bootstrap, Font-awesome icons, Axios for fetching data from the REST-Api. The Backend is a REST-Api built using Node.js, MongoDB, Cloudinary storage, Coinbase payment, Paystack payment, JSON web tokens, the API is highly secured againts XSS attacks, DOS attacks, NoSQL injection attacks and well authenticated using JSON web tokens. There is availability for subscription service which is well authenticated using webhooks from both Coinbase and Paystack payments",
    },
    {
      title: "Janvinsha Stores",
      subTitle: "An E-commerce website",
      url: "/project/janvinsha-stores",
      liveLink: "https://janvinshastores.herokuapp.com",
      mainImg: jvs1,
      mobileImg: mobileJvs,
      images: [jvs2, jvs3, jvs4],
      details:
        "Janvinsha Stores is an e-commerce web application, The Frontend is built using React, Redux, Figma, Framer-motion, Styled-components, Bootstrap, Font-awesome icons, Axios for fetching data from the REST-Api. The Backend is a REST-Api built using Node.js, MongoDB, Cloudinary storage, Paystack payment, JSON web tokens, the API is highly secured againts XSS attacks, DOS attacks, NoSQL injection attacks and well authenticated using JSON web tokens  ",
    },
    {
      title: "Ignite",
      subTitle: "Get details about your favorite games",
      url: "/project/ignite",
      liveLink: "https://jvsignite.herokuapp.com",
      mainImg: ignite2,
      mobileImg: mobileIgnite,
      images: [ignite1, ignite3, ignite4],
      details:
        "Ignite is a website built to give information about games. In this website you can search for games and also see the recently released games and upcoming games. The website was built using React, Redux, Figma, Framer-motion, Font-awesome icons, Axios for fetching data from Rawg io Api ",
    },
    {
      title: "Capture",
      subTitle: "A portfolio site",
      url: "/project/capture",
      liveLink: "https://jvscapture.herokuapp.com",
      mainImg: capture1,
      mobileImg: mobileCapture,
      images: [capture2, capture3, capture4],
      details:
        "Capture is a demo portfolio site built to show my skill in React, it was built using React, Framer-motion, Styled-components, Font-awesome icons and Figma",
    },
  ];
};
