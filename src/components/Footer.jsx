import { Container, Row, Col } from "react-bootstrap";


import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.github.com/SwanOfficial"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100015542986741&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}