import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import DogCard from "./components/DogCard";
import CreateDog from "./components/CreateDog";
import Nav from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Nav} />
      <Route exact path={"/landing"} component={Landing} />
      <Route exact path={"/"} render={() => <Home />} />
      <Route exact path={"/dog/:id"} component={DogCard} />
      <Route exact path={"/dogs/create"} component={CreateDog} />
    </div>
  );
}

export default App;
