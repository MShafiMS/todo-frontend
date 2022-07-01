import { Route, Routes } from "react-router-dom";
import './App.css';
import Calendaar from "./components/Calendar/Calendaar";
import CompletedTask from "./components/CompletedTask/CompletedTask";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div data-theme="corporate">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/completed" element={<CompletedTask></CompletedTask>}></Route>
      <Route path="/calendar" element={<Calendaar></Calendaar>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
