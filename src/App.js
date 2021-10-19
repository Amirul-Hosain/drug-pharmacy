import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './coponents/Home/Home/Home';
import Header from './coponents/Shared/Header/Header';
import NotFound from './coponents/NotFound/NotFound';
import Services from './coponents/Services/Services';
import Login from './coponents/Login/Login';
import Register from './coponents/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './coponents/PrivateRoute/PrivateRoute';
import ServiceDetail from './coponents/ServiceDetail/ServiceDetail';
import Contact from './coponents/Contact/Contact';
import About from './coponents/About/About';
import Footer from './coponents/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path='/servicedetail/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
