import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Team from "../components/team";

const BandPage = (): JSX.Element => (
  <main className="max-w-full">
    <Helmet>
      <title>Gatsby + Node.js (TypeScript) API</title>
    </Helmet>
    <Hero/>
    <Team/>
    <Footer/>
  </main>
);

export default BandPage;
