import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  //local
  const url='http://localhost:4003';

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/'  />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
