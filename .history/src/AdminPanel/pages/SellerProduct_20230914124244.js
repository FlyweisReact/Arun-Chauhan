/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Button  , Alert} from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SellerProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://arunchauhan-backend.vercel.app/api/product/seller/${id}`
      );
      setData(data.data);
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
            Seller Products (Total : {data?.length})
          </span>
        </div>

        {!data || data?.length === 0 ? <Alert>No Product Found </Alert> : }

    
      </section>
    </>
  );
};

export default HOC(SellerProduct);
