import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect,HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserLayout from './User/UserLayout/UserLayout' 
import SellerLayoutRouter from './Seller/SellerLayout/SellerLayoutRouter'
import AdminLayoutRouter from './Admin/AdminLayout/AdminLayoutRouter'
function App() {
  localStorage.setItem('admin',true)
  return (
    <Router history={HashRouter}>
            <div>
              <Switch>
                    <Route path='/'>
                     <UserLayout />
                  </Route>
                  <Route path='/seller'>
                  <SellerLayoutRouter />
                  </Route>
                  <Route path='/admin'>
                    <AdminLayoutRouter />
                  </Route>
              </Switch>
            </div>
          </Router>
  );
}

export default App;
