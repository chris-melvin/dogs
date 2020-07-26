import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}

      <footer className="myFooter">
        <span>
          All images from <a href="https://dog.ceo/dog-api/">this</a> API
        </span>
      </footer>
    </div>
  );
};

export default Layout;
