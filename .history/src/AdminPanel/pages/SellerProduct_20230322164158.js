import React from "react";
import HOC from "../layout/HOC";
import {Table } rom "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SellerProduct = () => {
  
 
    return (
      <>
    
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              Seller  Products (Total : 1)
            </span>
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
                  <th>Commission</th>
                  <th>Approve/Disapprove</th>
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
  

export default HOC(SellerProduct)