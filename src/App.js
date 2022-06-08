import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Auth, Sidebar } from "./screens";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
        <Route path='/setting' element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
