import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './component/order/Order';
import About from './component/about/About';
import Inventory from './component/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>

    </div>
  );
}

export default App;
