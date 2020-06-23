import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Food from './Food'
import Meal from './Meal'
import NotFound from './NotFound'
import FoodSearch from './FoodSearch'
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          {/* Using render allows you to pass in multiple props */}
          <Route exact
                 path="/food/:name"
                 render={(routeParams) => <Food authenticated={true} {...routeParams}/>}/>
          {/* Using component automatically passes in routeParams, but doesn't let you pass in anything else */}
          <Route exact
                 path="/food/:foodName/drink/:drinkName"
                 component={Meal}/>
          {/*   Home path  */}
          <Route exact path='/' render={() => <FoodSearch/>}/>
          {/* 404 path */}
          <Route exact render={() => <NotFound/>}/>
        </Switch>
    </div>
  );
}

export default App;
