import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import './header.css'
import userImg from '../../assets/images/user-profile-picture.png'

import logo from '../../assets/images/Logo.svg';

const UserProfilePicture = (imgWidth) => {
  return (
    <div className="d-inline-flex">
      <img className="thumbnail-image rounded-circle"
        src={userImg}
        style={{ width: imgWidth }}
        alt="user Profile Picture"
      />
    </div>
  )
}


const Header = () => {

  const [user, setUser] = useState(false);

  const location = useLocation();

  var nav_link_class = ' font-poppins';
  var active_nav = 'text-primary-color fw-bold'

  return (
    <Navbar expand="lg" className='py-4'>
      <Container>
        <Navbar.Brand href="/"><img src={logo} className="brand-logo" style={{ width: 80 }} alt="lawyer" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-xl-4 justify-content-between align-items-center">
            <Nav.Link href="/" className={active_nav + nav_link_class}>Home</Nav.Link>
            <Nav.Link href="" className={nav_link_class}>About</Nav.Link>
            <Nav.Link href="" className={nav_link_class}>Practice Areas</Nav.Link>
            <Nav.Link href="" className={nav_link_class}>Attorneys</Nav.Link>
            <Nav.Link href="" className={nav_link_class}>Blog</Nav.Link>
            <Nav.Link href="" className={nav_link_class}>Contact</Nav.Link>
            {!user && <div className='d-flex gap-3 ms-lg-3 justify-content-center'>
            <Nav.Link href="/signin" className='loginbtn' >Login</Nav.Link>
              <button onClick={() => setUser(true)} className='secondary-btn'>Join</button>
            </div>}
            {user && <div className='dropdown-container d-flex justify-content-end'>
              <NavDropdown title={UserProfilePicture(50)} id="basic-nav-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1} stroke="rgba(0, 0, 0, 0.175)" className="dropdown-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <NavDropdown.Item href="" className='d-flex align-items-center gap-2'>
                  {UserProfilePicture(40)}
                  <span className='d-inline-flex flex-column justify-content-center'>
                    <span className='font-poppins username'>John Doe</span>
                    <span className='font-poppins email'>johndoe@abc.com</span>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" className='d-flex gap-3 align-items-center'><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#1D1D1D"
                    fillRule="evenodd"
                    d="M8.93.655A8.278 8.278 0 00.655 8.93a8.278 8.278 0 008.275 8.275 8.278 8.278 0 008.275-8.275A8.278 8.278 0 008.93.655zm0 2.482a2.48 2.48 0 012.482 2.483A2.48 2.48 0 018.93 8.102 2.48 2.48 0 016.447 5.62 2.48 2.48 0 018.93 3.137zm0 11.75a5.958 5.958 0 01-4.965-2.664c.025-1.646 3.31-2.548 4.965-2.548 1.647 0 4.94.902 4.965 2.548a5.958 5.958 0 01-4.965 2.665z"
                    clipRule="evenodd"
                  ></path>
                </svg> My Account</NavDropdown.Item>
                <NavDropdown.Item href="" className='d-flex gap-3 align-items-center'><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  fill="none"
                  viewBox="0 0 15 17"
                >
                  <path
                    fill="#000"
                    d="M14.136 9.736l-.303-.184a1.215 1.215 0 01-.576-1.052c0-.439.216-.832.576-1.052l.303-.184c.827-.504 1.11-1.616.632-2.488l-.576-1.052c-.476-.87-1.534-1.169-2.359-.666l-.303.184c-.36.22-.791.22-1.151 0a1.216 1.216 0 01-.576-1.052v-.369C9.803.817 9.028 0 8.076 0H6.925c-.953 0-1.728.817-1.728 1.821v.37c0 .439-.215.831-.575 1.051-.36.22-.791.22-1.152 0l-.302-.184c-.825-.503-1.884-.204-2.36.666L.232 4.776c-.477.872-.195 1.985.632 2.488l.303.184c.36.22.576.613.576 1.052 0 .439-.215.832-.576 1.052l-.302.184c-.827.503-1.11 1.616-.632 2.488l.575 1.052c.477.87 1.536 1.168 2.36.666l.302-.184c.36-.22.791-.219 1.152 0 .36.22.575.613.575 1.052v.369c0 1.004.775 1.821 1.728 1.821h1.151c.952 0 1.727-.817 1.727-1.821v-.37c0-.438.215-.831.576-1.051.36-.22.79-.22 1.151 0l.303.184c.825.502 1.883.203 2.36-.666l.575-1.052c.477-.872.195-1.985-.632-2.488zm-6.636 1.8c-1.587 0-2.878-1.362-2.878-3.036S5.913 5.464 7.5 5.464c1.588 0 2.879 1.362 2.879 3.036S9.088 11.536 7.5 11.536z"
                  ></path>
                </svg> Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" onClick={() => setUser(false)} className='d-flex gap-3 align-items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    fill="none"
                    viewBox="0 0 14 16"
                  >
                    <path
                      fill="#000"
                      d="M9.084 2.017a.517.517 0 10-.32.983A5.888 5.888 0 115.08 3a.517.517 0 10-.32-.983 6.923 6.923 0 104.323 0z"
                    ></path>
                    <path
                      fill="#000"
                      d="M6.923 5.963a.517.517 0 00.517-.517V.517a.517.517 0 10-1.034 0v4.929a.517.517 0 00.517.517z"
                    ></path>
                  </svg> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
