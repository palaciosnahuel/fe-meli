import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Productlist from './Components/productlist/Productlist';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/items' component={Productlist} />
          <Route path='/items/:id'component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
