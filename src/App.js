import {Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Dashboard from './components/Dashboard';
import { useContext } from 'react';
import { AuthContext } from './Auth/Context/AuthContext';
import { MapView } from './components/MapView';
import { WorkProgressTracker } from './components/WorkProgressTracker';

function App() {
  const {user} = useContext(AuthContext)
  console.log('Admin', user)
  return (
    <div className="App">           
        <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           {/* Admin-Dash */}
           <Route path='/dash' element={<Dashboard/>}/>
           {/* Map View Page */}
           <Route path='/areas' element={<MapView/>}/>
           {/*Progress Tracker page*/}
           <Route path='/progressTracker' element={<WorkProgressTracker/>}/>
        </Routes>      
    </div>
  );
}

export default App;
