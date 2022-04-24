import './App.css';
import NavBar from './MyComponents/NavBar';
import Newnavbar from './MyComponents/Newnavbar'
import AboutUs from './MyComponents/AboutUs';
import Examples from './MyComponents/Examples';
import Header from './MyComponents/Header';
import CreateResume from './MyComponents/CreateResume';
import Faq from './MyComponents/Faq';
import Login from './MyComponents/login';
import Register from './MyComponents/register';
import ChooseTemplate from './MyComponents/ChooseTemplate';
import ContactUs from './MyComponents/ContactUs';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import {useState} from 'react';

function App() {
  const [user, setLoginUser] = useState({
   
  })

  return ( 
   <div>
     <Newnavbar />
     <Router>
        <Routes>
          <Route path="/" element=
          { 
            user && user._id ? <Header /> : <Login setLoginUser={setLoginUser} />
          }
          />
          <Route path="/login" element=
          {
          <Login setLoginUser={setLoginUser} />
          }
           />
          <Route path="/register" element={<Register />} />
          <Route path="/header" element={<Header />} />
          <Route path="/choosetemplate" element={<ChooseTemplate />} />
          <Route path="/createresume" element={<CreateResume />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          

        </Routes>
      </Router> 
      
    
      
     
   </div>
  );
}

export default App;

