
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
        <Route path="./" element={<home/>}/>

      </Router>
     </React.Fragment>
    </div>
  )
}

export default App;
