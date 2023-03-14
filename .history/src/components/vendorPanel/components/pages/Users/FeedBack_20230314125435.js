/** @format */

import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const FeedBack = () => {
  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}> All Feedbacks </p>

      <Table striped bordered hover style={{ marginTop: "2%" , textAlign  : 'center'}}>
        <thead>
          <th>Rating</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>
              <p style={{ maxWidth: "400px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HOC(FeedBack);
