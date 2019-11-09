import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Jeans from './components/jeans'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Jeans />
      </div>
    </Provider>
  );
}

export default App;
