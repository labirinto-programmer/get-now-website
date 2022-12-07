import { Routes, Route, Navigate } from "react-router-dom";
import {HomePage, SearchPage, LoginPage, CartPage, RegisterPage, ContactPage, AboutPage, FavoritePage, CheckoutPage, PaymentPage, NotFoundPage} from '../pages/index';

const Routers = () => {
        return (
                <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/all" element={<SearchPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/checkout" element={<CheckoutPage/>} />
                        <Route path="/favorite" element={<FavoritePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                </Routes>
        )
}

export default Routers
