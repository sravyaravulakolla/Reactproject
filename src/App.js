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
import Navbar1 from './components/Navbar1';
import Header1 from './components/Header1';
import Home1 from './components/Home1'
import Pending from './components/Pending';
import Approved from './components/Approved';
import Rejected from './components/Rejected';
import Registration1 from './components/Registration1';
import Pendingreg from './components/Pendingreg';
import Approvedreg from './components/Approvedreg';
import Rejectedreg from './components/Rejectedreg';
import License1 from './components/License1';
import Permit1 from './components/Permit1';
import Pendinglic from './components/Pendinglic';
import Approvedlic from './components/Approvedlic';
import Rejectedlic from './components/Rejectedlic';
import Pendingper from './components/Pendingper';
import Approvedper from './components/Approvedper';
import Rejectedper from './components/Rejectedper';

function App() {
  return (
    <>
     <Header/>
     {/* <Header1 />    */}
    <Navbar/>
    <Navbar1 />
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
        <Route path='/' element={<Home1 />} />
        <Route path='pending' element={<Pending />} />
        <Route path='approved' element={<Approved />} />
        <Route path='rejected' element={<Rejected />} />
        <Route path='reg' element={<Registration1 />} />
        <Route path='pendingreg' element={<Pendingreg />} />
        <Route path='approvedreg' element={<Approvedreg />} />
        <Route path='rejectedreg' element={<Rejectedreg />} />
        <Route path='lic' element={<License1 />} />
        <Route path='pendinglic' element={<Pendinglic />} />
        <Route path='approvedlic' element={<Approvedlic />} />
        <Route path='rejectedlic' element={<Rejectedlic />} />
        <Route path='per' element={<Permit1 />} />
        <Route path='pendingper' element={<Pendingper/>}/>
        <Route path='approvedper' element={<Approvedper/>}/>
        <Route path='rejectedper' element={<Rejectedper/>}/>

      </Routes>
    <Footer/> 
    
    </>
  );
}

export default App;
