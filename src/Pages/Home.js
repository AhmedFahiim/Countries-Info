import React from "react";
import { Header, Filters, GenerateCountries } from "../Components";

const Home = () => {
  return (
    <main className="home-page">
      <Header />
      <Filters />
      <article className="generate-Countries">
        <div className="container">
          <div className="row">
            <GenerateCountries />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
