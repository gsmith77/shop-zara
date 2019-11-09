import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Jeans from './components/Jeans'
import Filter from './components/Filter'


function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <h1 style={{'textAlign': 'center'}}>Shop Zara</h1>
        <hr/>
        <div className="row">
          <div className="col-md-9">
            <Filter />
            <hr/>
            <Jeans />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
