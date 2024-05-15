import logo from "./logo.svg";
import "./App.css";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import TodoFeature from "./features/TodoFeature";
import AblumFeature from "./features/AlbumFeature";
import HomeFeature from "./features/HomeFeature";
import NotFound from "./features/NotFound";

function App() {
  return (
    <div>
      Header
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">To do</Link>
        </li>
        <li>
          <Link to="/ablums">Ablums</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/ablums" component={AblumFeature} />
        <Route path="/" component={HomeFeature} exact />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
