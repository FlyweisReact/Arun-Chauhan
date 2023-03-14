/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Category = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/imagesRouter/getbanner"
      );
      setData(data.Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/imagesRouter/Deletebanner/${id}`)
      console.log(data)
      toast.success('Banner Deleted')
      fetchData()
    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banners
          </span>
          <Button variant="outline-success">Add Banner</Button>
        </div>

        <div className="BannerImg">
        {data?.map((i , index ) => (
          <div key={index}>
            <img src={i.image}  alt='' />
            <Button variant='outline-danger' style={{width: '100%', marginTop : '10px'}} onClick={() => deleteHandler(i._id)}>Delete</Button>
          </div>
        ) )}

        </div>
      </section>
    </>
  );
};

export default HOC(Category);
