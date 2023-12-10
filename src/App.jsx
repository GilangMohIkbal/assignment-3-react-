import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Awards from "./pages/Awards";
import ExperienceDetail from "./pages/ExperienceDetail";

class App extends React.Component {
  render() {
    return (
      <section className="h-100 w-100" style={{ boxSizing: "border-box" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/experience" element={<Experience></Experience>}>
            <Route
              path=":experienceId"
              element={<ExperienceDetail></ExperienceDetail>}
            ></Route>
          </Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/interest" element={<Interest></Interest>}></Route>
          <Route path="/awards" element={<Awards></Awards>}></Route>
        </Routes>
      </section>
    );
  }
}
export default App;
