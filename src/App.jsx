import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className='header-bg'>
      <div className='app-header'>
        <Header />
        <Navbar />
      </div>
      </div>
        <Outlet />
      <div>
        <Footer />
      </div>
      
    </>
  )
}

export default App;
