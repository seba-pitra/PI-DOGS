import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route exact path={"/landing"} component={Landing} />
      <Route exact path={"/"} render={() => <Home />} />
    </div>
  );
}

export default App;
