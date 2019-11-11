import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Jeans from './components/Jeans'
import Filter from './components/Filter'
import Cart from './components/Cart';


function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Shop Zara</h1>
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
      </div>
    </Provider>
  );
}

export default App;
