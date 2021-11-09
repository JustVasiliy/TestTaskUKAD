import React from 'react';
import Navigation from './Navigation'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import './Header.css'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
const Header = () => {
    return (
        <div >
        
            
             <Router>
                <Navigation/>
                 <Switch>
                     <Route path="/" exact component={HomePage}></Route>
                     <Route path="/products" exact component={ProductPage}></Route>
                 </Switch>
             </Router>
        
        
        </div>
    );
};

export default Header;