/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privacy from "./AdminPanel/pages/pages/Privacy";
import Offers from "./AdminPanel/pages/pages/Category";
import FeedBack from "./AdminPanel/pages/pages/FeedBack";
import TermsCon from "./AdminPanel/pages/pages/TermsCon";
import HelpSupport from "./AdminPanel/pages/pages/HelpSupport";
import OrderHistory from "./AdminPanel/pages/pages/OrderHistory";
import Installar from "./AdminPanel/pages/pages/Installar";
import Sellers from "./AdminPanel/pages/pages/Sellers";
import Dashboard from "./AdminPanel/pages/pages/Dashboard";
import Users from "./AdminPanel/pages/pages/Users";
import Reviews from "./AdminPanel/pages/pages/Reviews";
import Coupon from "./AdminPanel/pages/pages/Coupon";
import Product from "./AdminPanel/pages/pages/Product";
import About from "./AdminPanel/pages/pages/About";
import Blogs from "./AdminPanel/pages/pages/Blogs";
import Service from "./AdminPanel/pages/pages/Service";
import Notification from "./AdminPanel/pages/pages/Notification";
import SubCategory from "./AdminPanel/pages/pages/SubCategory";
import Banner from "./AdminPanel/pages/pages/Banner";
import Login from './AdminPanel/Login'

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* Admin Panel */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/products" element={<Product />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/category" element={<Offers />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/sub-category" element={<SubCategory />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/installar" element={<Installar />} />
        <Route path="/feedBacks" element={<FeedBack />} />
        <Route path="/terms-condition" element={<TermsCon />} />
        <Route path="/helpSupport" element={<HelpSupport />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
