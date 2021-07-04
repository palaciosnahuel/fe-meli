import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./Components/navbar/Navbar";
import Productlist from './Components/productlist/Productlist';
import ProductItem from "./Components/ProductItem/ProductItem";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/items' component={Productlist} />
          <Route path='/items/:id'component={ProductItem} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;
