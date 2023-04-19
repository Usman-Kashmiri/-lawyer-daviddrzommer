import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Details from './Details'

const Milestones = () => {
    return (
        <Container className='milestones-container'>
            <Row className='counter-container'>
                <Col sm={3} xs={6} className='px-3 py-4 border-end flex-column d-flex gap-1'>
                    <span className='fs-1 count'>1000+</span>
                    <span className='fs-6 text'>Qualified Lawyers</span>
                </Col>
                <Col sm={3} xs={6} className='px-3 py-4 border-end flex-column d-flex gap-1'>
                    <span className='fs-1 count'>32154+</span>
                    <span className='fs-6 text'>Trusted Clients</span>
                </Col>
                <Col sm={3} xs={6} className='px-3 py-4 border-end flex-column d-flex gap-1'>
                    <span className='fs-1 count'>114586+</span>
                    <span className='fs-6 text'>Successfull Cases</span>
                </Col>
                <Col sm={3} xs={6} className='px-3 py-4 flex-column d-flex gap-1'>
                    <span className='fs-1 count'>2000+</span>
                    <span className='fs-6 text'>Honors & Awards</span>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col sm={9} className='how mt-5'>
                    <h2 className='font-raleway fw-bold'>HOW IT WORKS?</h2>
                    <p className='font-montserrat'>
                        You can do a lot of things by yourself in the legal world. In fact, more and more people
                        are doing just that. Unfortunately, they sometimes get lost  in the system and never end
                        up getting a resolution. Bundel allows you to consult a lawyer when you need one, while
                        doing the rest yourself. That allows you to control costs and get a fair result.
                    </p>
                </Col>
            </Row>

            <Details />
        </Container>
    )
}

export default Milestones
