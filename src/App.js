import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import {
  Users,
  Auth,
  Header,
  Setting,
  Sidebar,
  Dashboard,
  RouteNotFound,
} from "./screens";
import { useAuth } from "./store/provider/auth-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const path = ["/setting", "/users", "/dashboard"];

function App() {
  const { auth } = useAuth();
  const { pathname } = useLocation();
  return (
    <div className={auth ? "app-container" : ""}>
      {path.includes(pathname) && <Sidebar />}
      <ToastContainer theme='colored' autoClose={2000} position='top-right' />

      <div className={auth ? "main-container" : "auth-container"}>
        {path.includes(pathname) && <Header />}
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/signup' element={<Auth />} />
          <Route element={<PrivateRoute />}>
            <Route path='/setting' element={<Setting />} />
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
