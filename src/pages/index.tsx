import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Band from "../components/band";
import Events from "../components/events";

const IndexPage = (): JSX.Element => (
  <main className="max-w-full">
    <Helmet>
      <title>Gatsby + Node.js (TypeScript) API</title>
    </Helmet>
    <Hero/>
    <Band/>
    <Events/>
    <Footer/>
  </main>
);

export default IndexPage;
