/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privacy from "./AdminPanel/pages/Privacy";
import Offers from "./AdminPanel/pages/Category";
import FeedBack from "./AdminPanel/pages/FeedBack";
import TermsCon from "./AdminPanel/pages/TermsCon";
import HelpSupport from "./AdminPanel/pages/HelpSupport";
import OrderHistory from "./AdminPanel/pages/OrderHistory";
import Installar from "./AdminPanel/pages/Installar";
import Sellers from "./AdminPanel/pages/Sellers";
import Dashboard from "./AdminPanel/pages/Dashboard";
import Users from "./AdminPanel/pages/Users";
import Reviews from "./AdminPanel/pages/Reviews";
import Coupon from "./AdminPanel/pages/Coupon";
import Product from "./AdminPanel/pages/Product";
import About from "./AdminPanel/pages/About";
import Blogs from "./AdminPanel/pages/Blogs";
import Service from "./AdminPanel/pages/Service";
import Notification from "./AdminPanel/pages/Notification";
import SubCategory from "./AdminPanel/pages/SubCategory";
import Banner from "./AdminPanel/pages/Banner";
import Login from "./AdminPanel/Login";
import Transaction from "./AdminPanel/pages/Transaction";
import InstallerTransactions from "./AdminPanel/pages/InstallerTransactions";
import Vendorlogin from "./VendorPanel/Vendorlogin";
import VendorDashboard from "./VendorPanel/pages/VendorDashboard";
import VendorProducts from "./VendorPanel/pages/VendorProducts";
import VendorService from "./VendorPanel/pages/VendorService";
import VendorCategory from "./VendorPanel/pages/VendorCategory";

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
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/installer-transaction/:id" element={<InstallerTransactions />} />

        {/* Vendor Panel */}
        <Route path="/vendor/login" element={<Vendorlogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/products" element={<VendorProducts />} />
        <Route path="/vendor/service" element={<VendorService />} />
        <Route path="/vendor/category" element={<VendorCategory />} />
      </Routes>
    </>
  );
}

export default App;
