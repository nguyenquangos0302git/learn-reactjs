import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Albums from "./features/Albums";
import Home from "./features/Home";
import NotFound from "./features/NotFound";
import ProductFeature from "./features/Product";
import Todos from "./features/Todos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/todos" component={Todos}></Route>
        <Route path="/albums" component={Albums}></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/" component={Home} exact></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
