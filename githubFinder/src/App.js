import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  return (
    // <div className="App">
    //   {/* <Switch>
    //     <Route exact path="/" component={MyApp} />
    //     <Route path="your" component={YourApp} />
    //   </Switch> */}
    //   <Switch>
    //     <Route exact path="/" component={MyApp} />
    //     <Route path="your" component={MyApp} />
    //   </Switch>
    // </div>
    <div className="App">
      <Switch>
        <Route path="/your" component={Profile} />
        <Route exact path="/" component={SearchBar} />
      </Switch>
    </div>
  );
}

export default App;