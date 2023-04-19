import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import lawyerImg from '../../assets/images/lawyer-portrait 1.jpg'

const FeaturedLawyer = () => {
    return (
        <div className='featured-lawyer'>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12} className='feature-heading mt-5 d-flex justify-content-between'>
                        <h2 className='mt-5 font-raleway fw-bold'>FEATURED LAWYER</h2>
                        <svg className='featured-lawyer-svg'
                            xmlns="http://www.w3.org/2000/svg"
                            width="93"
                            height="128"
                            fill="none"
                            viewBox="0 0 93 128"
                        >
                            <g filter="url(#filter0_d_75_637)">
                                <path fill="#D5AA6D" d="M2 0h81v90.012H14.222L2 116V0z"></path>
                                <path
                                    fill="#fff"
                                    d="M43 25l4.94 15.202h15.983l-12.931 9.395 4.94 15.201L43 55.403l-12.931 9.395 4.939-15.201-12.931-9.395H38.06L43 25z"
                                ></path>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_75_637"
                                    width="93"
                                    height="128"
                                    x="0"
                                    y="0"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dx="4" dy="6"></feOffset>
                                    <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_75_637"
                                    ></feBlend>
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_75_637"
                                        result="shape"
                                    ></feBlend>
                                </filter>
                            </defs>
                        </svg>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={3}>
                        <Card className='w-100 rounded-0 shadow border-0'>
                            <div className='p-5 lawyer-card-top d-flex flex-column align-items-center gap-3'>
                                <Card.Img variant="top" className='rounded-circle' src={lawyerImg} />
                                <span className='text-uppercase font-montserrat bg-white py-2 w-100 text-center rounded shadow'>DANISH Khan</span>
                            </div>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeaturedLawyer
