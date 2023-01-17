import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import NewStories from "./NewStories";
import NewComments from "./NewComment"
function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newstories" element={<NewStories />} />
        <Route path="/newcomments" element={<NewComments />} />
        <Route path='/search' element={<Search />} /> 
      </Routes>
    </>
  );

}

export default App;
