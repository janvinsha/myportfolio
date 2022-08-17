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

import wave1 from "./images/wave1.png";
import wave2 from "./images/wave2.png";
import wave3 from "./images/wave3.png";

import nft1 from "./images/nft1.png";
import nft2 from "./images/nft2.png";

import dao1 from "./images/Dao1.png";
import dao2 from "./images/Dao2.png";

import market1 from "./images/market1.png";

import sc1 from "./images/sc1.png";
import sc2 from "./images/sc1.png";
import bm from "./images/bm.png";

import zn3 from "./images/zn3.png";
import zm1 from "./images/zm1.png";

import bns1 from "./images/bns1.png";

import somob from "./images/somo1.png";
import so1 from "./images/so1.png";

import kas from "./images/kas.png";
import kasMob from "./images/kasmob.png";

import unre from "./images/unre.png";
export const ProjectState = () => {
  return [
    {
      title: "Kasuwa",
      subTitle:
        "Kasuwa is built on the new Seaport protocol, this marketplace allows users to mint nfts, create profiles, cross swap tokens and list nfts for other nfts and/or tokens. This marketplace aims to be the best in the market, as it allows users to create a brand new nfts and lists them or list previously owned nfts, the great thing about the market is that you can list more than one nft and request that the fulfiller pays a token and/or other nfts, this marketplace accommodates all chains and tokens.",
      url: "/project/kasuwa",
      liveLink: "https://kasuwa-hackfs.vercel.app/",
      mainImg: kas,
      mobileImg: kasMob,
      details:
        "Kasuwa is built on the new Seaport protocol, the frontend facing app is created using Nextjs and typescript, and designed using styled components from scratch. Nftport is used to create a collection and allows users to mint brand new nfts with their preferred image. on Polygon Mainnet. Swing SDK is used to provide cross-chain swap to the marketplace so users can swap tokens from different chains for little fees. Tableland serves as the database of the application as all user profiles and listings are stored on tableland. Covalent API was used to get users assets which is displayed on the profile page for easy access to list. Poap is used for token gating as only users who have attended a particular event will be permitted to use the application. The project was published on Valist and hosted on Spheron.",
    },
    {
      title: "Unreal Market",
      subTitle:
        "This Marketplace is truly unreal, users can create collections and add Nfts to that collection, edit their profile, and comment on their favorite Nfts. Users can buy crypto using fiat and also cross swap tokens to fit their spending needs on the marketplace. This marketplace tries to fit in all the needs of the user without necessarily moving to another Dapp",
      url: "/project/unreal-market",
      liveLink: "http://unreal-market.netlify.app/",
      mainImg: unre,
      mobileImg: unre,
      details:
        "A lot of sponsors' technologies were used as they were beneficial to the project. Two smart contracts were written, one deployed using Hardhart to POLYGON Mumbai tesnet, the other an airdrop contract which utilizes WORLDCOIN deployed using ZSYNC. 3 sponsors tech was integrated for login WALLETCONNECT, UNSTOPPABLE DOMAINS, and COINBASE WALLET. IPFS was used to upload all NFT and image data. A subgraph was created using THEGRAPH to query blockchain data. TRANSAK was integrated to allow users buy crypto using Fiat currency. SWING was used to build a cross chain swap. WAKU was used to allow users to comment on NFT. COVALENT was used to query NFT transaction history data",
    },
    {
      title: "SpeakOut",
      subTitle:
        "SpeakOut is a web3 social media platform where users can connect and share their experiences",
      url: "/project/speakout",
      liveLink: "https://speak-out.netlify.app/",
      mainImg: so1,
      mobileImg: somob,
      details:
        "This project is a blockchain social media application where users connect and share their experiences, users can decide to go anonymous too. The web application allows users to make posts, shorts(short videos, uploaded using LivePeer API), create comments, collect comments and posts which is stored in the users library, edit profile, follow users, etc. The web application uses Lens Protocol which is a Web3 social graph on the Polygon Proof-of-Stake blockchain for almost all app data. Lens Api is used throughout the application to give users seamless experience in interacting with the blockchain.",
    },
    {
      title: "Brainly",
      subTitle: "An interactive web3 game",
      url: "/project/brainly",
      liveLink: "https://brainly-game.netlify.app/",
      mainImg: sc1,
      mobileImg: bm,
      details:
        "A highly interactive game where user mint a membership token to get access, play and compete with each other for the top position which is displayed on the dashboard",
    },
    {
      title: "Zenith Market",
      subTitle:
        "An NFT market built using Moralis and depolyed to the Polygon Mumbai testnet",
      url: "/project/zenith-market",
      liveLink: "https://zenith-market.netlify.app/",
      mainImg: zm1,
      mobileImg: zn3,
      details: "A community driven NFT marketplace",
    },
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
        "Wandart is a wallpaper and art community web application, The Frontend is built using React, Redux, Figma, Adobe illustrator, Framer-motion, Styled-components, Material-UI, Bootstrap, Font-awesome icons, Axios for fetching data from the REST-Api. The Backend is a REST-Api built using Node.js, MongoDB, Cloudinary storage, Coinbase payment, Paystack payment, JSON web tokens, the API is highly secured againts XSS attacks, DOS attacks, NoSQL injection attacks and well authenticated using JSON web tokens. There is availability for subscription service which is well authenticated using webhooks from both Coinbase and Paystack payments. This project is undergoing maintenance and as such down",
    },
    {
      title: "Buidl Domain Service",
      subTitle:
        "An NFT market built using Moralis and depolyed to the Polygon Mumbai testnet",
      url: "/project/buidl-dns",
      liveLink: "http://buidl-domain-service-frontend.vercel.app/",
      mainImg: bns1,
      mobileImg: bns1,
      details:
        "This is a domain service Web3 Dapp where you can mint domains and set records for domains, domains minted can be viewed on OpenSea as NFT's",
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
        "Janvinsha Stores is an e-commerce web application, The Frontend is built using React, Redux, Figma, Framer-motion, Styled-components, Bootstrap, Font-awesome icons, Axios for fetching data from the REST-Api. The Backend is a REST-Api built using Node.js, MongoDB, Cloudinary storage, Paystack payment, JSON web tokens, the API is highly secured againts XSS attacks, DOS attacks, NoSQL injection attacks and well authenticated using JSON web tokens.  ",
    },
    {
      title: "NFT Collection",
      subTitle: "Connect your wallet and say Hello to me",
      url: "/project/nft-collection",
      liveLink: "https://nft-starter-project.jandevincent.repl.co/",
      mainImg: nft1,
      mobileImg: nft2,
      images: [nft1],
      details:
        "An NFT collection created using openzeppelin and hardhat environment, deployed on Rinkeby Testnet. The Frontend is created using React, ethers is used to connect to the smart contract, collection can be viewed on Open Sea.",
    },
    {
      title: "DemonSlayerDAO",
      subTitle: "A DAO build with using ThirdWeb and React",
      url: "/project/dao",
      liveLink: "https://demonslayerdao.netlify.app/",
      mainImg: dao1,
      mobileImg: dao2,
      images: [dao1],
      details:
        "A decentralized autonomous organization created using ThirdWeb, a platform where smart contracts can be created with various or no language. A membership NFT and a governance token was created to enable users who have the NFT and token Vote on proposals. The token was Airdropped to early users. ",
    },
    {
      title: "Wave",
      subTitle: "Connect your wallet and say Hello to me",
      url: "/project/wave",
      liveLink: "https://waveportal-starter-project.jandevincent.repl.co/",
      mainImg: wave1,
      mobileImg: wave2,
      images: [wave1],
      details:
        "A decentralized application where users can connect wallet and anonymously send me a message. The smart contract was created using openzeppelin and hardhat environment.  The Frontend is created using React, ethers is used to connect to the smart contract.",
    },
    {
      title: "NFT Market",
      subTitle: "An NFT market on Polygon Network",
      url: "/project/nft-market",
      liveLink: "https://github.com/janvinsha/nft-market",
      mainImg: market1,
      mobileImg: market1,
      images: [market1],
      details:
        "NFT market place created using hardhat, solidity, openzeppelin and frontend created using Next.js and tailwind css. The project is not yet complete as I am still working on the UI.",
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
        "Ignite is a website built to give information about games. In this website you can search for games and also see the recently released games and upcoming games. The website was built using React, Redux, Figma, Framer-motion, Font-awesome icons, Axios for fetching data from Rawg io Api. ",
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
        "Capture is a demo portfolio site built to show my skill in React, it was built using React, Framer-motion, Styled-components, Font-awesome icons and Figma.",
    },
  ];
};
