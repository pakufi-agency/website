import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioTwoItem from './PortfolioTwoItem';

const PORTFOLIO_ALL = [
    {
      portfolioImg:"/assets/images/portfolio/p-1.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"UI/UX Design",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-2.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Web Development",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-3.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-4.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-5.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-6.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];


  const PORTFOLIO_UI = [
    {
      portfolioImg:"/assets/images/portfolio/p-2.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Web Development",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-3.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-5.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];


  const PORTFOLIO_MARKETING = [
    {
      portfolioImg:"/assets/images/portfolio/p-1.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"UI/UX Design",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-2.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Web Development",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-4.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-6.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];

  const PORTFOLIO_DEVELOPMENT = [
    {
      portfolioImg:"/assets/images/portfolio/p-1.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"UI/UX Design",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-3.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-4.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Digital Marketing",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    },
    {
      portfolioImg:"/assets/images/portfolio/p-5.jpg",
      portfolioLink:"/single-portfolio",
      portfolioTitle:"Branding Special",
      portfolioText:"Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.",
    }
  ];

const PortfolioTwo = ({extraClass}) => {
    return (
        <section className={`portfolio__area fix p-relative pt-115 ${extraClass}`}>
            <div className="portfolio__shape-2">
                <img className="p-s-1  d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-1.png" alt=""/>
                <img className="p-s-2" src="/assets/images/shape/portfolio/p-s-2.png" alt=""/>
                <img className="p-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-3.png" alt=""/>
                <img className="p-s-4" src="/assets/images/shape/portfolio/p-s-4.png" alt=""/>
                <img className="p-s-5 d-none d-xxl-block" src="/assets/images/shape/portfolio/p-s-5.png" alt=""/>
            </div>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="portfolio__title-2 text-center">
                            <SectionTitle subTitle="Portfolio"
                            titleFirst="Some of our amazing works"
                            />                                 
                        </div>
                    </Col>
                </Row>
                <div className="portfolio-2">
                        <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu portfolio__menu-2"
                        >
                          <Tab eventKey="all" title="Show All">
                            <Row className="mt-70">
                            {PORTFOLIO_ALL.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>  
                          <Tab eventKey="ui" title="UI/UX Design">
                            <Row className="mt-70">
                            {PORTFOLIO_UI.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="marketing" title="Marketing">
                            <Row className="mt-70">
                            {PORTFOLIO_MARKETING.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-70">
                            {PORTFOLIO_DEVELOPMENT.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioLink={portfolioLink}
                                  portfolioTitle={portfolioTitle}
                                  portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                      </Tabs>  
                    </div> 
            </Container>      
        </section>
    );
};

export default PortfolioTwo;