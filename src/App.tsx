import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing';
import Home from './pages/Home';
import SubCategories from './pages/SubCategories';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/:id" component={Home} />
        <Route exact path="/:id/:category" component={SubCategories} />
        <Route exact path="/:id/:category/:search" component={SearchResults} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
