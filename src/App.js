import React, { useState, lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const SearchParams = lazy(() => import('./SearchParams'))
const Details = lazy(() => import("./Details"))

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar/>
        <Suspense fallback={<h1>Loading Route!</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));