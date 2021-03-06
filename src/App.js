import React from 'react';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Checkout from './components/Checkout'

export default class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/cart" component={Cart}/>
                  {/* <Route exact path="/checkout" component={Checkout}/> */}
                </Switch>
          </div>
       </BrowserRouter>
    );
  }
}