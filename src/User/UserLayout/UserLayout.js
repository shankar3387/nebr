import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/header';
import UserLayoutRouter from './UserLayoutRouter'
import Home from './Components/Home/Home'
import Footer from './Components/footer/footer'
export default class UserLayout extends Component {
    render() {
        return (
            <div>
              <Header />
              <Switch>
              <UserLayoutRouter restricted={false} path='/' component={Home}></UserLayoutRouter>
              </Switch>
              <Footer />
            </div>
            
        );
    }
}
