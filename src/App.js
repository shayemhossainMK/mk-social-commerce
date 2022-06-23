import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Bangla from "./pages/Home/Bangla/Bangla";
import English from "./pages/Home/English/English";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Shared/Login/Login";
import Signup from "./pages/Shared/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bangla" element={<Bangla></Bangla>}></Route>
        <Route path="/english" element={<English></English>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
