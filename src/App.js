import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';

//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Notification />
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
