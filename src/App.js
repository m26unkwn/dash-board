import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Users, Auth, Header, Setting, Sidebar, Dashboard } from "./screens";

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
          <Route path='/users' element={<Users />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
