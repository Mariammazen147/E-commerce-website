import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Kingsman from "../assets/images/Kingsman.png";

const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className=" align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image src={Kingsman} fluid alt="Kingsman" className="rounded" />
          </Col>
          <Col md={6}>
            <h2 className="display-5">About Us</h2>
            <p className="lead mt-3">
              We are dedicated to providing the best products and services to
              our customers. Our team is committed to excellence, innovation,
              and customer satisfaction.
            </p>
            <p>
              With years of experience in the industry, we strive to offer
              top-notch products tailored to your needs. Our mission is to
              continuously improve and deliver high-quality products that make a
              difference in people's lives.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
