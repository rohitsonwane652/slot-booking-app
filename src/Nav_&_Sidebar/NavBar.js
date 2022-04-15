import React from 'react'
import {Nav} from 'react-bootstrap'
import './index.css'

function NavBar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light main">
  <div className="container">
    <Nav.Link className="navbar-brand fw-bold" to="#"><span style={{color:'#08254d'}}>Mentor</span><span style={{color:'#db1743'}}>Plus</span></Nav.Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link active text-center" aria-current="page" to="#">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link text-center" to="#">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link text-center" to="#">Contact</Nav.Link>
        </Nav.Item>
      </ul>
    </div>
  </div>
</Nav>
  )
}

export default NavBar