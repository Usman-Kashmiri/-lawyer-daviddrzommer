
import Formsignin from '../components/signin/from'
import whitelogo from '../assets/images/white-logo.png'
import './signin.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import BasicExample from '../components/signin/from';



const Signin = ()=>{
    // const [width , setwidth] = useState('')
    // useEffect(()=>{

        
    //     setwidth(window.innerWidth)
    //     console.log(width)
    // },[])
    
    return(
<div>
<div className='container-fluid'>
    <Row>


    <Col sm='0' md='6' lg="8" className='signincolumns backimgcoldiv'>
        <div className='maindiv'>
            <img src={whitelogo}  className='logoimg'/>
            {/* <h1>hello</h1> */}

        </div>
        </Col>
        <Col sm='12' md='6'lg='4' className='signincolumns'>
        <div className='formdivouter'>
            <img src='' />
           <BasicExample/>
           
        </div>
        </Col>

            </Row>
            </div>
</div>
    )
}
export default Signin