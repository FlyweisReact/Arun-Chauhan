import HOC from "../../layout/HOC";

const Order = () => {
  return (
    <>
   
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Blogs
          </span>
        </div>

        
        <div className="three-Sec">
        <div>
        <img src='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200' alt='' />
        <p>Cars</p>
        <button>Delete</button>
        </div>
        
          <img src='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200' alt='' />
          <img src='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200' alt='' />
        </div>

         </section>
    </>
  );
};

export default HOC(Order);
