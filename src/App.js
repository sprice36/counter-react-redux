import React, { Component } from 'react';

import {createStore} from 'redux';
import {counter } from './reducers';
import {Provider } from 'react-redux';

//import wrapped Counter in smart container
import Counter from './containers/CounterContainer';

const store = createStore(counter,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      //connects redux store to smart component
      <Provider store = {store}> 
      <div className="App">
        <Counter /> 
      
      </div>
      </Provider> 
    );
  }
}

export default App;
