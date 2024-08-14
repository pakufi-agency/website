import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const TeamMemberCard = ({memberImg, memberLink, memberName, memberPosition}) => {
    return (
        <Col xl={3} lg={3} md={6} className="mb-40">
            <div className="team__thumb">
                <img src={memberImg} alt="member"/>
            </div>
            <div className="team__content text-center">
                <Link href={memberLink}>
                    <a><h3 className="team__title">{memberName}</h3></a>
                </Link>
                <span className="team__position">{memberPosition}</span>
            </div>
        </Col> 
    );
};

export default TeamMemberCard;