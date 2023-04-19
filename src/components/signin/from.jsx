


import { useNavigate } from "react-router-dom";
import googleimg from '../../assets/images/google.png'
import facebookimg from '../../assets/images/facebook.png'
import appleimg from '../../assets/images/apple.png'
import brownlogo from '../../assets/images/brownlogo.png'
import './form.css'
import { useState } from 'react';
import { Button, Checkbox, ConfigProvider, Form, Input,Radio } from 'antd';




const Formsignin = () => {
    const navigate = useNavigate();
    const [value2, setValue2] = useState(false);
    const [email, setEmail] = useState('');
    const [password ,setpassword] = useState('');
    const [error, seterror] = ('')
    console.log(email, password);
    
    const [value, setValue] = useState('Lawyer');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    
    const signin =()=>{
if (!email){
seterror('Please enter email')
}
        const fieldsvalue = {
            email:email,
            password : password,
            radiovalue : value
        }
        console.log(fieldsvalue);
    }
    
    
    
    const onFinish = (values) => {
        // const [email setEmail] = usestate('')

     
        console.log('Success:', values);
        if (!value){

            navigate('/')
        }
        else{
            console.log('khali hai');
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const [loginval setLoginval] = useState(false)
return(



  <Form
  className='formmaindiv'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 350,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   
    <center>

    <img src={brownlogo} className='signintoplogoimg'/>
    </center>
    <br/>
    <p style={{color:'#DD995F' , fontSize:'30px'}}>{value2 ? 'Sign Up' : 'Sign In'}</p>
   
   { value2 ? 
   <>
   
   <label className='signinlable'>Name</label>
 <Input placeholder='Enter your email' type='text' className='forminputsignin'/>
   
   <label className='signinlable'>Email</label>
 <Input placeholder='Enter your email' type='email' className='forminputsignin'/>

<label  className='signinlable'>Password</label>
 <Input.Password placeholder='Enter your password' className='forminputsignin' />
   </>
   :
   <>
   
   <label className='signinlable'>Email</label>
 <Input placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} type='email' className='forminputsignin'/>

<label  className='signinlable'>Password</label>
 <Input.Password placeholder='Enter your password'  onChange={(e)=>setpassword(e.target.value)} className='forminputsignin' />
   
   </>
}
   
      <ConfigProvider
    
    theme={{
      token: {
        colorPrimary: '#DA954D',
      },
    }}>

<Radio.Group onChange={onChange} value={value} className='radiobtnsignin'>
      <Radio value={'Lawyer'} defaultChecked={true}>Lawyer</Radio>
      <Radio value={'Client'}>Client</Radio>
     
    </Radio.Group>
        </ConfigProvider>
   
   <center>

     
   {value2 ?
   <>
      <button htmlType="submit" className='signinformbtnsubmit'> Sign Up</button>
      
      
<p style={{color:'#5E5E5E', fontSize:'15px', paddingTop:'10px'}}>Already a member ? click<span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setValue2(false)} }>here</span> to sign in.</p>
   </>
: 
  <>
<button htmlType="submit" className='signinformbtnsubmit' onClick={signin} > Sign In</button>
   <div className='checkboxandforgot'>

      <Checkbox className='checkboxsigninform'>Remember me</Checkbox>
      <p>Forgot password?</p>
   </div>
<p style={{color:'#5E5E5E', fontSize:'15px'}}>Create a new account? Click<span style={{color:'#DCA74D',cursor:'pointer'}}> here</span> to register.</p>
<p style={{color:'#5E5E5E', fontSize:'15px'}}>or <span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setValue2(true)} }>login</span> with</p>
  </> 

}
  <div className='logosdiv'>
    <img src={googleimg} style={{width:'30px',height :'30px'}}/>
    <img src={facebookimg} style={{width:'30px',height :'30px'}}/>
    <img src={appleimg} style={{width:'30px',height :'30px'}}/>
  </div>
   </center>
    {/* </Form.Item> */}
  </Form>
)
    };
export default Formsignin;