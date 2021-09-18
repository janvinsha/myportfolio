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
      images: [wandart2, wandart1, wandart4],
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    },
    {
      title: "Janvinsha Stores",
      subTitle: "An E-commerce website",
      url: "/project/janvinsha-stores",
      liveLink: "https://janvinshastores.herokuapp.com",
      mainImg: jvs1,
      images: [jvs2, jvs3, jvs4],
    },
    {
      title: "Ignite",
      subTitle: "Get details about your favorite games",
      url: "/project/ignite",
      liveLink: "https://jvsignite.herokuapp.com",
      mainImg: ignite2,
      images: [ignite1, ignite3, ignite4],
    },
    {
      title: "Capture",
      subTitle: "A portfolio site",
      url: "/project/capture",
      liveLink: "https://jvscapture.herokuapp.com",
      mainImg: capture1,
      images: [capture2, capture3, capture4],
    },
  ];
};
