import "./App.css";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./components/Pages/HomePage/Home";
import Login from "./components/Pages/Login/login";
import Register from "./components/Pages/Register/register";
import LoginMain from "./components/Pages/Login/LoginMain";
import SideBar from "./components/HomeSections/SideBar/sideBar";
import DemoPreview from "./components/demoPreview";

function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/loginMain" element={<LoginMain />}/>
      <Route path="/sideBar" element={<SideBar/>}/>
      <Route path="/demoPreview" element={<DemoPreview/>}/>
    </Routes>
      </BrowserRouter>
  
    </div>
  );
};

export default App;
