
import './App.css';
import CardList from './Components/CardList';
import Consultation from './Components/Consultation';
import ContactUs from './Components/ContactUs';
import Main from './Components/Main';
import Navabar from './Components/Navbar';
import ProPic from './Components/ProPic';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Form from './Components/Form';
import Address from './Components/Address';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{AOS.init({})},[])
  return (
    <div className="App">
      <Navabar/>
      <Main/>
      <CardList/>
      <ProPic/>
      <Services/>
      <ContactUs/>
      <Consultation/>
      <Projects/>
      <Form/>
      <Address/>
      <Footer></Footer>
    </div>
  );
}

export default App;
