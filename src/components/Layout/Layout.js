import React from 'react'
import Footer from '../UI/Footer'
import NavBar from '../UI/NavBar'
const Layout = (props) => {
  return (
    <React.Fragment>
        <NavBar/>
        {props.children}
        <Footer/>
    </React.Fragment>
  )
}

export default Layout