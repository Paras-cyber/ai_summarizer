// Footer.jsx
import React from "react";
import Typed from "react-typed";

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center flex-col'>
      <span >
        Created By ❤️
        <Typed
          strings={[
            "<span style='color: #4e45d5; font-weight: bold;'>Paras</span>",
          ]}
          typeSpeed={100}
          backSpeed={80}
          backDelay={1000}
          loop
          dangerouslySetInnerHTML
        />
      </span>
    </footer>
  );
};

export default Footer;
