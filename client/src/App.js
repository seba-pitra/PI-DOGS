import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CreateDog from "./components/CreateDog";
import DogDetail from "./components/DogDetail";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} render={() => <Landing />} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/dogs/:id"} component={DogDetail} />
      <Route exact path={"/dogs/create"} component={CreateDog} />
    </div>
  );
}

export default App;
