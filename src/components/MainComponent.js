import React from 'react';
import Footer from './FooterComponent'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col, Button} from 'reactstrap';

function Main() {
    return (
        <>
        <div className="container">
            <Row>
                <Col sm={{size: 8, offset: 2}} xs={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} xl={{size: 4, offset: 4}}>
                    <Card>
                        <CardImg width="100%" className="selfie" alt="Ron Selfie Smiling" src="./Webcam Selfie Smile.jpg"></CardImg>
                        <CardTitle>Ron Scheibel</CardTitle>
                        <CardSubtitle>Front End Web Developer</CardSubtitle>
                        <p style={{fontSize:10}}>ronscheibeldev.com</p>
                        <div><button className="button fa fa-envelope fa-lg" href="mailto:scheibelr@gmail.com">Email</button></div>
                        
                        <CardBody>
                            <h4>About</h4>
                            <p>
                                I live in Orlando, Florida, with my wife, and 2 young kids.  Having a background in both education and science, I am an empathetic critical thinker who deeply values both growth and compassion.
                            </p>
                            <h4>Interest</h4>
                            <p>
                                Learning something new is an important daily activity that I am passionate about.
                                I strive to make myself better through determination, persistence, and learning. I love to code, especially tackling problems I haven't seen before, either with a team or solo.
                            </p>
                        </CardBody>
                        <Footer />
                    </Card>
                </Col>
            </Row>
            

        </div>    
        </>
    )
}

export default Main;


//ORGANIZATION: 
// Black Background.
// Dark Gray container
// Card with picture and body
// Footer with socials
