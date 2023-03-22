/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import HOC from "../layout/HOC";
import { Form, Table, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-toastify";

const VendorProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const [categoryData, setCatedogryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [view, setView] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product"
      );
      setData(data.data);
      setDataCount(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/category"
      );
      setCatedogryData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchSubCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/subcategory/"
      );
      setSubCategoryData(data.result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    if (modalShow === true) {
      fetchCategory();
      fetchSubCategory();
    }
  }, [modalShow]);

  function MyVerticallyCenteredModal(props) {
    const [Image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [features, setFeatures] = useState("");
    const [amount, setAmoutn] = useState("");
    const [category, setCategory] = useState("");
    const [subCat, setSubCat] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      let fd = new FormData();
      Array.from(Image).forEach((img) => {
        fd.append("myField", img);
      });
      fd.append("productName", title);
      fd.append("descrption", desc);
      fd.append("features", features);
      fd.append("price", amount);
      fd.append("category_id", category);
      fd.append("subCategory", subCat);

      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product",
          fd
        );
        console.log(data);
        toast.success("Product Added");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
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
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files)}
                multiple
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Features</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFeatures(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setAmoutn(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Commission</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Commission in</option>
                <option>Falt %</option>
                <option>Rupees ₹</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                {categoryData?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {i.category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSubCat(e.target.value)}
              >
                <option>Select Sub-Category</option>
                {subCategoryData?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {i.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product/${id}`
      );
      console.log(data);
      toast.success("Product Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const statusHandler = async (id) => {
    try {
      const { data } = await axios.post(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product/status/${id}`
      );
      console.log(data);
      alert("Status Changed");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  // View Modal


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products (Total : {dataCount})
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Product
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Sno. </th>
                <th> Image </th>
                <th> Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Stock</th>
                <th>Features</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    dynamicHeight={false}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    interval={1000}
                    infiniteLoop={true}
                    autoPlay={true}
                    className="Car"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt="Headphone"
                      className="carouselImages"
                    />
                    <img
                      src="https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940"
                      alt="Headphone"
                      className="carouselImages"
                    />
                    <img
                      src="http://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_5.png?v=1655534211"
                      alt="Headphone"
                      className="carouselImages"
                    />
                  </Carousel>
                </td>

                <td>Demo</td>
                <td>Lorem Ipsum Dolor</td>
                <td>₹5,000</td>
                <td>100</td>
                <td>
                  <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                  </ul>
                </td>
                <td>Accessories</td>
                <td>Lorem Ipsum</td>
                <td>
                  <div className="d-flex gap-2">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                    ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(VendorProducts);
