import React, { Component } from 'react'
import {withRouter, Switch } from 'react-router-dom';
import Header from './header/header';
import UserLayoutRouter from './UserLayoutRouter'
import Home from './Components/Home/Home'
import Footer from './Components/footer/footer'
import ProductDetails from './Components/Fashion/ProductDetails/ProductDetails'
import Login from './Components/Authentication/Login/Login'
import Register from './Components/Authentication/Register/Register';
import CartProcess from './Components/Cart/CartProcess';
import CreateBlogs from './Components/BlogBoard/CreateBlogs';
import CreatePolls from './Components/Polls/CreatePolls';
import AboutUs from './Components/footer/AboutUs';
import Blogs from './Components/footer/Blogs';
import Careers from './Components/footer/Careers';
import Investors from './Components/footer/Investors';
import LicenseAgreement from './Components/footer/LicenseAgreement';
import PrivacyPolicy from './Components/footer/PrivacyPolicy';
import TermsCondition from './Components/footer/TermsCondition';


 class UserLayout extends Component {
    render() {
        return (
            <div>
              <Header />
              <Switch>
              <UserLayoutRouter exact restricted={false} path='/' component={Home}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/login' component={Login}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/register' component={Register}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/cartProcess' component={CartProcess}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/createBlogs' component={CreateBlogs}></UserLayoutRouter>
              <UserLayoutRouter exact restricted={false} path='/productDetails' component={ProductDetails}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/createPolls' component={CreatePolls}></UserLayoutRouter>

             <UserLayoutRouter restricted={false} path='/aboutUs' component={AboutUs}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/createBlogs' component={Blogs}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/Careers' component={Careers}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/Investors' component={Investors}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/LicenseAgreement' component={LicenseAgreement}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/PrivacyPolicy' component={PrivacyPolicy}></UserLayoutRouter>
             <UserLayoutRouter restricted={false} path='/TermsCondition' component={TermsCondition}></UserLayoutRouter>\
              </Switch>
              <Footer />
            </div>
            
        );
    }
}

export default withRouter(UserLayout);
