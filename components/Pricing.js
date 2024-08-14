import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import PricingCard from './PricingCard';


const PRICING_MONTHLY = [
    {
        extraClass:"mb-30",
        priceTitle:"Professional",
        priceText:"A beautiful, simple website",
        amount:"$25.00",
        amountTag:"/monthly",
        listOne:"10 Pages Responsive Website",
        listTwo:"5 PPC Campaigns",
        listThree:"10 SEO Keywords",
        listFour:"5 Facebook Campaigns",
        listFive:"2 Video Campaigns",
    },
    {
        extraClass:"active mb-30",
        priceTitle:"Standard",
        priceText:"Creative design, premium website",
        amount:"$35.00",
        amountTag:"/monthly",
        listOne:"20 Pages Responsive Website",
        listTwo:"10 PPC Campaigns",
        listThree:"20 SEO Keywords",
        listFour:"10 Facebook Campaigns",
        listFive:"5 Video Campaigns",
    },
    {
        extraClass:" ",
        priceTitle:"Ultimate",
        priceText:"Dynamic website exclusive design",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"50 Pages Responsive Website",
        listTwo:"Unlimited Campaigns",
        listThree:"50 SEO Keywords",
        listFour:"100 Facebook Campaigns",
        listFive:"20 Video Campaigns",
    },
  ];


const PRICING_YEARLY = [
    {
        extraClass:"mb-30",
        priceTitle:"Professional",
        priceText:"A beautiful, simple website",
        amount:"$125.00",
        amountTag:"/yearly",
        listOne:"10 Pages Responsive Website",
        listTwo:"5 PPC Campaigns",
        listThree:"10 SEO Keywords",
        listFour:"5 Facebook Campaigns",
        listFive:"2 Video Campaigns",
    },
    {
        extraClass:"active mb-30",
        priceTitle:"Standard",
        priceText:"Creative design, premium website",
        amount:"$135.00",
        amountTag:"/yearly",
        listOne:"20 Pages Responsive Website",
        listTwo:"10 PPC Campaigns",
        listThree:"20 SEO Keywords",
        listFour:"10 Facebook Campaigns",
        listFive:"5 Video Campaigns",
    },
    {
        extraClass:" ",
        priceTitle:"Ultimate",
        priceText:"Dynamic website exclusive design",
        amount:"$499.00",
        amountTag:"/yearly",
        listOne:"50 Pages Responsive Website",
        listTwo:"Unlimited Campaigns",
        listThree:"50 SEO Keywords",
        listFour:"100 Facebook Campaigns",
        listFive:"20 Video Campaigns",
    },
  ];

const Pricing = ({extraClass}) => {
    return (
        <section className={`pricing__area fix p-relative pt-120 pb-90 ${extraClass}`}>
                <div className="pricing__shape">
                    <img className="p-shape-1" src="/assets/images/shape/pricing/p-s-1.png" alt=""/>
                    <img className="p-shape-2 d-none d-sm-block" src="/assets/images/shape/pricing/p-s-2.png" alt=""/>
                    <img className="p-shape-3 wow zoomIn" data-wow-delay=".8s" src="/assets/images/shape/pricing/p-s-3.png" alt=""/>
                    <img className="p-shape-4 d-none d-sm-block" src="/assets/images/shape/pricing/p-s-4.png" alt=""/>
                    <img className="p-shape-5" src="/assets/images/shape/pricing/p-s-5.png" alt=""/>
                </div>                
                <Container>
                    <Row>
                        <Col xl={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={12}>
                            <div className="pricing__title text-center">
                                <SectionTitle subTitle="Pricing Plan"
                                titleFirst="Find the Right Plan"
                                />                                 
                                <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p> 
                            </div>                            
                        </Col>                        
                    </Row>
                    <div className="pricing__tab text-center">        
                            <Tabs
                                defaultActiveKey="monthly"
                                transition={false}
                                id="noanim-tab-example"
                                className="pricing__nav mb-40"
                                >
                               
                                    <Tab eventKey="monthly" title="Monthly">
                                        <Row>
                                        {PRICING_MONTHLY.map(
                                            ({extraClass, priceTitle, priceText, amount, amountTag, listOne, listTwo, listThree, listFour, listFive}, index) => (
                                                <PricingCard
                                                key={index}
                                                extraClass={extraClass}
                                                priceTitle={priceTitle}
                                                priceText={priceText}
                                                amount={amount}
                                                amountTag={amountTag}
                                                listOne={listOne}
                                                listTwo={listTwo}
                                                listThree={listThree}
                                                listFour={listFour}
                                                listFive={listFive}
                                                />
                                            )
                                        )} 
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="yearly" title="Yearly">
                                        <Row>
                                        {PRICING_YEARLY.map(
                                            ({extraClass, priceTitle, priceText, amount, amountTag, listOne, listTwo, listThree, listFour, listFive}, index) => (
                                                <PricingCard
                                                key={index}
                                                extraClass={extraClass}
                                                priceTitle={priceTitle}
                                                priceText={priceText}
                                                amount={amount}
                                                amountTag={amountTag}
                                                listOne={listOne}
                                                listTwo={listTwo}
                                                listThree={listThree}
                                                listFour={listFour}
                                                listFive={listFive}
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

export default Pricing;