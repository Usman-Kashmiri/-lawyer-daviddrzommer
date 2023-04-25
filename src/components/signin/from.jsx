


// import { Button, Checkbox, ConfigProvider, Form, Input,Radio } from 'antd';
// import UserSchema from './formshema'
// import { useFormik } from 'formik';




// const Formsignin = () => {
//   let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     const navigate = useNavigate();
//     const [errorcolour, seterrorcolour] = useState('#CBCBCB');
//     const [value2, setValue2] = useState(false);
//     const [signinemail, setsigninEmail] = useState('');
//     const [signinpassword ,setsigninpassword] = useState('');
//     const [emailerror, setemailerror] = useState('')
//     const [passworderror, setpassworderror] = useState('')
    // console.log(signinemail, signinpassword);





//     const initialFormValues = {
//       signInEmail: "",
//       signInPassword: "",
//       category: "",
//   };

//   const {
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     values,
//     errors,
//     touched,
//     isValid,
//     dirty
// } = useFormik({
//     initialValues: initialFormValues,
//     validationSchema: UserSchema,
//     onSubmit: (actions , values)=>{
//       console.log(values);
//       actions.resetForm();
//     }
// });


    
//     const [value, setValue] = useState('Lawyer');
//     const onChange = (e) => {
//         console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//     };
    
// const signinemailevent = (e) =>{
//   if(signinemail.trim() == '' || !signinemail.match(emailregex)){
//     seterrorcolour('red')
//     setsigninEmail(e.target.value)
//     setemailerror('Email is not valid !')
//     console.log(emailerror);
//   }else{
//     seterrorcolour('green')
//   }
  
// }



//     // const signin =()=>{

//     //     const fieldsvalue = {
//     //         email:email,
//     //         password : password,
//     //         radiovalue : value
//     //     }
//     //     console.log(fieldsvalue);
//     // }
    
    
    
//     const onFinish = (values) => {
//         // const [email setEmail] = usestate('')

     
//         console.log('Success:', values);
//         if (!value){

//             navigate('/')
//         }
//         else{
//             console.log('khali hai');
//         }
//     };
//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     // const [loginval setLoginval] = useState(false)
// return(



//   <Form
//   className='formmaindiv'
//     name="basic"
//     labelCol={{
//       span: 18,
//     }}
//     wrapperCol={{
//       span: 20,
//     }}
//     style={{
//       maxWidth: 600,
//       margin:0

//     }}
//     initialValues={{
  //       remember: true,
  //     }}
//     onSubmit={handleSubmit} autoComplete="off"
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
    
//   >
   
//     <center>

//     <img src={brownlogo} className='signintoplogoimg'/>
//     </center>
//     <br/>
//     <p style={{color:'#DD995F' , fontSize:'30px'}}>{value2 ? 'Sign Up' : 'Sign In'}</p>

//    { value2 ? 
//    <>
//    <Form.Item
//    name="username"
//    rules={[{ required: true, message: 'Please input your username!' }]}
//    >

//    <label className='signinlable'>Name</label>
//  <Input placeholder='Enter your email' type='text' className='forminputsignin' />
//    </Form.Item>

//    <label className='signinlable'>Email</label>
//  <Input placeholder='Enter your email' type='text' className='forminputsignin'/>

// <label  className='signinlable'>Password</label>
//  <Input.Password placeholder='Enter your password' className='forminputsignin' />
//    </>
//    :
//    <>



//      <Form.Item
//       name="email"
//       rules={[{ required: true, message: 'Please input your email!' }]}
//       className='forminputsignin'>

//    <label className='signinlable'>Email</label>
//  <Input placeholder='Enter your email'style={{borderColor:errorcolour , backgroundColor:'orange' ,width:'100%'}}  name='signInEmail' id='signInEmail' type='text' className='forminputsignin'/>
//      </Form.Item>

//  <Form.Item
//  style={{margin:'0 auto'}}
//    name="password"
//    rules={[{ required: true, message: 'Please input your password!' }]}
//    className='forminputsignin'>



// <label  className='signinlable'>Password</label>
//  <

//  Input.Password placeholder='Enter your password' name='signInPassword' id='signInPassword'   className='forminputsignin' />
//  </Form.Item>

//    </>
// }

//       <ConfigProvider

