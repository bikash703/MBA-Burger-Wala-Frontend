import './styles/App.scss'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping.jsx';
import ConfirmOrder from './components/cart/ConfirmOrder.jsx';
import PaymentSuccess from './components/cart/PaymentSuccess.jsx';
import Login from './components/login/Login.jsx';
import Profile from './components/profile/Profile.jsx';
import Orders from './components/orders/Orders.jsx';
import OrderDetails from './components/orders/OrderDetails.jsx';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users.jsx';
import Order from './components/admin/Order.jsx';
import About from './components/about/About';
import Error from './components/error/Error';

function App() {
  return (
    <Router>
      <Navbar isAuth={true} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/confirmOrder' element={<ConfirmOrder />} />
        <Route path='/paymentSuccess' element={<PaymentSuccess />} />
        <Route path='/login' element={<Login />} />
        <Route path='/me' element={<Profile />} />
        <Route path='/myorder' element={<Orders />} />
        <Route path='/order/:id' element={<OrderDetails />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/orders' element={<Order />} />
        <Route path='/about' element={<About />} />


        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
