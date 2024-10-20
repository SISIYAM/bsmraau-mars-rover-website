import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (
  //       (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I
  //       (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J
  //       (event.ctrlKey && event.key === "U") || // Ctrl + U
  //       event.key === "F12" // F12
  //     ) {
  //       event.preventDefault();
  //       alert("Inspecting is disabled!");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  // useEffect(() => {
  //   const disableRightClick = (event) => event.preventDefault();
  //   window.addEventListener("contextmenu", disableRightClick);

  //   return () => {
  //     window.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
