import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/admin/dashboard' element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
