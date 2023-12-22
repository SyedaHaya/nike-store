import React from "react";

import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/Data.js";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Sales from "./components/Sales.jsx";
import FlexContent from "./components/FlexContent.jsx";
import Stories from "./components/Stories.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />

        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerApi={footerAPI} />
    </>
  );
};

export default App;
