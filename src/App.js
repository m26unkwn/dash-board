import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Users, Auth, Header, Setting, Sidebar, Dashboard } from "./screens";
import { useAuth } from "./store/provider/auth-provider";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  const { auth } = useAuth();
  return (
    <div className={auth ? "app-container" : ""}>
      {auth && <Sidebar />}
      <div className={auth ? "main-container" : "auth-container"}>
        {auth && <Header />}
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/signup' element={<Auth />} />
          <Route element={<PrivateRoute />}>
            <Route path='/setting' element={<Setting />} />
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
