import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./Components/navbar/Navbar";
import Productlist from './Components/productlist/Productlist';
import Product from "./Components/product/Product";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/items' component={Productlist} />
          <Route path='/post/:id'component={Product} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;
