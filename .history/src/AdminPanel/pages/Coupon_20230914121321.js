/** @format */
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Coupon = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://arunchauhan-backend.vercel.app/api/coupon/"
      );
      setData(data);
      setDataCount(data.length);
    } catch (e) {
      console.log(e);
      toast.error("Try again after some time::");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [code, setC] = useState("");
    const [expirationDate, setEd] = useState("");
    const [activationDate, setAd] = useState("");
    const [discount, setD] = useState("");
    const [minOrder, setM] = useState("");
    const token = localStorage.getItem("token");
    const [productData, setProductData] = useState([]);
    const [sellerData, setSllerData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [productid, setProductId] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [sellerId, setSellerId] = useState("");

    const fetchP = async () => {
      try {
        const { data } = await axios.get(
          "https://arunchauhan-backend.vercel.app/api/product"
        );
        setProductData(data?.data);
      } catch (e) {
        console.log(e);
      }
    };
    const fetchS = async () => {
      try {
        const { data } = await axios.get(
          "https://arunchauhan-backend.vercel.app/api/category"
        );
        setCategoryData(data?.data);
      } catch (e) {
        console.log(e);
      }
    };
    const fetchC = useCallback(async () => {
      try {
        const { data } = await axios.get(
          "https://arunchauhan-backend.vercel.app/api/seller",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSllerData(data?.data);
      } catch (e) {
        console.log(e);
      }
    }, [token]);

    useEffect(() => {
      if (props.show === true) {
        fetchP();
        fetchC();
        fetchS();
      }
    }, [props.show, fetchC]);

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        if (expirationDate > activationDate) {
          const { data } = await axios.post(
            "https://arunchauhan-backend.vercel.app/api/coupon",
            {
              code,
              expirationDate,
              activationDate,
              discount,
              minOrder,
              productid,
              sellerId,
              category_id,
            }
          );
          toast.success(`${data.code} Added`);
          props.onHide();
          fetchData();
        } else {
          toast.error("Please Check Filled Detials");
        }
      } catch (e) {
        console.log(e);
        toast.error("try again after some time::");
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Coupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setC(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Minimum Order</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setM(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setD(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Activation Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setAd(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setEd(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>For Products</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setProductId(e.target.value)}
              >
                <option>Open this select menu</option>
                {productData?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {" "}
                    {i.productName}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>For Seller</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSellerId(e.target.value)}
              >
                <option>Open this select menu</option>
                {sellerData?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {" "}
                    {i.name}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>For Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory_id(e.target.value)}
              >
                <option>Open this select menu</option>
                {categoryData?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {" "}
                    {i.category}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://arunchauhan-backend.vercel.app/api/coupon/${id}`
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      toast.error(e?.response?.data);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons (Total : {dataCount})
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Coupon
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Code</th>
                <th>Min. amount</th>
                <th>Discount</th>
                <th>Activation Date</th>
                <th>Expiration Date</th>
                <th>On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.code} </td>
                  <td> {i.minOrder} </td>
                  <td> {i.discount}% </td>
                  <td> {i.activationDate?.slice(0, 10)} </td>
                  <td> {i.expirationDate?.slice(1, 10)} </td>
                  <td>All</td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteHandler(i._id)}
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

export default HOC(Coupon);
