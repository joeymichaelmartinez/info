import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';

function AppRouter() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Route path="/" exact component={Home} />
=======
        <Route path="/home" exact component={Home} />
>>>>>>> 76829f0b7451e43ae9e048f05e1e6a3748b2af1c
        <Route path="/GameDesign/" component={GameDesign} />
        <Route path="/OtherProjects/" component={OtherProjects} />
      </div>
    </Router>
  );
}

export default AppRouter;