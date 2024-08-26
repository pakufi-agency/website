import React, { FC, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import PageHeader from "../components/PageHeader";

const WorkInProgress: FC = () => {
  return (
    <Fragment>
      <PageHeader title="WIP" crumbTitle="Work In Progress" />
      <section className="about__area fix p-relative pt-120 pb-120 about__pb">
        <Container>
          <Row>
            <Col lg={10} md={10}>
              We are working on creating a beautiful site. We will be online
              soon. Come back in some days!
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default WorkInProgress;
