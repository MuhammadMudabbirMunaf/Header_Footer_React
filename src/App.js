import React from "react";

// Page 1
import Nav from "./components/Nav";
import Card from "./components/Card";
import RestName from "./components/RestName"
// import Footer from "./components/Footer";

// Page 2
// import Nav2 from "./components2/Nav2"
// import Footer2 from "./components2/Footer2";
import RestName2 from "./components2/RestName2";
import ContDetails2 from "./components2/ContDetails2";

// Page 3
// import Nav3 from "./components3/Nav3";
// import Footer3 from "./components3/Footer3";
import RestName3 from "./components3/RestName3";
import AboutDetails3 from "./components3/AboutDetails3";

// Page 4
// import Nav4 from "./components4/Nav4";
import Footer4 from "./components4/Footer4";
import RestName4 from "./components4/RestName4";
import MenuDetails4 from "./components4/MenuDetails4";

// Signup
import Signup from "./signup/signup";
import Login from "./signup/login";

function App() {
  return (
    <div>

      <Signup />
      <Login />

      <Nav />
      <RestName />
      <Card />
      {/* <Footer /> */}

      {/* <Nav2 /> */}
      <RestName2 />
      <ContDetails2 />
      {/* <Footer2 /> */}

      {/* <Nav3 /> */}
      <RestName3 />
      <AboutDetails3 />
      {/* <Footer3 /> */}

      {/* <Nav4 /> */}
      <RestName4 />
      <MenuDetails4 />
      <Footer4 />
    </div>
  );
}

export default App;