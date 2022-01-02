import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home.js"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
