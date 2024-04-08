import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./View/homePage";
import UploadVideoPage from "./View/uploadVideoPage";

import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./View/profilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={"Login Page"}></Route>
        <Route path="/upload" element={<UploadVideoPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="*" element={"404 Page not found "} />
      </Routes>
    </div>
  );
}

export default App;
