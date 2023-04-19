import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './banner.css'

const Details = () => {
    return (
        <Container className='details-container'>
            <Row>
                <Col md={4} className="pe-5">
                    <div className='title row justify-content-between flex-lg-row flex-md-column-reverse'>
                        <h2 className='col-md-12 col-lg-6 font-raleway fw-bold fs-3'>Story & History</h2>
                        <span className="count col-auto fs-1">01.</span>
                    </div>
                    <div>
                        <p>
                            Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
                        </p>
                    </div>
                    <Link className='text-dark-color text-decoration-none font-montserrat d-flex gap-2 align-items-center'>More
                        <svg width="28" height="24" viewBox="0 0 8 4" fill="none">
                            <path d="M7.5 2L5 0.556624V3.44338L7.5 2ZM0 2.25H5.25V1.75H0V2.25Z" fill="#D5AA6D" />
                        </svg>
                    </Link>
                </Col>
                <Col md={4} className="pe-5">
                     <div className='title row justify-content-between flex-lg-row flex-md-column-reverse'>
                    <h2 className='col-md-12 col-lg-6 font-raleway fw-bold fs-3'>Values & Philosophy</h2>
                        <span className="count col-auto fs-1">02.</span>
                    </div>
                    <div>
                        <p>
                            Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
                        </p>
                    </div>
                    <Link className='text-dark-color text-decoration-none font-montserrat d-flex gap-2 align-items-center'>More
                        <svg width="28" height="24" viewBox="0 0 8 4" fill="none">
                            <path d="M7.5 2L5 0.556624V3.44338L7.5 2ZM0 2.25H5.25V1.75H0V2.25Z" fill="#D5AA6D" />
                        </svg>
                    </Link>
                </Col>
                <Col md={4} className="pe-5">
                     <div className='title row justify-content-between flex-lg-row flex-md-column-reverse'>
                    <h2 className='col-md-12 col-lg-6 font-raleway fw-bold fs-3'>Mission & Services</h2>
                        <span className="count col-auto fs-1">03.</span>
                    </div>
                    <div>
                        <p>
                            Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
                        </p>
                    </div>
                    <Link className='text-dark-color text-decoration-none font-montserrat d-flex gap-2 align-items-center'>More
                        <svg width="28" height="24" viewBox="0 0 8 4" fill="none">
                            <path d="M7.5 2L5 0.556624V3.44338L7.5 2ZM0 2.25H5.25V1.75H0V2.25Z" fill="#D5AA6D" />
                        </svg>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Details
