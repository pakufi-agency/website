import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PortfolioTwo from "../components/PortfolioTwo";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const TeamPage = () => {
    return (
        <Layout pageTitle="Maxdi | Business & Digital Agency">
            <PageHeader title="Portfolio" crumbTitle="Portfolio"/>
            <Header heroLogo="/assets/images/logo/logo.svg"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>    
                <PortfolioTwo extraClass="portfolio__area-2 pb-230"/>      
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default TeamPage;