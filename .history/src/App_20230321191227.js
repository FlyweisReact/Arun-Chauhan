/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privacy from "./components/vendorPanel/components/pages/Privacy";
import Transactions from "./components/vendorPanel/components/pages/Banner";
import CurrentPass from "./components/vendorPanel/components/pages/SubCategory";
import Offers from "./components/vendorPanel/components/pages/Category";
import FeedBack from "./components/vendorPanel/components/pages/FeedBack";
import TermsCon from "./components/vendorPanel/components/pages/TermsCon";
import HelpSupport from "./components/vendorPanel/components/pages/HelpSupport";
import OrderHistory from "./components/vendorPanel/components/pages/OrderHistory";
import Installar from "./components/vendorPanel/components/pages/Installar";
import Sellers from "./components/vendorPanel/components/pages/Sellers";
import Login from "./components/vendorPanel/components/forms/Login";
import Dashboard from "./components/vendorPanel/components/pages/Dashboard";
import Users from "./components/vendorPanel/components/pages/Users";
import Reviews from "./components/vendorPanel/components/pages/Reviews";
import Coupon from "./components/vendorPanel/components/pages/Coupon";
import Product from "./components/vendorPanel/components/pages/Product";
import About from "./components/vendorPanel/components/pages/About";
import Blogs from "./components/vendorPanel/components/pages/Blogs";
import Service from "./components/vendorPanel/components/pages/Service";
import Notification from "./components/vendorPanel/components/pages/Notification";
import SubCategory from "./components/vendorPanel/components/pages/SubCategory";
import Banner from "./components/vendorPanel/components/pages/Banner";

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
