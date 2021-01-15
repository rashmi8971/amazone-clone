import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";
import Header2 from "./Header2";
import Header3 from "./Header3";

function App() {
  return (
    // BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
           <Header />
           <Checkout />
           <Subtotal />
           {/* inside home page */}
        </Route>
        <Route path="/">
         <Header3 />
          <Header2 />
          <Header />
          
           <Home />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
