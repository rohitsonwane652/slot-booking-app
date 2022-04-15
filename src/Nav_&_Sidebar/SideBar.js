import React from 'react'
import { Nav } from 'react-bootstrap'
import './index.css'

const SideBar = () => {
    return (
        <>
            <Nav className="col-md-3 d-none d-md-block bg-light sidebar"
                activeKey="/home">
                <div className="sidebar-sticky"></div>
                <h3 className='text-center fw-bold'><span style={{color:'#08254d'}}>Mentor</span><span style={{color:'#db1743'}}>Plus</span></h3>
                <Nav.Item>
                    <Nav.Link to="/" className='text-center fw-bold nav-items'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/profile" className='text-center fw-bold nav-items'>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-center fw-bold nav-items'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};

export default SideBar

