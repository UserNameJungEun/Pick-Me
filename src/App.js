import './App.css';
import { Routes, Route } from 'react-router-dom';


import Header from './pages/Header/Header';
import Introduce from './pages/Introduce/Introduce';
import Search from './pages/Search/Search';
import Gallery from './pages/Gallery/Gallery';
import Board from './pages/Board/Board';
import Contents from './pages/Contents/Contents';
import Shop from './pages/Shop/Shop';
import Main from './pages/Main/Main';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/Introduce' element={<Introduce />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Board' element={<Board />} />
        <Route path='/Contents' element={<Contents />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Main' element={<Main />} />

      </Routes>
    </div>
  );
}

export default App;
