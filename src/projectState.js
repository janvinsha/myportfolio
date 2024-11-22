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

import yoocidesk from "./images/yoocidesk.png";
import yoocimob from "./images/yoocimob.png";

import storedesk from "./images/storedesk.png";
import storemob from "./images/storemob.png";

import voicedesk from "./images/voicedesk.png";
import voicemob from "./images/voicemob.png";

import imiodesk from "./images/imiodesk.png";
import imiomob from "./images/imiomob.png";

import soldesk from "./images/soldesk.png";
import solmob from "./images/solmob.png";

import omnidesk from "./images/omnidesk.png";
import omnimob from "./images/omnimob.png";

import nexdesk from "./images/nexdesk.png";
import nexmob from "./images/nexmob.png";
export const ProjectState = () => {
  return [
    {
      title: "Nexaero Labs",
      subTitle: "At NexAero Labs, we bring your digital vision to life with professional, fast, and affordable website solutions. Whether you’re a startup or an established brand, our expert team designs stunning, user-friendly websites that drive growth.",
      url: "/project/nexaerolabs",
      liveLink: "https://www.nexaerolabs.com/",
      about: "",
      builtUsing: "",
      mainImg: nexdesk,
      mobileImg: nexmob,
      images: [nexdesk],
      details: "Frontend: Next.js, shadcn, Tailwind",
    },
    {
      title: "Omnivote",
      subTitle:
        "OmniVote is a decentralized voting platform that allows users to create and manage proposals across multiple blockchain networks seamlessly. By leveraging Chainlink's Cross-Chain Interoperability Protocol (CCIP), OmniVote enables smart contracts on different blockchains to communicate with each other, ensuring a truly omnichain governance experience. The platform supports decentralized identity and cross-chain governance to provide secure, tamper-proof voting.",
      url: "/project/omnivote",
      liveLink: "https://www.omnivote.xyz",
      about: "",
      builtUsing: "",
      mainImg: omnidesk,
      mobileImg: omnimob,
      images: [omnidesk],
      details: "Frontend: Next.js, shadcn, Tailwind Backend: Express.js, MongoDB. Blockchain: Chainlink CCIP for cross-chain communication. Identity & Security: Wagmi for authentication. Storage: MongoDB for proposals, DAO, and voting data",
    },
    {
      title: "Solend Lite",
      subTitle:
        " Solend Lite is meant to be a lightweight version of Solend, which is the largest lending protocol on Solana",
      url: "/project/solend-lite",
      liveLink: "https://lite.solend.fi/",
      about: "",
      builtUsing: "",
      mainImg: soldesk,
      mobileImg: solmob,
      images: [soldesk],
      details:
        "Solend Lite is meant to be a lightweight version of Solend, which is the largest lending protocol on Solana, it is meant to be a fallback incase the main Solend website is unavailable and also a decentralized UI for the protocol. Solend Lite was built to focus on pulling data on chain without relying on the API or SDK.",
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
    // {
    //   title: "Kasuwa",
    //   subTitle:
    //     "Kasuwa is built on the new Seaport protocol, this marketplace allows users to mint nfts, create profiles, cross swap tokens and list nfts for other nfts and/or tokens. This marketplace aims to be the best in the market, as it allows users to create a brand new nfts and lists them or list previously owned nfts, the great thing about the market is that you can list more than one nft and request that the fulfiller pays a token and/or other nfts, this marketplace accommodates all chains and tokens.",
    //   url: "/project/kasuwa",
    //   liveLink: "https://kasuwa-hackfs.vercel.app/",
    //   mainImg: kas,
    //   mobileImg: kasMob,
    //   details:
    //     "Kasuwa is built on the new Seaport protocol, the frontend facing app is created using Nextjs and typescript, and designed using styled components from scratch. Nftport is used to create a collection and allows users to mint brand new nfts with their preferred image. on Polygon Mainnet. Swing SDK is used to provide cross-chain swap to the marketplace so users can swap tokens from different chains for little fees. Tableland serves as the database of the application as all user profiles and listings are stored on tableland. Covalent API was used to get users assets which is displayed on the profile page for easy access to list. Poap is used for token gating as only users who have attended a particular event will be permitted to use the application. The project was published on Valist and hosted on Spheron.",
    // },
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
      title: "Janvinsha Stores",
      subTitle: "An E-commerce website",
      url: "/project/janvinsha-stores",
      liveLink: "https://janvinshastores.netlify.app/",
      mainImg: jvs1,
      mobileImg: mobileJvs,
      images: [jvs2, jvs3, jvs4],
      details:
        "Janvinsha Stores is an e-commerce web application, The Frontend is built using React, Redux, Figma, Framer-motion, Styled-components, Bootstrap, Font-awesome icons, Axios for fetching data from the REST-Api. The Backend is a REST-Api built using Node.js, MongoDB, Cloudinary storage, Paystack payment, JSON web tokens, the API is highly secured againts XSS attacks, DOS attacks, NoSQL injection attacks and well authenticated using JSON web tokens.  ",
    },

    // {
    //   title: "Wave",
    //   subTitle: "Connect your wallet and say Hello to me",
    //   url: "/project/wave",
    //   liveLink: "https://waveportal-starter-project.jandevincent.repl.co/",
    //   mainImg: wave1,
    //   mobileImg: wave2,
    //   images: [wave1],
    //   details:
    //     "A decentralized application where users can connect wallet and anonymously send me a message. The smart contract was created using openzeppelin and hardhat environment.  The Frontend is created using React, ethers is used to connect to the smart contract.",
    // },
    {
      title: "Yooci",
      subTitle:
        "Yooci is blockchain application that utilizes Nfts to store health records that are only accessible to the owner or organizations given access to by the user",
      url: "/project/yooci",
      liveLink: "https://yooci.vercel.app/",
      mainImg: yoocidesk,
      mobileImg: yoocimob,
      details:
        "Yooci is blockchain application that utilizes Nfts to store health records that are only accessible to the owner or organizations given access to by the user",
    },
    {
      title: "Imio",
      subTitle:
        "Imio is built on the Zora protocol, it is a ticketing marketplace that allows event coordinators to create events that are Nft collections and allow users to mint Nfts for the event",
      url: "/project/imio",
      liveLink: "https://imio-zora.vercel.app/",
      mainImg: imiodesk,
      mobileImg: imiomob,
      details:
        "In a normal Ticketing system, you throw away the tickets and create waste, But with Imio, you can verify tickets easily by scanning the qr-code of the ticket, NFTs can also be sold, and if an NFT is sold the event creator gets royalties, even after your event you are still earning from it.",
    },

    {
      title: "Ignite",
      subTitle: "Get details about your favorite games",
      url: "/project/ignite",
      liveLink: "https://jvs-ignite.netlify.app/",
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
      liveLink: "https://github.com/janvinsha/capture",
      mainImg: capture1,
      mobileImg: mobileCapture,
      images: [capture2, capture3, capture4],
      details:
        "Capture is a demo portfolio site built to show my skill in React, it was built using React, Framer-motion, Styled-components, Font-awesome icons and Figma.",
    },

    // {
    //   title: "Unreal Market",
    //   subTitle:
    //     "This Marketplace is truly unreal, users can create collections and add Nfts to that collection, edit their profile, and comment on their favorite Nfts. Users can buy crypto using fiat and also cross swap tokens to fit their spending needs on the marketplace. This marketplace tries to fit in all the needs of the user without necessarily moving to another Dapp",
    //   url: "/project/unreal-market",
    //   liveLink: "http://unreal-market.netlify.app/",
    //   mainImg: unre,
    //   mobileImg: unre,
    //   details:
    //     "A lot of sponsors' technologies were used as they were beneficial to the project. Two smart contracts were written, one deployed using Hardhart to POLYGON Mumbai tesnet, the other an airdrop contract which utilizes WORLDCOIN deployed using ZSYNC. 3 sponsors tech was integrated for login WALLETCONNECT, UNSTOPPABLE DOMAINS, and COINBASE WALLET. IPFS was used to upload all NFT and image data. A subgraph was created using THEGRAPH to query blockchain data. TRANSAK was integrated to allow users buy crypto using Fiat currency. SWING was used to build a cross chain swap. WAKU was used to allow users to comment on NFT. COVALENT was used to query NFT transaction history data",
    // },
    // {
    //   title: "SpeakOut",
    //   subTitle:
    //     "SpeakOut is a web3 social media platform where users can connect and share their experiences",
    //   url: "/project/speakout",
    //   liveLink: "https://speak-out.netlify.app/",
    //   mainImg: so1,
    //   mobileImg: somob,
    //   details:
    //     "This project is a blockchain social media application where users connect and share their experiences, users can decide to go anonymous too. The web application allows users to make posts, shorts(short videos, uploaded using LivePeer API), create comments, collect comments and posts which is stored in the users library, edit profile, follow users, etc. The web application uses Lens Protocol which is a Web3 social graph on the Polygon Proof-of-Stake blockchain for almost all app data. Lens Api is used throughout the application to give users seamless experience in interacting with the blockchain.",
    // },
    // {
    //   title: "Voice Dao",
    //   subTitle: "",
    //   url: "/project/voicedao",
    //   liveLink: "https://voicedao.netlify.app/",
    //   mainImg: voicedesk,
    //   mobileImg: voicemob,
    //   details:
    //     "This project is a blockchain social media application where users connect and share their experiences, users can decide to go anonymous too. The web application allows users to make posts, shorts(short videos, uploaded using LivePeer API), create comments, collect comments and posts which is stored in the users library, edit profile, follow users, etc. The web application uses Lens Protocol which is a Web3 social graph on the Polygon Proof-of-Stake blockchain for almost all app data. Lens Api is used throughout the application to give users seamless experience in interacting with the blockchain.",
    // },
    // {
    //   title: "Storeama",
    //   subTitle:
    //     "Storeama is a decentralized storage platform on the Filecoin virtual network, it utilizes ipfs and a smart contract to store all kinds of filex, ranging from audio, video and documents",
    //   url: "/project/storeama",
    //   liveLink: "https://storeama.netlify.app/",
    //   mainImg: storedesk,
    //   mobileImg: storemob,
    //   details:
    //     "Storeama is a decentralized storage platform on the Filecoin virtual network, it utilizes ipfs and a smart contract to store all kinds of filex, ranging from audio, video and documents. Storeama helps organize and store files which can be accessed easily. Storeama is like google drive but for blockchain        ",
    // },
   
    // {
    //   title: "Zenith Market",
    //   subTitle:
    //     "An NFT market built using Moralis and depolyed to the Polygon Mumbai testnet",
    //   url: "/project/zenith-market",
    //   liveLink: "https://zenith-market.netlify.app/",
    //   mainImg: zm1,
    //   mobileImg: zn3,
    //   details: "A community driven NFT marketplace",
    // },

    // {
    //   title: "Buidl Domain Service",
    //   subTitle:
    //     "An NFT market built using Moralis and depolyed to the Polygon Mumbai testnet",
    //   url: "/project/buidl-dns",
    //   liveLink: "http://buidl-domain-service-frontend.vercel.app/",
    //   mainImg: bns1,
    //   mobileImg: bns1,
    //   details:
    //     "This is a domain service Web3 Dapp where you can mint domains and set records for domains, domains minted can be viewed on OpenSea as NFT's",
    // },

 
    // {
    //   title: "NFT Collection",
    //   subTitle: "Connect your wallet and say Hello to me",
    //   url: "/project/nft-collection",
    //   liveLink: "https://nft-starter-project.jandevincent.repl.co/",
    //   mainImg: nft1,
    //   mobileImg: nft2,
    //   images: [nft1],
    //   details:
    //     "An NFT collection created using openzeppelin and hardhat environment, deployed on Rinkeby Testnet. The Frontend is created using React, ethers is used to connect to the smart contract, collection can be viewed on Open Sea.",
    // },
    // {
    //   title: "DemonSlayerDAO",
    //   subTitle: "A DAO build with using ThirdWeb and React",
    //   url: "/project/dao",
    //   liveLink: "https://demonslayerdao.netlify.app/",
    //   mainImg: dao1,
    //   mobileImg: dao2,
    //   images: [dao1],
    //   details:
    //     "A decentralized autonomous organization created using ThirdWeb, a platform where smart contracts can be created with various or no language. A membership NFT and a governance token was created to enable users who have the NFT and token Vote on proposals. The token was Airdropped to early users. ",
    // },
   
  ];
};
