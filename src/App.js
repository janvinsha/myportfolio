import React, { useState } from "react";
//Import Pages
import { Home, Contact, ProjectDetails, About } from "./pages";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import { GlobalStyle, Nav } from "./components";
//Context
import ThemeContext from "./context/themeContext";
function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <GlobalStyle theme={theme} />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/project/:id" exact>
              <ProjectDetails />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
