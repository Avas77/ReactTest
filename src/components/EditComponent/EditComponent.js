import React, { useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import "./EditComponent.css";

const EditComponent = (props) => {
  const [newname, setNewName] = useState(props.dat.name);
  const [newemail, setNewEmail] = useState(props.dat.email);
  const [newphone, setNewPhone] = useState(props.dat.phone);
  const [newdate, setNewDate] = useState(props.dat.date);
  const [newcity, setNewCity] = useState(props.dat.city);
  const [newdistrict, setNewDistrict] = useState(props.dat.district);
  const [newprovince, setNewProvince] = useState(props.dat.province);
  const [newcountry, setNewCountry] = useState(props.dat.country);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const changedHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNewName(e.target.value);
        if (e.target.value === "") {
          setNameError(true);
        } else {
          setNameError(false);
        }
        break;

      case "email":
        setNewEmail(e.target.value);
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            e.target.value
          )
        ) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        break;

      case "phone":
        setNewPhone(e.target.value);
        if (newphone.length < 7) {
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        break;
      default:
        console.log("nothing");
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    const data = {
      id: props.id,
      newname,
      newemail,
      newphone,
      newdate,
      newcity,
      newdistrict,
      newprovince,
      newcountry,
      change: false,
    };
    props.dispatch({
      type: "UPDATE",
      data,
      id: props.id,
    });
    setNewName("");
    setNewEmail("");
    setNewPhone("");
    setNewDate("");
    setNewCity("");
    setNewDistrict("");
    setNewProvince("");
    setNewCountry("Nepal");
  };

  return (
    <div>
      <Modal open="true">
        <form className="myform edit-form" onSubmit={editHandler}>
          <h1 className="edit-title">Please update your details</h1>
          <div className="field">
            <label htmlFor="Name">Name</label>
            <input
              required
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={changedHandler}
              defaultValue={props.dat.name}
              className={`input ${
                nameError == null ? "" : nameError ? "wrong" : "right"
              }`}
            />
            <i
              className={`fas fa-check ${
                nameError == null ? "noshow" : nameError ? "noshow" : "show"
              }`}
            ></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="Email">Email</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={changedHandler}
              defaultValue={props.dat.email}
              className={`input ${
                emailError == null ? "" : emailError ? "wrong" : "right"
              }`}
            />
            <i
              className={`fas fa-check ${
                emailError == null ? "noshow" : emailError ? "noshow" : "show"
              }`}
            ></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="Phone">Phone Number</label>
            <input
              required
              id="phone"
              type="number"
              placeholder="Your Phone Number"
              name="phone"
              onChange={changedHandler}
              defaultValue={props.dat.phone}
              className={`input ${
                phoneError == null ? "" : phoneError ? "wrong" : "right"
              }`}
            />
            <i
              className={`fas fa-check ${
                phoneError == null ? "noshow" : phoneError ? "noshow" : "show"
              }`}
            ></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="Date">Date of Birth</label>
            <input
              required
              id="date"
              type="date"
              placeholder="Your date of birth"
              name="date"
              defaultValue={props.dat.date}
              className="input"
              onChange={(e) => setNewDate(e.target.value)}
            />
            <i className="fas fa-check noshow"></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="City">City</label>
            <input
              required
              id="city"
              type="text"
              placeholder="Your City"
              name="city"
              defaultValue={props.dat.city}
              className="input"
              onChange={(e) => setNewCity(e.target.value)}
            />
            <i className="fas fa-check noshow"></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="District">District</label>
            <input
              required
              id="district"
              type="text"
              placeholder="Your District"
              name="district"
              defaultValue={props.dat.district}
              className="input"
              onChange={(e) => setNewDistrict(e.target.value)}
            />
            <i className="fas fa-check noshow"></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="Province">Province</label>
            <select
              id="province"
              onChange={(e) => setNewProvince(e.target.value)}
              name="province"
              defaultValue={props.dat.province}
              className="input"
              name="province"
              required
            >
              <option value="">Choose a province</option>
              <option value="Province No. 1">Province No. 1</option>
              <option value="Province No. 2">Province No. 2</option>
              <option value="Bagmati Province">Bagmati Province</option>
              <option value="Gandaki Province">Gandaki Province</option>
              <option value="Lumbini Province">Lumbini Province</option>
              <option value="Karnali Province"> Karnali Province</option>
              <option value="Sudurpashchim Province">
                Sudurpashchim Province
              </option>
            </select>
            <i className="fas fa-check noshow"></i>
          </div>
          <br />

          <div className="field">
            <label htmlFor="Country">Country</label>
            <input
              required
              id="country"
              type="text"
              placeholder="Your Country"
              name="country"
              defaultValue={props.dat.country}
              className="input"
              onChange={(e) => setNewCountry(e.target.value)}
            />
            <i className="fas fa-check noshow"></i>
          </div>
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default connect()(EditComponent);
