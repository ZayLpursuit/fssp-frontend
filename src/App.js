
import './App.css';
import {BrowserRouter as Router,  Routes,Route} from "react-router-dom" 
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import IndexPage from './Components/IndexPage';
import NewPage from './Components/NewPage';
import ShowPage from './Components/ShowPage';
import EditPage from './Components/EditPage';
import Footer from './Components/Footer';





function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/logs' element={<IndexPage/>}/>
        <Route path='/new-log' element={<NewPage/>}/>
        <Route path='/logs/:id/edit' element={<EditPage/>}/>
        <Route path='/logs/:id' element={<ShowPage/>}/>


      </Routes>
      <Footer/>
    </Router>

 
  );
}

export default App;