//     theme={{
  //       token: {
    //         colorPrimary: '#DA954D',
    //       },
    //     }}>
    
    // <Radio.Group onChange={onChange} value={value} className='radiobtnsignin'>
    //       <Radio value={'Lawyer'} defaultChecked={true}>Lawyer</Radio>
    //       <Radio value={'Client'}>Client</Radio>
    
    //     </Radio.Group>
    //         </ConfigProvider>
    
    //    <center>
    
    
    //    {value2 ?
    //    <>
    //       <button htmlType="submit" className='signinformbtnsubmit'> Sign Up</button>
    
    
    // <p style={{color:'#5E5E5E', fontSize:'15px', paddingTop:'10px'}}>Already a member ? click<span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setValue2(false)} }>here</span> to sign in.</p>
    //    </>
    // : 
    //   <>
    // <button  type='submit' className={!(isValid && dirty) ? 'signinformbtnsubmit' :'signinformbtnsubmit'}> Sign In</button>
    //    <div className='checkboxandforgot'>
    
    //       <Checkbox className='checkboxsigninform'>Remember me</Checkbox>
    //       <p>Forgot password?</p>
    //    </div>
    // <p style={{color:'#5E5E5E', fontSize:'15px'}}>Create a new account? Click<span style={{color:'#DCA74D',cursor:'pointer'}}> here</span> to register.</p>
    // <p style={{color:'#5E5E5E', fontSize:'15px'}}>or <span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setValue2(true)} }>login</span> with</p>
    //   </> 
    
    // }
    //   <div className='logosdiv'>
    //     <img src={googleimg} style={{width:'30px',height :'30px'}}/>
    //     <img src={facebookimg} style={{width:'30px',height :'30px'}}/>
    //     <img src={appleimg} style={{width:'30px',height :'30px'}}/>
    //   </div>
    //    </center>
    //     {/* </Form.Item> */}
    //   </Form>
    // )
    //     };
// export default Formsignin;




import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import googleimg from '../../assets/images/google.png'
import facebookimg from '../../assets/images/facebook.png'
import appleimg from '../../assets/images/apple.png'
import brownlogo from '../../assets/images/brownlogo.png'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './form.css'


