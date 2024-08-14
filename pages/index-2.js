import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
import Maxdi from "../components/Maxdi";
import PortfolioTwo from "../components/PortfolioTwo";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Customer from "../components/Customer";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const HomeTwo = () => {
  return (
    <Layout pageTitle="Maxdi | Business & Digital Agency">
      <Header heroLogo="/assets/images/logo/Logo-white.svg"
      headerClass="header__area-2"
      menuClass="main-menu-2"
      sideMenuClass="icon-white"
      />      
      <main>
        <HeroTwo/>      
        <Maxdi/>      
        <PortfolioTwo extraClass="pb-120"/>      
        <Project subTitle="25 Years Of Experience"/>       
        <Testimonial testimonialArea="testimonials__area-2" paddingTop="pt-110"/>     
        <Pricing extraClass="mt-105"/>      
        <Customer/>      
        <BlogHome extraClass="pt-60"/>      
        <LetsWork/>
      </main> 
      <Footer/>     
    </Layout>
  );
};

export default HomeTwo;
