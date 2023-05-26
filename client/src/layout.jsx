import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import useWindowSize from "./hooks/useWindowSize";
import MNav from "./components/MobileNavigation";
import MNav2 from "./components/RightMenu";

function layout({ children }) {
  const screen = useWindowSize();

  return (
    <>
      {screen.width > 991 ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <MNav2 />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default layout;
