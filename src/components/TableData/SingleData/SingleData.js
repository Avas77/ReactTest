import React from "react";
import { connect } from "react-redux";

const SingleData = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.dat.name}</td>
      <td>{props.dat.email}</td>
      <td>{props.dat.phone}</td>
      <td>{props.dat.date}</td>
      <td>{props.dat.city}</td>
      <td>{props.dat.district}</td>
      <td>{props.dat.province}</td>
      <td>{props.dat.country}</td>
      <td>
        <button
          className="btn-small"
          style={{ padding: "5px 12px" }}
          onClick={() =>
            props.dispatch({
              type: "EDIT",
              id: props.dat.id,
            })
          }
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn-small"
          onClick={() =>
            props.dispatch({
              type: "DELETE",
              id: props.dat.id,
            })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect()(SingleData);
