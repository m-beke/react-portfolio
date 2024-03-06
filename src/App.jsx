import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className='appHeader'>
        <Header />
        <Navbar />
      </div>
        <Outlet />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App;
