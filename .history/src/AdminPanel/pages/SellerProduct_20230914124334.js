/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Button, Alert } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SellerProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ total , setTotal ] = useState(0)

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/product/seller/${id}`
      );
      setData(data.data);
      setTotal(data.data.length)
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const statusHandler = async (id) => {
    try {
      const { data } = await axios.post(
        `https://arunchauhan-backend.vercel.app/api/product/status/${id}`
      );
      console.log(data);
      alert("Status Changed");
      fetchHandler();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://arunchauhan-backend.vercel.app/api/product/${id}`
      );
      console.log(data);
      toast.success("Product Deleted");
      fetchHandler();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Seller Products (Total : {total})
          </span>
        </div>

        {!data || data?.length === 0 ? (
          <Alert>No Product Found </Alert>
        ) : (
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
                  <th>Commission</th>
                  <th>Approve/Disapprove</th>
                  <th>Action</th>
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
                    <td></td>
                    <td>
                      <Button
                        variant="outline-success"
                        onClick={() => {
                          statusHandler(i._id);
                        }}
                      >
                        {i.status === "true" ? "DisApprove" : "Approve"}
                      </Button>
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
        )}
      </section>
    </>
  );
};

export default HOC(SellerProduct);
