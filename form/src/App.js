import { Route, Switch, Link } from "react-router-dom";
import TodoFeature from "./features/TodoFeature";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/todo">
          <TodoFeature></TodoFeature>
        </Route>
        <Route path="/">Home Page</Route>
      </Switch>
    </div>
  );
}

export default App;
