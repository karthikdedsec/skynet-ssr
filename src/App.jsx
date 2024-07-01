import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
