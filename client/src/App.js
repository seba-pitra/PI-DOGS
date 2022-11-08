import "./App.css";
import Nav from "./components/NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Nav} />
    </div>
  );
}

export default App;
