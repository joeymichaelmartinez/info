import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/GameDesign/" component={GameDesign} />
        <Route path="/OtherProjects/" component={OtherProjects} />
      </div>
    </Router>
  );
}

export default AppRouter;