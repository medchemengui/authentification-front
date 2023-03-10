import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import { Route,Routes } from 'react-router-dom';
import Privitrout from './Component/Privitrout';
import AlertError from './Component/AlertError';


function App() {

 
  return (
    <div className="App">
    <AlertError />
      <Routes>
       <Route path='/' element={<Login  />} />
      <Route path='/profile' element={
      <Privitrout >
      <Profile />
      </Privitrout>
      } />
      </Routes>
      

    </div>
  );
}

export default App;