function BasicExample() {
  let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const [signinemail , setsigninemail] = useState('')
const [signinpassword , setsigninpassword] = useState('')
const [signinemailerror , setsigninemailerror] = useState('')
const [signinpassworderror , setsigninpassworderror] = useState('')
const [signupnameerror , setsignupnameerror] = useState('')
const [color , setcolor] = useState('')
// const [catogorieserr , setcatogorieserr] = useState('')
const [catogories , setcatogories] = useState('lawyer')
const [remember , setremember] = useState('off')
const [namesignup , setnamesignup] = useState('')

const [signupvalue , setsignupvalue] = useState(false)

const navigate = useNavigate();


const funcsigninemail = (e)=>{
  e.preventDefault()
  setsigninemail(e.target.value)
  if (signinemail.trim() == " " || !signinemail.match(emailregex)){
    setsigninemailerror('Email is not valid !')
    console.log(signinemail);
    setcolor('red')
  }
  else{
    setsigninemailerror('Email is valid')
    setcolor('green')
  }
  
}


const funcsigninpassword = (e) =>{
  e.preventDefault()
  setsigninpassword(e.target.value)
  if (signinpassword.trim() == " " || signinpassword.length< 5){
    setsigninpassworderror('Password is not valid it must contain 6 characters !')
    console.log(signinpassword);
    setcolor('red')
  }
  else{
    setsigninpassworderror('Password is valid')
    setcolor('green')
  }

}



const funcsignupname = (e) =>{
  e.preventDefault()
  setnamesignup(e.target.value)
  if (namesignup.trim() == " " ){
    setsignupnameerror('Enter Name !')
    console.log(setnamesignup);
    setcolor('red')
  }
  else{
    setsignupnameerror('Name is valid')
    setcolor('green')
  }
 
}

const remembercheck = ()=>{
  if(remember == 'on'){
    setremember('off')
  }else{
    
    setremember('on')
  }
console.log(remember);
}


const submitsignin =(e)=>{
  e.preventDefault()
  if (signinemail.trim() == " " || !signinemail.match(emailregex)){
    setsigninemailerror('Email is not valid !')
    // console.log(signinemail);
    setcolor('red')
  }
  else if(signinpassword.trim() == " " || signinpassword.length< 5){
    setsigninpassworderror('Password is not valid it must contain 6 characters !')
    // console.log(signinpassword);
    setcolor('red')
  }
  
  else{
    
    setsigninpassworderror('')
    setsigninemailerror('')
    setcolor('green')
    const usersignininfo = {
      email:signinemail,
      password:signinpassword,
      catogories:catogories,
      remember:remember
    }
    console.log(usersignininfo);
    localStorage.setItem('userinfo' , usersignininfo)
    // e.reset()
    // form.reset()
  }
  setsigninemail('')
  setsigninpassword('')
navigate('/')

}
const submitsignup =()=>{
  if (namesignup.trim() == ''){
    setsignupnameerror('Enter name')
    setcolor('red')
  }
  else if (signinemail.trim() == " " || !signinemail.match(emailregex)){
    setsigninemailerror('Email is not valid !')
    // console.log(signinemail);
    setcolor('red')
  }
  else if(signinpassword.trim() == " " || signinpassword.length< 5){
    setsigninpassworderror('Password is not valid it must contain 6 characters !')
    // console.log(signinpassword);
    setcolor('red')
  }
  
  else{
    setsignupnameerror('')
    setsigninpassworderror('')
    setsigninemailerror('')
    setcolor('green')
    const usersignininfo = {
      name:namesignup,
      email:signinemail,
      password:signinpassword,
      catogories:catogories,
      remember:remember
    }
    console.log(usersignininfo);
  }
  setsigninemail('')
  setsigninpassword('')
  setnamesignup('')
}







  return (

    
    

  <>
{ signupvalue ? 
<Form className='formmaindiv' id="form" onSubmit={submitsignin}>
      <div className='toplogodiv'>
      <img src={brownlogo} className='signintoplogoimg'/>
      </div>
<p className='signupheading'>sign in</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={signinemail}  onChange={funcsigninemail} onBlur={()=>setsigninemailerror('')}/>
        {/* <Form.Text className="text-muted" style={{color:}}> */}
        <p style={{color:color}}> {signinemailerror}</p>
        {/* </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        
        <Form.Control type="password" placeholder="Password" value={signinpassword} onChange={funcsigninpassword}  onBlur={()=>setsigninpassworderror('')} />
        <p style={{color:color}}> {signinpassworderror}</p>
        </Form.Group>
        <Form.Group className="mb-3 radiodiv" controlId="formBasicCheckbox">
        <>
        <label for='lawyer' className='radiolabel'>
        <input id='lawyer' required name='lawyer' type='radio'  className='radioinput' onClick={()=> setcatogories('lawyer')} checked/>
        
        Lawyer</label>
        </>

      <>

      <label for='client' className='radiolabel'>
       <input id='client' name='lawyer' type='radio' className='radioinput' onClick={()=> setcatogories('client')} />
        
        Client</label>
      </>
      </Form.Group>
      <div className='signinsubmitbtndiv'>

      <Button  className='signinbtn' type='submit' >
      Sign in
      </Button>
      </div>
      <div className='checkboxandforgot'>
    
      <label for="Remember" className="checkboxinput">
      
      <input type="checkbox" id="scales" name="Remember" onClick={remembercheck}   />
      Remember me</label>
      <p className='forgottext'>Forgot password?</p>
      </div>
      <div className='createnewaccount'>
      <p style={{color:'#5E5E5E', fontSize:'15px'}}>Create a new account? Click<span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setsignupvalue(false); setsigninemail('')
  setsigninpassword('')
  setnamesignup('')}}> here</span> to register.</p>
     <br />
     <p style={{color:'#5E5E5E', fontSize:'15px'}}>or <span style={{color:'#DCA74D',cursor:'pointer'}}  >login</span> with</p>
      </div>
      <div className='logosdiv'>
       <img src={googleimg} style={{width:'30px',height :'30px'}}/>
      <img src={facebookimg} style={{width:'30px',height :'30px'}}/>
        <img src={appleimg} style={{width:'30px',height :'30px'}}/>
    </div>
    </Form>
    
    :
    
<Form className='formmaindiv'>
<div className='toplogodiv'>
<img src={brownlogo} className='signintoplogoimg'/>
</div>
<p className='signupheading'>sign up</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="email" placeholder="Enter name"  value={namesignup} onChange={funcsignupname} onBlur={()=>setsignupnameerror('')}/>
        {/* <Form.Text className="text-muted" style={{color:}}> */}
        <p style={{color:color}}> {signupnameerror}</p>
        
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={signinemail}  onChange={funcsigninemail} onBlur={()=>setsigninemailerror('')}/>
        {/* <Form.Text className="text-muted" style={{color:}}> */}
         <p style={{color:color}}> {signinemailerror}</p>
        {/* </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        
        <Form.Control type="password" placeholder="Password" value={signinpassword} onChange={funcsigninpassword}  onBlur={()=>setsigninpassworderror('')} />
        <p style={{color:color}}> {signinpassworderror}</p>
        </Form.Group>
        <Form.Group className="mb-3 radiodiv" controlId="formBasicCheckbox">
        <>
        <label for='lawyer' className='radiolabel'>
        <input id='lawyer' required name='lawyer' type='radio'  className='radioinput' onClick={()=> setcatogories('lawyer')} checked/>
        
        Lawyer</label>
        </>
        
        <>
        
        <label for='client' className='radiolabel'>
        <input id='client' name='lawyer' type='radio' className='radioinput' onClick={()=> setcatogories('client')} />
        
        Client</label>
        </>
        </Form.Group>
        <div className='signinsubmitbtndiv'>
        
        <Button  className='signinbtn' onClick={submitsignup}>
        Sign in
        </Button>
        </div>
        <div className='checkboxandforgot'>
        
        <label for="Remember" className="checkboxinput">
        
        <input type="checkbox" id="scales" name="Remember" onClick={remembercheck}   />
        Remember me</label>
        <p className='forgottext'>Forgot password?</p>
        </div>
        <div className='createnewaccount'>
      <p style={{color:'#5E5E5E', fontSize:'15px'}}>Already a member? Click<span style={{color:'#DCA74D',cursor:'pointer'}} onClick={()=>{setsignupvalue(true); setsigninemail('')
  setsigninpassword('')
  setnamesignup('')}}> here</span> sign up</p>
    
      </div>
 </Form>
 
}
 </>

)

    
  ;
}

export default BasicExample;