import "./App.css";
import Nav from "./components/NavBar";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Nav} />
      <Route exact path={"/landing"} component={Landing} />
    </div>
  );
}

export default App;
