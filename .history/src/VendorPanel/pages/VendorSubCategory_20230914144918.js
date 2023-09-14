/** @format */

import HOC from "../layout/HOC";
import { Table, Modal, Button, Form, Alert } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const VendorSubCategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const sellorId = localStorage.getItem("vendorId");
  const [categoryData, setCatData] = useState([]);

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/subCategory/seller/${sellorId}`
      );
      // setData(data.result);
    } catch (e) {
      console.log(e);
    }
  }, [sellorId]);

  const fetchCategoryHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/category/seller/${sellorId}`
      );
      setCatData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, [sellorId]);

  useEffect(() => {
    fetchHandler();
    if (modalShow === true) {
      fetchCategoryHandler();
    }
  }, [fetchHandler, modalShow, fetchCategoryHandler]);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [catgoryId, setCategoryId] = useState("");

    const UploadImage = (e) => {
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
          "https://arunchauhan-backend.vercel.app/api/subcategory/",
          {
            image: url,
            title,
            catgoryId,
            sellerId: sellorId,
          }
        );
        toast.success(`${data.message.title} Added`);
        fetchHandler();
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
            Add Sub-Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onClick={() => UploadImage()}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                required
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option>Select Category</option>
                {categoryData?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.category}{" "}
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
        `https://arunchauhan-backend.vercel.app/api/subcategory/${id}`
      );
      toast.success(data.message);
      fetchHandler();
    } catch (e) {
      console.log(e);
      toast.error("Try again after some time::");
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
            All Sub-Categories (Total : {data?.length})
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Sub-Categories
          </Button>
        </div>

        {data.length === 0 ? (
          <Alert variant="info">No Sub-Categories Listed Yet </Alert>
        ) : (
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th> Image</th>
                  <th> Title</th>
                  <th> Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td>
                      <img src={i.image} alt="" style={{ width: "100px" }} />
                    </td>
                    <td>{i.title} </td>
                    <td> {i.catgory?.category} </td>
                    <td>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#ff0000", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </section>
    </>
  );
};

export default HOC(VendorSubCategory);
