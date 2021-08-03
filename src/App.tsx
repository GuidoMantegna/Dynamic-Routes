import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Layout>
          <Route exact path="/:id" component={Home} />
          <Route exact path="/:id/:category" component={Category} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
