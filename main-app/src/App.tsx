import { useState } from "react";
import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
// import HomePage from 'homePage/HomePage';
// import WeatherPage from 'weatherPage/Weather';
const HomePage = React.lazy(() => import("homePage/HomePage"));
const WeatherPage = React.lazy(() => import("weatherPage/Weather"));

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading ...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<><HomePage /> <WeatherPage /> </> } />
            <Route path="/product-list" element={<WeatherPage />} />
            <Route path="/search-bar" element={<HomePage />} />
          </Routes>

          {/* <HomePage  />
          <WeatherPage  /> */}
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
