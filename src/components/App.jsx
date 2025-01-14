import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";
import Study from "./Study";
import StudyEachItem from "./StudyEachItem";
import SplashScreen from "./Splashscreen";
import StudyItemDetails from "./StudyItemDetails";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="/study" element={<Study />} />
          <Route path="/studyEach" element={<StudyEachItem />} />
          <Route path="/studyitemdetails" element={<StudyItemDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
