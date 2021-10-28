import './App.css';
import Header from "./components/Header"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import ReturnOrders from "./components/ReturnOrders"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout"><Header/><Checkout/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/returns"><ReturnOrders/></Route>
          <Route path="/"><Header/><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


