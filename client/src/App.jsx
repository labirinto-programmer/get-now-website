import {BrowserRouter} from 'react-router-dom';
import Routers from './routes/Routers';
import {Header, Footer} from './sections/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;