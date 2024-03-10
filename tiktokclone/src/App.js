import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={"Login Page"}></Route>
        <Route path="/upload" element={"upload video Page"}></Route>
        <Route path="/profile" element={"profile Page"}></Route>
      </Routes>
    </div>
  );
}

export default App;
