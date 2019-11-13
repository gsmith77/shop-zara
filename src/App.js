import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Jeans from './components/Jeans/Jeans'
import Filter from './components/Filter'
import Cart from './components/Cart';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Jean from './components/Jeans/Jean'


function App() {

  const renderJean = (props) => {
    return (
      <Jean browserFunctions={{...props}}/>
    )
  }

  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Route exact path="/view/:productId">
            {renderJean}
          </Route>
          <Route exact path="/">
            <Link to="/">
              <h1>Shop Zara</h1>
            </Link>
            <hr/>
            <div className="row">
              <div className="col-md-2">
                <Filter />
                <hr/>
              </div>
              <div className="cart">
                <Cart />
              </div>
              <div className="products">

              <Jeans />
              </div>
            </div>
          </Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
