import "./App.css";
import { Route, Routes } from "react-router-dom";
import Topbar from "./component/Navbar";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import Register from "./pages/Register";

// import Register from "./pages/Register";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashbord />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
