import './App.css';

//route
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Navigate to="/Home"/>}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
