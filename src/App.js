import './App.css';
import{Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mydocuments from './components/Mydocuments';
import Registration from './components/Registration';
import License from './components/License';
import Permit from './components/Permit';
import Register from './components/Register';
import Applylicense from './components/Applylicense';
import Applypermit from './components/ApplyPermit';
import Sample from './components/Sample';

function App() {
  return (
    <>
     <Header/>
    <Navbar/>
    {/* <Sample/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='mydocs' element={<Mydocuments/>}/>
        <Route path='myrc' element={<Registration/>}/>
        <Route path='mylic' element={<License/>}/>
        <Route path='myper' element={<Permit/>}/>
        <Route path='regapp' element={<Register/>}/>
        <Route path='licapp'  element={<Applylicense/>}/>
        <Route path='perapp' element={<Applypermit/>}/>
      </Routes>
    <Footer/> 
    
    </>
  );
}

export default App;
