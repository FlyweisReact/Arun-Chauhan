/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Banner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/banner/"
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

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");

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

    const token = localStorage.getItem("token");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/banner/",
          { image: url, title },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        toast.success("Added");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
        toast.error("Please try again after some time:::");
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
            Add Banners
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                onClick={() => postthumbImage()}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Category</option>
                <option> Accessories </option>
                <option> Mechanical Services </option>
                <option> Service and Detailing </option>
                <option> Value Add Services</option>
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
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:1112/api/banner/${id}`
      );
      toast.success(`${data.data.title} Deleted`);
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
            All Banners ( Total : {dataCount})
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Banners
          </Button>
        </div>

        <div className="three-Sec">
          {data?.map((i, index) => (
            <div key={index}>
              <img src={i.image} alt={i.title} />
              <p> Title : {i.title}</p>
              <p> Category : Accessories </p>
              <button onClick={() => deleteHandler(i._id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HOC(Banner);
