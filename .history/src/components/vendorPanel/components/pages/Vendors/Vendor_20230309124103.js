/** @format */

import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/api/GetPassengerInfoAdmin"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);



  const deleteData = async (id) => {
    try{
      const { data } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/api/DeletePassengerByIdAdmin/${id}`)
      console.log(data)
      toast.success('Passenger Deleted')
      fetchData()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Passengers
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th> Address</th>
                <th> Location </th>
                <th> Zip Code </th>
                <th> Mobile Number</th>
                <th>  Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.passengerdata?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.address} </td>
                  <td> {i.location} </td>
                  <td> {i.zipcode} </td>
                  <td> {i.MobileNo} </td>
                  <td> {i.age} </td>
                  <td>
                    <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteData(i._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
