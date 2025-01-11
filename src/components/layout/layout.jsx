import React from 'react'
import Footer from './Footer'
import AppNavBar from './AppNavBar'
import {Toaster} from 'react-hot-toast'


const Layout = (props) => {
  return (
    <div className='bg-success-subtle'>
        <AppNavBar></AppNavBar>
        {props.children}
        <Toaster
        position='top-right'/>
        <Footer></Footer>
    </div>
  )
}

export default Layout
