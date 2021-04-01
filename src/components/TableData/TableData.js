import React, { useState, useEffect } from "react";
import EditComponent from "../EditComponent/EditComponent";
import { connect } from "react-redux";
import SingleData from "./SingleData/SingleData";
import "./TableData.css";

const TableData = (props) => {
  const [sortType, setSortType] = useState("");
  const data = props.posts;

  const sorted = data.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });

  const handleAsc = () => {
    setSortType("asc");
  };
  const handleDesc = () => {
    setSortType("desc");
  };

  return (
    <div>
      <h1>Data in Tabular Form</h1>
      <table className="data">
        <tr className="table-header">
          <th>
            Name
            <select
              className="sort"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date</th>
          <th>City</th>
          <th>District</th>
          <th>Province</th>
          <th>Country</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {sorted.map((dat) => {
          if (dat.change) {
            return <EditComponent id={dat.id} dat={dat} />;
          } else {
            return <SingleData id={dat.id} dat={dat} />;
          }
        })}
      </table>
      <div className="btns">
        <button className="btn-small" onClick={handleAsc}>
          Ascending order
        </button>
        <button className="btn-small" onClick={handleDesc}>
          Descending order
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(TableData);
