import React, { useEffect, useState } from "react";
import HOC from "../../../vendorPanel/components/layout/HOC";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const dash = (data) => {
  console.log(data, "dsjkfhjkashfjk");
  return data;
};
const VendorDashboard = () => {

  const navigate = useNavigate()


  const [ passengerCount , setPassengerCount  ] = useState('')
  const [ busCount , setBusCount ] = useState("")
  const [ bookCount , setBookCount ] = useState("")
  const [ transCount , setTransCount ] = useState("")

  const fetchData = async () => {
    try{
      const { data } = await axios.get( "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/api/GetPassengerInfoAdmin")
      setPassengerCount(data.passengerdata.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const fetchData2 = async () => {
    try{
      const { data } = await axios.get("https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/FindBusRouter/getBusesByAdmin")
      setBusCount(data.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const fetchData3= async () => {
    try{
      const { data } = await axios.get("https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/BookingRouter/getbookingByAdmin")
      setBookCount(data.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const fetchData4= async () => {
    try{
      const { data } = await axios.get( "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/paymentRouter/users/getAllPaymentsByAdmin")
      setTransCount(data.details.length)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(( ) => {
    fetchData()
    fetchData2()
    fetchData3()
    fetchData4()
  },[])




  const card = [
    {
      progress: "bg-blue-400",
      title: "All Passengers",
      number: passengerCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : "/ven"
    },
    {
      progress: "bg-blue-400",
      title: "All Buses",
      number: busCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/transaction'
    },
    {
      progress: "bg-blue-400",
      title: "All Bookings",
      number: bookCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/order'
    },
    {
      progress: "bg-blue-400",
      title: "All Transactions",
      number: transCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/trans'
    },  
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md" onClick={() => navigate(`${card.link}`)}>
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

export default HOC(VendorDashboard);
