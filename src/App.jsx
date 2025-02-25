import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
