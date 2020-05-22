import React from "react";
import AppBar from "material-ui/AppBar";

const NavBar = () => {
  return (
    <>
      <AppBar
        title="Image finder with Pixabay API, made with ❤️ by Lucian Iernye"
        titleStyle={{
          textAlign: "center",
          color: "#1C1C31",
        }}
      />
    </>
  );
};

export default NavBar;
