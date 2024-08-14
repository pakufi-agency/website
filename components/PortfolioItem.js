import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const PortfolioItem = ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}) => {
    return (
        <Col xl={4} lg={4} md={6}>
            <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                    <img src={portfolioImg} alt="portfolio"/>
                    <div className="portfolio__text">
                        <p>{portfolioCat}</p>
                        <h3>
                            <Link href={portfolioLink}>
                                <a>{portfolioTitle}</a>
                            </Link>
                        </h3>  
                        <div className="portfolio__link">
                        <Link href={portfolioLink}>
                            <a><i className="fas fa-plus"></i></a>
                        </Link>
                        </div>                                  
                    </div>
                </div>                                
            </div>
        </Col>
    );
};

export default PortfolioItem;