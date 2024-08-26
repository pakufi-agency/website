import React, { FC, Fragment } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
import Experience from "../components/Experience";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import About from "../components/About";
import Faq from "../components/Faq";
import TeamHome from "../components/TeamHome";
import Facts from "../components/Facts";
import WorkInProgress from "../components/WorkInProgress";

const ONLINE = false;

const HomeTwo: FC = () => {
  return (
    <Layout pageTitle="Pakufi | Ethical Tech Agency">
      <Header
        heroLogo="/assets/images/logo/Logo-white.svg"
        headerClass="header__area-2"
        menuClass="main-menu-2"
        sideMenuClass="icon-white"
      />
      <main>
        {ONLINE ? (
          <Fragment>
            <HeroTwo />
            <About
              subTitle="Who we are"
              titleFirst="We dream a world where there are no borders"
              titleSecond="and this is how we want to achieve it"
            />

            <div> HOW DO WE WORK </div>
            <Facts />
            <Experience />
            <TeamHome subTitle="Team Members" />
            <Faq />
            <LetsWork />
          </Fragment>
        ) : (
          <WorkInProgress />
        )}
      </main>
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
