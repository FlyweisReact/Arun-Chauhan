/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Discount = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const vendorId = localStorage.getItem("VendorId");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/getallTypeOfpackagegesByVendor"
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/DeleteByAdmin/${id}`
      );
      console.log(data);
      toast.success("Package Deleted");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [Type, setType] = useState("");
    const [Activity, setActivity] = useState("");
    const [touristDestination, setDestination] = useState("");
    const [location, setLocation] = useState("");
    const [ image , setImage ] = useState("")
    const [ imageUrl , setImageUrl ] = useState("")

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
          setImageUrl(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/packagesByVendor",
          {
            images : imageUrl ,
            start_date,
            end_date,
            price,
            discount,
            Type,
            Activity,
            touristDestination,
            location,
            vendorId: vendorId,
          }
        );
        console.log(data);
        props.onHide();
        toast.success("Package Added");
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };

    const putData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/UpdatePackagesByVendor/${id}`,
          {
            Activity,
          }
        );
        console.log(data);
        props.onHide();
        toast.success("Package Updated");
        fetchData();
      } catch (err) {
        console.log(err);
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
            Add Package
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putData : postData}>
            {edit ? (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Activity</Form.Label>
                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    onChange={(e) => setActivity(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    onClick={() => postthumbImage()}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Activity</Form.Label>
                  <FloatingLabel controlId="floatingTextarea" className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      onChange={(e) => setActivity(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Tourist Destination</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group>
              </>
            )}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Packages
          </span>
          <Button variant="outline-success"   onClick={() => {
                        setEdit(false)
                        setModalShow(true)
                      }}>
            Add Packages
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Image </th>
                <th> Location </th>
                <th> Tourist Destination </th>
                <th>Price</th>
                <th>Discount</th>
                <th>Discounted Price</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Activity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> 
                    <img src={i.images} alt='' style={{width : '100px'}} />
                  </td>
                  <td> {i.location} </td>
                  <td> {i.touristDestination} </td>
                  <td> {i.price} </td>
                  <td> {i.discount}% </td>
                  <td> {i.DiscountedPrice} </td>
                  <td> {i.Type} </td>
                  <td> {i.start_date?.slice(0, 10)} </td>
                  <td> {i.end_date?.slice(0, 10)} </td>
                  <td>
                    <ul>
                      {i.Activity?.map((i, index) => (
                        <span key={index}> {i} , </span>
                      ))}
                    </ul>
                  </td>
                  <td>
                  <div style={{display : 'flex' , gap : '10px'}}>
                  <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteData(i._id)}
                    ></i>
                    
                    <i class="fa-solid fa-pen-to-square"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        setEdit(true)
                        setId(i._id)
                        setModalShow(true)
                      }}
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

export default HOC(Discount);
