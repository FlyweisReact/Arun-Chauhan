/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [passengerCount, setPassengerCount] = useState("");
  const [busCount, setBusCount] = useState("");
  const [bookCount, setBookCount] = useState("");
  const [ count , setCount ] = useState('')
  const [ count1  , setCount1] = useState("")

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/user"
      );
      setPassengerCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData2 = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product"
      );
      setBusCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData3 = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category"
      );
      setBookCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  
  const fetchData4 = async () => {
    try {
      const { data } = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product/mostProduct"
      );
      setCount(data[0].productName);
    } catch (e) {
      console.log(e);
    }
  };
  
  const fetchData5 = async () => {
    try {
      const { data } = await axios.post(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/user/active"
      );
      setCount1(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };



  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
    fetchData4()
    fetc
  }, []);

  const card = [
    {
      progress: "bg-blue-400",
      title: "All User's",
      number: passengerCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/users",
    },
    {
      progress: "bg-blue-400",
      title: "All Product's",
      number: busCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/products",
    },
    {
      progress: "bg-blue-400",
      title: "All Categories",
      number: bookCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/category",
    },
    {
      progress: "bg-blue-400",
      title: "Total Active User",
      number: 20,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/users",
    },
    {
      progress: "bg-blue-400",
      title: "Total Orders",
      number: 200,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/order-history",
    },
    {
      progress: "bg-blue-400",
      title: "Most Sold Product",
      number: count,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/products",
    },
    {
      progress: "bg-blue-400",
      title: "Top Seller",
      number: "Manish Sharma",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/sellers",
    },
    {
      progress: "bg-blue-400",
      title: "Avg. sale Order",
      number: "Cover",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/order-history",
    },
  ];
  return (
    <>
      <div className="drop">
        <select>
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              onClick={() => navigate(`${card.link}`)}
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
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
