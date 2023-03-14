/** @format */

import React, { useEffect, useState } from "react";
import { Table , Modal , Form , Button} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Users = () => {
  return (
    <>


      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Reviews
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Pass</th>
               
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};


export default HOC(Users);
