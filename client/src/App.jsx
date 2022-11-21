import {BrowserRouter} from 'react-router-dom';
import Routers from './routes/Routers';
import {Header} from './sections/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers/>
    </BrowserRouter>
  );
}

export default App;