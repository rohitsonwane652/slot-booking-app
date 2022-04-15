import React from 'react'
import {Container as Cont} from 'react-bootstrap'
import Home from './Home';
import NavBar from '../Nav_&_Sidebar/NavBar';
import SideBar from '../Nav_&_Sidebar/SideBar'
import '../Nav_&_Sidebar/index.css'

const Component = props => {
   

  return (
      <>
       <Cont fluid>
              <NavBar />
              <div className='row'>
                  <div className='col-md-3' id="sidebar-wrapper">      
                    <SideBar />
                  </div>
                  <div className='col-md-9' id="page-content-wrapper">
                      <Home />
                  </div> 
              </div>

          </Cont>
      </>
      );
};

export default Component