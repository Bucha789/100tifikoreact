import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';


export default function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/character/:id' component={CharacterDetails} />
    </Switch>
    </BrowserRouter>
  )
}