import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ProductList from './Components/ProductList/ProductList';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/items' component={ProductList} />
          <Route path='/items/:id'component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
