/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";
import { FaTrash } from "react-icons/fa";

const FeedBack = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/feedback/`
      );
      setData(data.result);
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
        `https://arunchauhan-backend.vercel.app/api/feedback/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}>
        {" "}
        All Feedbacks (Total : {data?.length}){" "}
      </p>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <th>Sno.</th>
          <th>Rating</th>
          <th>Description</th>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td>
                {i.reting === 0 ? (
                  <>
                    <i
                      class="fa-regular fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}
                {i.reting === 0.5 ? (
                  <>
                    <i
                      class="fa-solid fa-star-half"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}
                {i.reting === 1 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 1.5 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 2 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>{" "}
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 2.5 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 3 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>{" "}
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 3.5 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 4 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>{" "}
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}

                {i.reting === 4.5 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}
                {i.reting === 5 ? (
                  <>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>{" "}
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ffd43b" }}
                    ></i>
                  </>
                ) : (
                  ""
                )}
              </td>
              <td>
                <p style={{ maxWidth: "400px" }}>{i.comment}</p>
              </td>
              <td>
                <i
                  class="fa-solid fa-trash"
                  style={{ color: " #ff0000", cursor: "pointer" }}
                  onClick={() => deleteHandler(i._id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(FeedBack);
