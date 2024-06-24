import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route excat path='/' element={<Home/>}/>
          <Route excat path='/adduser' element={<AddUser/>}/>
          <Route excat path='/updateuser/:id' element={<EditUser/>}/>
          <Route excat path='/viewdetails/:id' element={<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
