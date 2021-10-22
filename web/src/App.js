import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigationbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import ScrollToTop from './utils/ScrollToTop';
import Recruiters from './pages/Recruiters';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navigationbar />
      <ScrollToTop />
      <Route path="/" component={Home} exact />
      <Route path="/jobs" component={Jobs} exact />
      <Route path="/recruiters" component={Recruiters} exact />
      <Route path="/companies" component={Companies} exact />
      <Route path="/about" component={AboutUs} exact />
      <Route path="/login" component={Login} exact />
      <Footer />
    </Router>
  );
}

export default App;
