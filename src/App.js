import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from "./components/layout/Login";
import Home from './components/pages/Home';
import Job from './components/pages/Job';
import Feed from './components/pages/Feed';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import EmployeeSignIn from './components/pages/EmployeeSignIn';
import EmployerSignIn from './components/pages/EmployerSignIn';
import EmployeHeader from './components/layout/EmployeHeader';
import EmployeeProfile from './components/pages/Employee/EmployeeProfile';
import EmployeeDashboard from './components/pages/Employee/Dashboard';
import EmployerDashboard from './components/pages/Employer/Dashboard'
import { LogOut } from './components/pages/LogOut';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fonts.css';
import './assets/css/flaticon.css';
// import './assets/css/font-awesome.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.default.css';
// import './assets/css/dropify.min.css';
// import './assets/css/jquery-ui.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/responsive.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
              <Routes >
                  <Route path='/' exact= {true} element={ <Home /> } />
                  <Route path='/job'  element={ <Job /> } />
                  <Route path='/feed'  element={ <Feed /> } />
                  <Route path='/about-us'  element={ <AboutUs /> } />
                  <Route path='/contact'  element={ <Contact /> } />
                  <Route path='/login'  element={ <Login /> } />
                  <Route path='/employe-sign' element={ <EmployeeSignIn /> } />
                  <Route path='/employer-sign' element={ <EmployerSignIn /> } />
                  <Route path='/employe-header' element={ <EmployeHeader /> } />
                  <Route path='/employe-profile' element={ <EmployeeProfile /> } />
                  <Route path='/employe-dashboard' element={ <EmployeeDashboard /> } />
                  <Route path='/employer-dashboard' element={ <EmployerDashboard /> } />
                  <Route path='/logOut' element={ <LogOut /> } />
              </Routes >
          </Router>
      </Provider> 
    </div>
  );
}

export default App;
