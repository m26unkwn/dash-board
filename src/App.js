import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Auth, Header, Setting, Sidebar } from "./screens";

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <div className='main-container'>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Auth />} />
        <Route path='/signup' element={<Auth />} /> */}
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
