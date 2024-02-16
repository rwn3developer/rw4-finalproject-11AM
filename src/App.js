import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/admin/Dashboard';
import Category from './pages/admin/category/Category';
import Product from './pages/admin/product/Product';
import Addcategory from './pages/admin/category/Addcategory';
import Addproduct from './pages/admin/product/Addproduct';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/admin/dashboard' element={<Dashboard/>}/>
              <Route path='/admin/category' element={<Category/>}/>
              <Route path='/admin/product' element={<Product/>}/>
              <Route path='/admin/addcategory' element={<Addcategory/>}/>
              <Route path='/admin/addproduct' element={<Addproduct/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
