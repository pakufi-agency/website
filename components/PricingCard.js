import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const PricingCard = ({extraClass, priceTitle, priceText, amount, amountTag, listOne, listTwo, listThree, listFour, listFive}) => {
    return (
        <Col xl={4} lg={4} md={6}>    
            <div className={`pricing__box ${extraClass}`}>    
                <div className="pricing__header">    
                    <h3>{priceTitle}</h3> 
                    <p>{priceText}</p>
                </div>
                <div className="pricing__amount">
                    <h2>{amount}<span>{amountTag}</span></h2>
                </div>                                               
                <div className="pricing__item">    
                    <ul>    
                        <li>{listOne}</li>    
                        <li>{listTwo}</li>    
                        <li>{listThree}</li>    
                        <li>{listFour}</li>    
                        <li>{listFive}</li>    
                    </ul>    
                </div>
                <div className="pricing__link">   
                    <Link href="/contact">
                        <a className="m-btn">Purchase Now</a>    
                    </Link> 
                </div>                                                
            </div>    
        </Col>
    );
};

export default PricingCard;