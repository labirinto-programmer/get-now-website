import { Routes, Route, Navigate } from "react-router-dom";
import {HomePage, SearchPage, LoginPage, CartPage, Register, ContactPage, AboutPage, FavoritePage} from '../pages/index';

const Routers = () => {
        return (
                <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/all" element={<SearchPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/favorite" element={<FavoritePage />} />
                </Routes>
        )
}

export default Routers
