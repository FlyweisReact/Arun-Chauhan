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

  // View Modal
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            View User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="bigCont">
              <p className="contP">Name : Manish Sharma</p>
              <p className="contP">Mobile Number : 6541236547</p>
            </div>
            <div className="bigCont">
              <p className="contP">Email : Email Address</p>
              <p className="contP">Location : Location</p>
            </div>
            <div className="bigCont">
              <p className="contP">Vehicle : Vehicle</p>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const filterData = !query
    ? data
    : data?.filter((i) =>
        i?.status(query)
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
                        className="fa-solid fa-trash fa-beat-fade  fa-lg"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                      <i
                        class="fa-sharp fa-solid fa-eye fa-beat-fade fa-lg"
                        style={{ color: "#4581e8", cursor: "pointer" }}
                        onClick={() => setModalShow(true)}
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
