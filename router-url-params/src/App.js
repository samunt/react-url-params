import React from 'react';
import {Route} from 'react-router-dom'
import Food from './Food'
import Meal from './Meal'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Using render allows you to pass in multiple props */}
      <Route exact
             path="/food/:name"
             render={(routeParams) => <Food authenticated={true} {...routeParams}/>}/>
      {/* Using component automatically passes in routeParams, but doesn't let you pass in anything else */}
      <Route exact
             path="/food/:foodName/drink/:drinkName"
             component={Meal}/>

    </div>
  );
}

export default App;
