import { Routes, Route, Navigate } from "react-router-dom";
import {HomePage, Search, LoginPage, CartPage, Register, Contact, AboutPage} from '../pages/index';

const Routers = () => {
        return (
                <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/all" element={<Search />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<AboutPage />} />
                </Routes>
        )
}

export default Routers
