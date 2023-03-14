/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BiLogOutCircle ,BiCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import {FaProductHunt , FaUserCircle} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: <FiUsers className="text-xl mr-3" />,
      link: "/ven",
      name: "Users",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/tour",
      name: "Wallet",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/product",
      name: "Ratings",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/transaction",
      name: "Buses",
    },
    {
      icon: <FaUserCircle className="text-xl mr-3" />,
      link: "/users",
      name: "Pass",
    },
    {
      icon: <BsFillCartFill className="text-xl mr-3" />,
      link: "/order",
      name: "Bookings",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/complaint",
      name: "Help&Support",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/offers",
      name: "Banners",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/msg",
      name: "Notification",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/currentPass",
      name: "Current Pass",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/trans",
      name: "Transactions",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/feedBacks",
      name: "Feedback",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/termsCon",
      name: "Term&Condition",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/helpSupport",
      name: "Help&Support",
    },    
    {
      icon: <BiCategory className="text-xl mr-3" />,
      link: "/privacy",
      name: "Privacy policy",
    } 
  ];

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/vendorLogin");
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
            Admin Panel
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
