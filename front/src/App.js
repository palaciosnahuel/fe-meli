import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./Components/navbar/Navbar";
import Productlist from './Components/productlist/Productlist';
import ProductItem from "./Components/ProductItem/ProductItem";
import './Styles/App.scss';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/items' component={Productlist} />
          <Route path='/items/:id'component={ProductItem} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
