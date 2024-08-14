import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import PortfolioItem from './PortfolioItem';

const PORTFOLIO_DATA = [
    {
      portfolioImg:"/assets/images/portfolio/portfolio-1.jpg",
      portfolioCat:"UI/UX Design",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
      id:"ui/ux"
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio-5.jpg",
      portfolioCat:"Marketing",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
      id:"marketing"
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio-3.jpg",
      portfolioCat:"Development",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
      id:"development"
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio-5.jpg",
      portfolioCat:"Content Writing",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
      id:"writing"
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio-3.jpg",
      portfolioCat:"Social Ad",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
      id:"development"
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio-1.jpg",
      portfolioCat:"App Design",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
      id:"ui/ux"
    },
  ];

const Services = () => {
    const [items, setItems] = useState(PORTFOLIO_DATA);
    const filterItem = (catItem) => {
        const updatedItems = PORTFOLIO_DATA.filter((currentItem) => {
            return currentItem.id === catItem;
        })
        setItems(updatedItems);
    }
    return (

            <section className="portfolio__area fix p-relative pb-90">
                <div className="portfolio__shape">
                    <img className="portfolio-s-1" src="/assets/images/shape/portfolio/portfolio-s-1.png" alt=""/>
                    <img className="portfolio-s-2" src="/assets/images/shape/portfolio/portfolio-s-2.png" alt=""/>
                    <img className="portfolio-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/portfolio-s-3.png" alt=""/>
                    <img className="portfolio-s-4" src="/assets/images/shape/portfolio/portfolio-s-4.png" alt=""/>
                </div>
                <Container>
                    <Row>
                        <Col xl={9}>
                            <div className="portfolio__wrapper">
                                <div className="portfolio__content">
                                    <div className="portfolio__title">
                                        <SectionTitle subTitle="Portfolio"
                                        titleFirst="Some of our amazing works"/> 
                                    </div>
                                    <div className="portfolio__menu">
                                        <button onClick={()=>setItems(PORTFOLIO_DATA)}>Show All</button>
                                        <button onClick={()=>filterItem('ui/ux')}>UI/UX Design</button>
                                        <button onClick={()=>filterItem('marketing')}>Marketing</button>
                                        <button onClick={()=>filterItem('development')}>Development</button>
                                        <button onClick={()=>filterItem('writing')}>Content Writing</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-150">       
                    {items.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                    <PortfolioItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioCat={portfolioCat}
                                    portfolioTitle={portfolioTitle}
                                    portfolioLink={portfolioLink}
                                    />
                                )
                            )}  
                    </Row> 
                </Container>      
            </section>                               
                                                          
                   
    );
};

export default Services;