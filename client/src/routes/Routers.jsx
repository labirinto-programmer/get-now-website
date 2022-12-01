import { Routes, Route, Navigate } from "react-router-dom";
import {Home, Search, Login, Register, Contact, AboutPage} from '../pages/index';

const Routers = () => {
        return (
                <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/all" element={<Search />} />
                        <Route path="/all" element={<Search />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<AboutPage />} />
                </Routes>
        )
}

export default Routers
