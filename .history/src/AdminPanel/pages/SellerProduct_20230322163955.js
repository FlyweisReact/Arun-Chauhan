import React, { useState, useEffect } from "react";
import axios from "axios";
import HOC from "../layout/HOC";
import { Form, Table ,Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-toastify";


const SellerProduct = () => {
  
 
    return (
      <>
    
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Products (Total : 1)
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
                  <th>Seller</th>
                  <th>Commission</th>
                  <th>Approve/Disapprove</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1} </td>
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
                        {i.productImg?.map((img) => (
                          <img
                            src={img.url}
                            key={img._id}
                            alt={i.productName}
                            className="carouselImages"
                          />
                        ))}
                      </Carousel>
                    </td>
                    <td>{i.productName}</td>
                    <td>{i.descrption}</td>
                    <td>₹{i.price}</td>
                    <td>100</td>
                    <td>
                      <ul>
                        {i.features?.map((i, index) => (
                          <li key={index}> {i} </li>
                        ))}
                      </ul>
                    </td>
                    <td>{i.category_id?.category}</td>
                    <td>{i.subCategory?.title}</td>
                    <td>Nishant </td>
                    <td>Flat 50% </td>
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
                        <i
                          className="fa-solid fa-eye"
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={() => setView(true)}
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
  

export default HOC(SellerProduct)