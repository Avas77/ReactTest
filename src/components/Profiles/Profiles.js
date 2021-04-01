import React from "react";
import { connect } from "react-redux";
import "./Profiles.css";
import EditComponent from "../EditComponent/EditComponent";

const Profiles = (props) => {
  return (
    <div>
      <h1 className="header">Profiles List</h1>
      <div className="profile-boxes">
        {props.posts.map((post) => {
          if (post.change) {
            return <EditComponent id={post.id} dat={post} />;
          } else {
            return (
              <div className="profiles-list">
                <ul>
                  <li>Name: {post.name}</li>
                  <li>Email: {post.email}</li>
                  <li>Phone Number: {post.phone}</li>
                  <li>Date: {post.date}</li>
                  <li>City: {post.city}</li>
                  <li>District: {post.district}</li>
                  <li>Province: {post.province}</li>
                  <li>Country: {post.country}</li>
                </ul>
                <button
                  className="btn-small"
                  style={{ padding: "5px 12px" }}
                  onClick={() =>
                    props.dispatch({
                      type: "EDIT",
                      id: post.id,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  className="btn-small"
                  onClick={() =>
                    props.dispatch({
                      type: "DELETE",
                      id: post.id,
                    })
                  }
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(Profiles);
