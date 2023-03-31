/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle  } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import {FaProductHunt } from 'react-icons/fa'


const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/vendor/dashboard",
      name: "Dashboard",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/vendor/products",
      name: "Products",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/vendor/service",
      name: "Services",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/vendor/category",
      name: "Categories",
    },
      
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/vendor/sub-category",
      name: "Sub-Categories",
    },      
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/vendor/order-history",
      name: "Order History",
    },      
  ];

  const logOut = () => {
 localStorage.clear()
  navigate("/vendor/login");
  };

  return (
    <>
      <div className="p-4 h-auto"   style={{
          backgroundColor: "#263544",
          minHeight : '100vh'
        }}>
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
        <span
            className="font-bold text-[rgb(241,146,46)]"
            style={{ fontSize: "2rem", textAlign: "center", color: "#fff" }}
          >
            Seller Panel
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="" style={{textDecoration : 'none'}}>
                <span className="flex my-3 items-center cursor-pointer    tracking-wider p-2 rounded-sm"  style={{ color: "#aac0bb"  , textDecoration : 'none'}}>
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#aac0bb" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
