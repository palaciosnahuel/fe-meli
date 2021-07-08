import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ProductList from './Components/ProductList/ProductList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Page404 from './Components/Page404/Page404';

function NoMatch() {
  return (
    <div>
      <h3>
        No match for
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/items' component={ProductList} />
          <Route exact path='/items/:id'component={ProductDetail} />
          <Route exact path='/items/:id/description'component={ProductDetail} />
          <Route path="*">
            <Page404/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
