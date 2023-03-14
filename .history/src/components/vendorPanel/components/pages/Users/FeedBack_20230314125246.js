
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const FeedBack = () => {
  return (
    <>
      <p style={{ color: "black", fontSize: "18px" }}> All Feedbacks </p>

      <Table striped bordered hover style={{marginTop : '2%'}}>
        <thead>
          <th>Rating</th>
          <th>Description</th>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </>
  );
};

export default HOC(FeedBack);
