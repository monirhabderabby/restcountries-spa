import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Countries></Countries>}></Route>
      </Routes>
    </div>
  );
}

export default App;
