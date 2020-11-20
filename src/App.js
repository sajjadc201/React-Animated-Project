import React from "react";
import { Header } from "./component/Header";
import "./App.css";
import { Intro } from "./component/Intro";
import { WorkWithUs } from "./component/WorkWithUs";
import { NoiseLevel } from "./component/NoiseLevel";
import { SwithDevice } from "./component/SwithDevice";
import { Footer } from "./component/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <WorkWithUs />
      <NoiseLevel />
      <SwithDevice />
      <Footer />
    </div>
  );
};
