import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar';
import ChampionDetails from './Pages/ChampionDetails';
import ItemsDetailsPage from './Pages/ItemsDetailsPage';
import ItemsDetails from './Pages/ItemsDetails';




function App() {

  return <> 

    <BrowserRouter>
    <NavBar></NavBar> 
    <Routes>
    <Route path= '/' element= {<HomePage></HomePage>} ></Route>
    <Route path= '/champion/:id' element= {<ChampionDetails></ChampionDetails>} ></Route>  
    <Route path= '/items/' element= {<ItemsDetails></ItemsDetails>} ></Route>  
    <Route path= '/items/:name' element= {<ItemsDetailsPage></ItemsDetailsPage>} ></Route> 
    </Routes> 
    </BrowserRouter>

    </>
  
}

export default App ;
