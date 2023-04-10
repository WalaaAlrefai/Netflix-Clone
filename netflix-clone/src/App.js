import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import FavList from "./components/FavList";
function App() {
  return (
    // <Home />
    <>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/getMovies" element={<FavList />}></Route>
  </Routes>
  </>
  );
}

export default App;
