import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import TeamMemberCard from './TeamMemberCard';

const MEMBER_DATA = [
    {
      memberImg:"/assets/images/team/member-1.jpg",
      memberLink:"/single-team",
      memberName:"John Smith",
      memberPosition:"Web Developer"
    },
    {
      memberImg:"/assets/images/team/member-2.jpg",
      memberLink:"/single-team",
      memberName:"Alisha Alima",
      memberPosition:"Product Designer"
    },
    {
      memberImg:"/assets/images/team/member-3.jpg",
      memberLink:"/single-team",
      memberName:"David Park",
      memberPosition:"UI/UX Designer"
    },
    {
      memberImg:"/assets/images/team/member-4.jpg",
      memberLink:"/single-team",
      memberName:"Tailor Milan",
      memberPosition:"Marketing Manager"
    },
    {
      memberImg:"/assets/images/team/member-1.jpg",
      memberLink:"/single-team",
      memberName:"John Smith",
      memberPosition:"Web Developer"
    },
    {
      memberImg:"/assets/images/team/member-2.jpg",
      memberLink:"/single-team",
      memberName:"Alisha Alima",
      memberPosition:"Product Designer"
    },
    {
      memberImg:"/assets/images/team/member-3.jpg",
      memberLink:"/single-team",
      memberName:"David Park",
      memberPosition:"UI/UX Designer"
    },
    {
      memberImg:"/assets/images/team/member-4.jpg",
      memberLink:"/single-team",
      memberName:"Tailor Milan",
      memberPosition:"Marketing Manager"
    },
  ];

const TeamMember = ({subTitle}) => {
    return (
        <section className="team__area-2 pt-110 pb-120 mb-105 fix p-relative">
                <div className="team__shape team__shape-2">
                    <img className="t-shape-1" src="/assets/images/shape/testimonials/t-shape-1.png" alt=""/>
                    <img className="t-shape-2" src="/assets/images/shape/testimonials/t-shape-2.png" alt=""/>
                    <img className="t-shape-3" src="/assets/images/shape/testimonials/t-shape-3.png" alt=""/>
                    <img className="t-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-65">
                        <Col xl={12}>
                            <div className="team__heading text-center">
                                <SectionTitle subTitle={subTitle}
                                titleFirst="Our beloved creative team"
                                />                                 
                                <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                        
                    {MEMBER_DATA.map(
                              ({memberImg, memberLink, memberName, memberPosition}, index) => (
                                  <TeamMemberCard
                                  key={index}
                                  memberImg={memberImg}
                                  memberLink={memberLink}
                                  memberName={memberName}
                                  memberPosition={memberPosition}
                                  />
                              )
                          )}                                        
                    </Row>
                </Container>
            </section>
    );
};

export default TeamMember;