import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const HeroService = ({serviceIcon, serviceTitle, serviceDesc, serviceLink, bgClass, iconClass, btnClass}) => {
    return (
        <Col xl={4} lg={4} md={6}>
            <div className={`single__bg ${bgClass}`}>
                <div className="single__service single__service-2">
                    <div className={`single__service-icon ${iconClass}`}>
                        <img src={serviceIcon} alt="icon"/>
                    </div>
                    <div className="single__service-content single__service-content-2">
                        <h3>{serviceTitle}</h3>
                        <p>{serviceDesc}</p>
                    </div>
                    <div className="single__service-link">
                        <Link href={serviceLink}>
                            <a className={`s-btn ${btnClass}`}>Find out more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Col> 
    );
};

export default HeroService;