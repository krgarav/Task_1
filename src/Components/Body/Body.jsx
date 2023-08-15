import { Fragment } from "react";
import Card from "../Cards/Card";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Body.module.css";
const Body = () => {
  return (
    <Fragment>
      <Container className={classes.box1}>
        <h5>Pricing</h5>
        <h1>Simple, transparent pricing</h1>
        <p>
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
      </Container>

      <Container  >
        <Row className="justify-content-center" >
          <Col lg={4}>
            <Card
              price="10"
              planName="Basic Plan"
              firstRow="Access to All Basic feature"
              secondRow="Basic reporting and analysis"
              thirdRow="Upto 10 individual users"
              fourthRow="20 Gb individual data each user"
              fifthRow="Basic chat and email Support"
            />
          </Col>
          <Col lg={4}>
            <Card
              price="20"
              planName="Business Plan"
              firstRow="200+ integrations"
              secondRow="Advanced reporting and analytics"
              thirdRow="Upto 20 individual users"
              fourthRow="40 Gb individual data each user"
              fifthRow="Priority chat and email Support"
            />
          </Col>
          <Col lg={4}>
            <Card
              price="40"
              planName="Enterprise Plan"
              firstRow="Advanced custom fields"
              secondRow="Audit log and data history"
              thirdRow="Unlimited individual users"
              fourthRow="Unlimited individual users"
              fifthRow="Personalised+priority service"
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Body;
