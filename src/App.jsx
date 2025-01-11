import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './pages/home-page'
import ProductByBrand from './pages/product-by-brand'
import ProductByCategory from './pages/product-by-category'
import ProductByKeyword from './pages/product-by-keyword'
import ProductDetails from './pages/product-details'
import AboutPage from './pages/about-page'
import HowtobuyPage from './pages/HowtobuyPage'
import TermsPage from './pages/Terms-Page'
import ComplainPage from './pages/ComplainPage'
import ContactPage from './pages/ContactPage'
import RefundPage from './pages/RefundPage'
import PrivacyPage from './pages/PrivacyPage'
import LoginPage from './pages/login-page'
import OTPPage from './pages/otp-page'
import ProfilePage from './pages/Profile-page.jsx'
import CartPage from './pages/Cart-page.jsx'
import WishPage from './pages/wish-page.jsx'
import OrderPage from './pages/order-page.jsx'
import OrdersDetailsPage from './pages/OrdersDetailsPage.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        /*Products Related*/

          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/by-brand/:id' element={<ProductByBrand></ProductByBrand>}></Route>
          <Route path='/by-category/:id' element={<ProductByCategory></ProductByCategory>}></Route>
          <Route path='/by-keyword/:id' element={<ProductByKeyword></ProductByKeyword>}></Route>
          <Route path='/details/:id' element={<ProductDetails/>}></Route>

        /*legalsDetails*/

          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/howtobuy' element={<HowtobuyPage/>}></Route>
          <Route path='/terms' element={<TermsPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/complain' element={<ComplainPage/>}></Route>
          <Route path='/privacy' element={<PrivacyPage/>}></Route>
          <Route path='/refund' element={<RefundPage/>}></Route>

          /*Login/OTP*/

          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/otp' element={<OTPPage/>}></Route>

          //USER Profile
          <Route path='/profile' element={<ProfilePage/>}></Route>

          //cart

          <Route path='/cart' element={<CartPage/>}></Route>

          //wish

          <Route path='/wish' element={<WishPage/>}></Route>

        //orders page

        <Route path='/orders/:id' element={<OrdersDetailsPage/>}></Route>
        <Route path='/orders' element={<OrderPage/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
