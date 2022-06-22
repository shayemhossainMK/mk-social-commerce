import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bangla from "./pages/Home/Bangla/Bangla";
import English from "./pages/Home/English/English";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bangla" element={<Bangla></Bangla>}></Route>
        <Route path="/english" element={<English></English>}></Route>
      </Routes>
    </div>
  );
}

export default App;
