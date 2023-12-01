
import * as React from "react";
import {Container , Row, Col, Button ,Image} from "react-bootstrap/";
import IntroImage from "../../src/Asset/Asset-img.jpg";

function Introduction (){
    return(
        <Container className="main-Intro">
        <Row>
        <Col className="Intro-text">
            <h4 className="heading">Manage your Expense<br/><span style={{color:"#0f9ffa"}}>efficiently</span></h4>
            <h6 className="title">Plan , track , organise your expenses</h6>
            <Button variant="primary">Learn more</Button>
        </Col>
        <Col className="Asset-image">
        <Image src={IntroImage} alt="Image"  height={250}/>
        </Col>
        </Row>
        </Container>
    );
}

export default Introduction;