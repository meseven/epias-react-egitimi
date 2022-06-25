import React from "react";
import Header from "./Header";
import Content from "./Content";
import Filter from "./Filter";
import Footer from "./Footer";

function Container() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <Filter />
      </section>

      <Footer />
    </>
  );
}

export default Container;
