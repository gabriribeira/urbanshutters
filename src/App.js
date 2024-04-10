import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  useEffect(() => {
    document.title = "Urban Shutters";
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
