import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './component/order/Order';
import About from './component/about/About';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/shipment' element={
          <RequireAuth><Shipment></Shipment></RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth><Inventory></Inventory></RequireAuth>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
