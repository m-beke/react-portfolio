import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/topScroll';

function App() {
  return (
    <>
      <ScrollToTop>
        <div className='header-bg'>
          <div className='app-header'>
            <Header />
          </div>
          <div className='app-wrapper'>
          </div>
          <Outlet />
          <div>
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    </>
  )
}

export default App;
