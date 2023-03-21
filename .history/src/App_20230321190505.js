/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MSG from "./components/vendorPanel/components/pages/Message";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/vendorPanel/components/pages/Reviews";
import Product from "./components/vendorPanel/components/pages/Product";
import Order from "./components/vendorPanel/components/pages/Order";
import Complaint from "./components/vendorPanel/components/pages/Complaint";
import Vendor from "./components/vendorPanel/components/pages/Users";
import Tour from "./components/vendorPanel/components/pages/Tour";
import Transaction from "./components/vendorPanel/components/pages/Transaction";
import Privacy from "./components/vendorPanel/components/pages/Privacy";
import Transactions from "./components/vendorPanel/components/pages/Transactions";
import CurrentPass from "./components/vendorPanel/components/pages/CurrentPass";
import Offers from "./components/vendorPanel/components/pages/Offers";
import FeedBack from "./components/vendorPanel/components/pages/FeedBack";
import TermsCon from "./components/vendorPanel/components/pages/TermsCon";
import HelpSupport from "./components/vendorPanel/components/pages/HelpSupport";
import OrderHistory from "./components/vendorPanel/components/pages/OrderHistory";
import Installar from "./components/vendorPanel/components/pages/Installar";
import Sellers from "./components/vendorPanel/components/pages/Sellers";
import Login from "./components/vendorPanel/components/forms/Login";
import Dashboard from "./components/vendorPanel/components/pages/Dashboard";

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
        <Route path="/products" element={<Tour />} />
        <Route path="/coupon" element={<Product />} />
        <Route path="/about" element={<Transaction />} />
        <Route path="/review" element={<Users />} />
        <Route path="/blogs" element={<Order />} />
        <Route path="/services" element={<Complaint />} />
        <Route path="/category" element={<Offers />} />
        <Route path="/notification" element={<MSG />} />
        <Route path="/sub-category" element={<CurrentPass />} />
        <Route path="/banners" element={<Transactions />} />
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
