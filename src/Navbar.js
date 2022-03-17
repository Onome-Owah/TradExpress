import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar.css'
import trade from './Images/TradExpress.svg'



const Navigate = () => {
  return (
    <div className='bgc'>
        <Navbar bg="" expand="lg">
  <Container>
      <Link to='/'>
      <img src={trade} alt="" />
      </Link>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className='link me' to='/Form3'>Instant Buy/Sell</Link>
        <Link className='link me' to='/Learn'>Learn</Link>
        <Link className= 'link you' to= '/Form6'>Login</Link>
        <Link className='link us' to = '/Form1'><button className='gett'>Get started</button></Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

            
    </div>
  )
}

export default Navigate