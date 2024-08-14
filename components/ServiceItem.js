import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const ServiceItem = ({serviceIcon, serviceTitle, serviceDesc, serviceLink}) => {
    return (
        <Col xl={4} lg={6} md={6}>
            <div className="single__bg">
                <div className="single__service">
                    <div className="single__service-icon">
                        <img src={serviceIcon} alt="icon"/>
                    </div>
                    <div className="single__service-content">
                        <h3>{serviceTitle}</h3>
                        <p>{serviceDesc}</p>
                    </div>
                    <div className="single__service-link">
                        <Link href={serviceLink}>
                            <a className="s-btn">Find out more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ServiceItem;