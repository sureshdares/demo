import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" pathname=" " element={<Login />} />

        <Route path="/users" element={<Users />} />
        {/* <Route path="/test/*" element={<TestRouter />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
