import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import useWindowSize from "./hooks/useWindowSize";
import MNav2 from "./components/RightMenu";

function layout({ children }) {
  const screen = useWindowSize();

  return (
    <>
      {screen.width > 991 ? (
        <>
          <Navbar />
          <div className="pt-16">{children}</div>
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
