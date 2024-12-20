
import { Router } from 'react-router';
import './App.css';
import'./Components/Home/Home'
import Home from './Components/Home/Home';

function App (){
  return(
    <div>
      <Home></Home>
     <React.Fragment>
      <Router>
        <Route path="./mainhome" element={<home/>}/>
        <Route path="./adduser" element={<User/>}/>
        <Route path="./userdetails/:id" element={<updateuERS/>}/>
      </Router>
     </React.Fragment>
    </div>
  )
}

export default App;
