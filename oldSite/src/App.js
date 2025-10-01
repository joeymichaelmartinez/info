import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import InfoPageWrapper from './components/pages/infoPageWrapper/InfoPageWrapper';
import { BootScreen } from "./components/pages/bootScreen/bootScreen";

export default function AppRouter() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/boot" >
          <BootScreen />
        </Route>
        <Route
          path="/info"
        >
          <InfoPageWrapper />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

