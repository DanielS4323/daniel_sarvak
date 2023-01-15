import React from "react";
import Footer from "../UI/Footer";
import NavBar from "../UI/NavBar";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
