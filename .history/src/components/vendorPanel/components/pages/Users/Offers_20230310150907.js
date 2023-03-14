/** @format */

import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";

const Offers = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/offers/getalloffersByAdmin"
      );
      setData(data);
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
        `https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/offers/deleteOffersByAdmin/${id}`
      );
      console.log(data);
      fetchData();
      alert("Offer Deleted");

    } catch (e) {
      console.log(e);
    }
  };

  function PostOffer(props) {
    const [image, setImage] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    const [desc, setDesc] = useState("");

    const uploadImage = (e) => {
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
          setImageUrl(data.url);
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
          "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/offers/offerstouserByAdmin",
          {
            image: ImageUrl,
            desc,
          }
        );
        console.log(data);
        props.onHide();
        fetchData();
        alert("Offer Created");

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
            Add Offer
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onClick={() => uploadImage()}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <PostOffer show={modalShow} onHide={() => setModalShow(false)} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: " 18px" }}>All Offers</p>
        <Button onClick={ () => setModalShow(true)}>Add Offer</Button>
      </div>

      <div className="BannerImg">
        {data?.data?.map((i, index) => (
          <div key={index} style={{ marginTop: "40px" }}>
            <img src={i.image} alt="" />
            <p style={{ color: "black" }}>{i.desc}</p>
            <Button
              variant="outline-danger"
              style={{ width: "100%" }}
              onClick={() => deleteHandler(i._id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(Offers);
