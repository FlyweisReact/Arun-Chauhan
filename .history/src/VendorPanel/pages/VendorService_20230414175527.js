/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Table, Modal, Button, Form, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const VendorService = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [catData, setCatData] = useState([]);

  const sellorId = localStorage.getItem("vendorId");

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/service/seller/${sellorId}`
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, [sellorId]);

  const fetchSub = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/subcategory/"
      );
      setSubCat(data.result);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCat = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category"
      );
      setCatData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHandler();
    if (modalShow === true) {
      fetchSub();
      fetchCat();
    }
  }, [fetchHandler, modalShow]);

  function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [desc, setDesc] = useState("");
    const [include, setInclude] = useState("");
    const [category, setCategory] = useState("");
    const [freeService, setFreeService] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const disBig = type + discount;

    const postthumbImage = (e) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/service",
          {
            serviceName: title,
            serviceImg: url,
            title,
            price,
            discount: disBig,
            desc,
            include,
            category,
            freeService,
            subCategory,
            sellerId: sellorId,
          }
        );
        toast.error(`${data.data.title} Added`);
        fetchHandler();
        props.onHide();
      } catch (e) {
        console.log(e);
        toast.error("Please try again after some time :::");
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
            Add Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                onClick={() => postthumbImage()}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Discount In</option>
                <option value="Flat% "> Flat% </option>
                <option value="Rupees"> Rupees </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Include Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInclude(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Free Service</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFreeService(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                {catData?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.category}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option>Select Sub-Category</option>
                {subCat?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.title}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/service/${id}`
      );
      toast.success(data.message);
      fetchHandler();
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
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
            All Services ( Total : {data?.length})
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Service
          </Button>
        </div>

        {data === null ? <Alert variant="info" >No Service Listed Yet </Alert>  : 
        
        }

      </section>
    </>
  );
};

export default HOC(VendorService);
