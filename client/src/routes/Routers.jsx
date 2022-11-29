import { Routes, Route, Navigate } from "react-router-dom";
import {Home, Search} from '../pages/index';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<Search />} />
    </Routes>
  )
}

export default Routers
