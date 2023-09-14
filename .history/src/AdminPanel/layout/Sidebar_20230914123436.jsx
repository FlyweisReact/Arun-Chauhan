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
import { Store } from "react-notifications-component";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <FiUsers className="text-xl mr-3" />,
      link: "/users",
      name: "Users",
    },
    {
      icon: <FiUsers className="text-xl mr-3" />,
      link: "/sellers",
      name: "Sellers",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/products",
      name: "Products",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/coupon",
      name: "Coupon's",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/about",
      name: "About Us",
    },
    {
      icon: <FaUserCircle className="text-xl mr-3" />,
      link: "/review",
      name: "Reviews",
    },
    {
      icon: <BsFillCartFill className="text-xl mr-3" />,
      link: "/blogs",
      name: "Blogs",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/services",
      name: "Services",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/category",
      name: "Categories",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/notification",
      name: "Notification",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/sub-category",
      name: "Sub-Categories",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/banners",
      name: "Banners",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/order-history",
      name: "Order History",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/installar",
      name: "Installer",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/feedBacks",
      name: "Feedback",
    },    
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/terms-condition",
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
    localStorage.clear();
    Store.addNotification({
      title: "",
      message: "Logged Out Success",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    navigate("/");
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
