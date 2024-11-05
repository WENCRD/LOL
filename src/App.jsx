import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar';
import ChampionDetails from './Pages/ChampionDetails';



function App() {

  return <> 

    <BrowserRouter>
    <NavBar></NavBar> 
    <Routes>
    <Route path= '/' element= {<HomePage></HomePage>} ></Route>
    <Route path= '/champion/:id' element= {<ChampionDetails></ChampionDetails>} ></Route>  
    </Routes> 
    </BrowserRouter>

    </>
  
}

export default App ;
