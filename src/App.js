import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/Home/Signup/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import Orders from './Pages/Orders/Orders';



function App() {
  return (
    <div className='m-0' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
