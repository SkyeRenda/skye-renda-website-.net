import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import AppRoutes from "./AppRoutes"

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

 

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Layout innerWidth={windowSize.innerWidth}>
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return (
                  <Route
                    key={index}
                    {...rest}
                    element={element}
                  />
                );
              })}
            </Routes>
          </Layout>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
