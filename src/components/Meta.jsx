import React, { useContext } from "react";
import { Helmet } from "react-helmet";
//Redux
import { useSelector } from "react-redux";
//Context
import ThemeContext from "../context/themeContext";

const Meta = ({ title, description, keywords }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {theme ? (
        <meta name="theme-color" content="#0f0f0f" />
      ) : (
        <meta name="theme-color" content="#ffffff" />
      )}
      {theme ? (
        <meta name="msapplication-navbutton-color" content="#0f0f0f" />
      ) : (
        <meta name="msapplication-navbutton-color" content="#ffffff" />
      )}
      {theme ? (
        <meta name="apple-mobile-web-app-status-bar-style" content="#0f0f0f" />
      ) : (
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
      )}
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Janvinsha's Portfolio",
  keywords: "Janvinsha",
};
export default Meta;
