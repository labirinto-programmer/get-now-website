import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from './pages/index';
import {Header} from './sections/index';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;