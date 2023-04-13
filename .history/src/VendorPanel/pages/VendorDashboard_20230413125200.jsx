/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VendorDashboard = () => {
  const navigate = useNavigate();

  const [productCount, setProductCount] = useState("");
  const [categoryCount, setCategoryCount] = useState("");

  const sellerId = localStorage.getItem("vendorId");

  const fetchProductCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/api/product/seller/${sellerId}`
      );
      setProductCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  }, [sellerId]);

  const fetchCategoryCount = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/api/category/seller/${sellerId}`
      );
      setCategoryCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  }, [sellerId]);

  useEffect(() => {
    fetchProductCount();
    fetchCategoryCount();
  }, [fetchProductCount, fetchCategoryCount]);

  const card = [
    {
      progress: "bg-blue-400",
      title: "All Product's",
      number: productCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/vendor/products",
    },
    {
      progress: "bg-blue-400",
      title: "All Categories",
      number: categoryCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/vendor/category",
    },
    {
      progress: "bg-blue-400",
      title: "Total Orders",
      number: 200,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/vendor/order-history",
    },
    {
      progress: "bg-blue-400",
      title: "Most Selling Product",
      number: "Seat Cover",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/vendor/products",
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => (
          <div
            className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
            onClick={() => navigate(`${card.link}`)}
            key={index}
          >
            <div className="grid  justify-between grid-cols-4">
              <div className="flex flex-col col-span-3 space-y-1">
                <span className="tracking-widest text-gray-900">
                  {card.title}
                </span>
                <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                  {card.number}
                </span>
              </div>
              {/* Icons */}
              <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
