import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './banner.css'
import servicesData from '../../data/data'

const ServiceColumn = (svg, title) => {
    return (
        <div className='d-flex flex-column gap-4 p-5 align-items-center border'>
            <span className='services-svg d-flex flex-column'>
                <svg width="45" height="63" viewBox="0 0 45 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.07381 10.1416L15.1693 19.3976L6.07381 10.1416ZM6.07381 10.1416C4.73982 8.78403 2.55691 8.78403 1.22291 10.1416M6.07381 10.1416H1.22291M1.22291 10.1416C-0.111087 11.4991 -0.111087 13.7206 1.22291 15.0781M1.22291 10.1416V15.0781M1.22291 15.0781L12.38 26.4321L1.22291 15.0781ZM29.4794 20.3976H29.9027L30.1973 20.0937L39.2881 10.7191C39.2889 10.7183 39.2896 10.7175 39.2904 10.7168C40.2277 9.7654 41.7548 9.7611 42.6974 10.7038C43.6821 11.8133 43.6641 13.4478 42.917 14.416L31.798 25.7313L31.5112 26.0231V26.4321V58.2728C31.5112 60.1866 30.0208 61.5923 28.2667 61.5923C26.4284 61.5923 25.0222 60.1009 25.0222 58.2728V43.8334V42.8334H24.0222H22.4456H20.8691H19.8691V43.8334V58.3962C19.8691 60.31 18.3786 61.7157 16.6245 61.7157C14.7862 61.7157 13.38 60.2243 13.38 58.3962V26.4321V26.0231L13.0933 25.7313L1.93618 14.3772C0.98449 13.4087 0.98449 11.811 1.93618 10.8425C2.87828 9.88373 4.41844 9.88373 5.36055 10.8425L14.456 20.0985L14.7499 20.3976H15.1693H22.3243H29.4794Z" stroke="#D5AA6D" strokeWidth="2" />
                    <path d="M29.9347 8.76235C29.9347 13.066 26.511 16.5247 22.3243 16.5247C18.1377 16.5247 14.714 13.066 14.714 8.76235C14.714 4.45875 18.1377 1 22.3243 1C26.511 1 29.9347 4.45875 29.9347 8.76235Z" stroke="#D5AA6D" strokeWidth="2" />
                </svg>
                <span></span>
            </span>
            <span className='font-raleway fw-bold fs-4'>
                Family Law
            </span>
        </div>
    )
}

const Services = () => {

    return (
        <Container className='services-container py-5'>
            <Row className='my-5'>
                {
                    servicesData.map((service, i) => {
                        return (
                            <Col className='p-0' md={3} key={i}>
                                <div className='service d-flex flex-column gap-4 justify-content-center align-items-center border'>
                                    <span className='services-svg d-flex flex-column'>
                                        {service.svg}
                                        <span></span>
                                    </span>
                                    <span className='font-raleway fw-bold fs-5'>
                                        {service.title}
                                    </span>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Services
