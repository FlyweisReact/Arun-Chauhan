/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/userkundli",
      name: "Tour",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/discount",
      name: "Packages",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/horoscope",
      name: "Booking",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/specification",
      name: "Transaction",
    },
  ];

  const logOut = () => {
    navigate("/");
    toast.success("Log -Out Successfull");
  };
  return (
    <>
      <div className="p-4" style={{
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
          <span className="font-bold text-[rgb(241,146,46)] text-2xl"   style={{ fontSize: "2rem", textAlign: "center", color: "#fff" }}>
            Vendor Panel
         
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="" style={{textDecoration : 'none'}}>
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm" style={{ color: "#aac0bb"  , textDecoration : 'none'}}>
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()} style={{ color: "#aac0bb"  , textDecoration : 'none'}}
          >
            <BiLogOutCircle className="text-xl mr-3" /> Log-Out
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
