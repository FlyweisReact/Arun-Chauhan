/** @format */

import HOC from "../layout/HOC";
import { Table, Modal, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/user"
      );
      setData(data.data);
      setDataCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/user/delete/${id}`
      );
      console.log(data);
      toast.success("User Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };


  const filterData = !query
    ? data
    : data?.filter((i) =>
        i?.status === query
      );

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users ( Total : {dataCount})
          </span>
        </div>

        <div className="active">
          <button onClick={() => setQuery("")}>All</button>
          <button onClick={() => setQuery("Active")}>Active</button>
          <button onClick={() => setQuery("InActive")}>InActive</button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th> Mobile Number</th>
                <th> User Name</th>
                <th> Email</th>
                <th> Location </th>
                <th> Vehicle </th>
                <th>Transactions</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>{i.phone_number}</td>
                  <td>{i.name}</td>
                  <td> {i.email} </td>
                  <td> {i.location} </td>
                  <td> {i.vechicle} </td>
                  <td>
                    <button
                      className="viewBtn"
                      onClick={() => navigate(`/transactions/${i._id}`)}
                    >
                      View
                    </button>
                  </td>
                  <td>{i.status}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
      
                    </div>
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
