/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Alert, Form, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { toast } from "react-toastify";

const VendorProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [categoryData, setCatedogryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const sellorId = localStorage.getItem("vendorId");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/product/seller/${sellorId}`
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, [sellorId]);

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
  }, [fetchData, modalShow]);

  function MyVerticallyCenteredModal(props) {
    const [Image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [features, setFeatures] = useState("");
    const [amount, setAmoutn] = useState("");
    const [category, setCategory] = useState("");
    const [subCat, setSubCat] = useState("");
    const [stock, setStock] = useState("");

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [sizeImage, setSizeImage] = useState("");
    const [colorImage, setColorImage] = useState("");

    const uploadColorImage = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setColorImage(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const uploadSizeImage = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setSizeImage(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
      fd.append("sellerId", sellorId);
      fd.append("stock", stock);

      fd.append("color", color);
      fd.append("size", size);
      fd.append("sizeImage", sizeImage);
      fd.append("colorImage", colorImage);

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
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex mb-3 gap-2">
              <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => uploadColorImage(e)}
                />
              </Form.Group>
            </div>
            <div className="d-flex mb-3 gap-2">
              <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setSize(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => uploadSizeImage(e)}
                />
              </Form.Group>
            </div>
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products (Total : {data?.length} )
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Product
          </Button>
        </div>
        {data === null ? (
          <Alert variant="info">No Product Listed Yet</Alert>
        ) : (
         ""
        )}

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
                <th>Color and Image</th>
                <th>Size and Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
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
                      {i.productImg?.map((img, index) => (
                        <img
                          src={img.url}
                          alt=""
                          key={index}
                          className="carouselImages"
                        />
                      ))}
                    </Carousel>
                  </td>

                  <td> {i.productName} </td>
                  <td> {i.descrption} </td>
                  <td>₹{i.price} </td>
                  <td> {i.stock} </td>
                  <td>
                    {i.features?.map((item, index) => (
                      <span key={index}> {item}, </span>
                    ))}
                  </td>
                  <td>{i.category_id?.category}</td>
                  <td> {i.subCategory?.title} </td>
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
                      {i.colors?.map((img, index) => (
                        <div key={index}>
                          <img
                            src={img.colorImage}
                            alt="img"
                            className="ColorImage"
                          />
                          <p> {img.color} </p>
                        </div>
                      ))}
                    </Carousel>
                  </td>
                  <td>
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      showIndicators={false}
                      dynamicHeight={false}
                      stopOnHover={true}
                      swipeable={true}
                      emulateTouch={true}
                      interval={2000}
                      infiniteLoop={true}
                      autoPlay={true}
                      className="Car"
                    >
                      {i.size_of_product?.map((img, index) => (
                        <div key={index}>
                          <img
                            src={img.sizeImage}
                            alt="img"
                            className="ColorImage"
                          />
                          <p> {img.size} </p>
                        </div>
                      ))}
                    </Carousel>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
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

export default HOC(VendorProducts);
