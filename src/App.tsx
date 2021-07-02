import React from 'react';

//ROUTER
import {
  StaticRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//APP PAGES
import HomeScreen from './features/Home/HomeScreen';
import TeamScreen from './features/Teams/TeamScreen';
import TeamsScreen from './features/Teams/TeamsScreen';
import CreatePlayerScreen from './features/Players/CreatePlayerScreen';
import EditPlayerScreen from './features/Players/EditPlayerScreen';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/teams" component={TeamsScreen} />
      <Route exact path="/teams/:id" component={TeamScreen} />
      <Route exact path="/player/create" component={CreatePlayerScreen} />
      <Route exact path="/player/edit/:id" component={EditPlayerScreen} />
    </Switch>

  );
}

export default App;
