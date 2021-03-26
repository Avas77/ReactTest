import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [data, setData] = useState([]);
  const [act, setAct] = useState(0);
  const [index, setIndex] = useState("");
  const [sortType, setSortType] = useState("");
  let datas = data;

  useEffect(() => {
    console.log(sortType);
    const sortArray = (type) => {
      if (type === "ASC") {
        const sorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
        setData(sorted);
      }
      if (type === "DESC") {
        const sorted = [...data].sort((a, b) => (a.name > b.name ? -1 : 1));
        setData(sorted);
      }
    };
    sortArray(sortType);
  }, [sortType]);

  const changedHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        if (e.target.value === "") {
          setNameError(true);
        } else {
          setNameError(false);
        }
        break;

      case "email":
        setEmail(e.target.value);
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
        setPhone(e.target.value);
        if (phone.length < 7) {
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        break;
      default:
        console.log("nothing");
    }
  };

  const formDataHandler = (e) => {
    e.preventDefault();
    if (act === 0) {
      let dat = {
        name,
        email,
        phone,
        date,
        city,
        district,
        province,
        country,
      };
      datas.push(dat);
    } else {
      let ind = index;
      datas[ind].name = name;
      datas[ind].email = email;
      datas[ind].phone = phone;
      datas[ind].date = date;
      datas[ind].city = city;
      datas[ind].district = district;
      datas[ind].province = province;
      datas[ind].country = country;
      setAct(0);
    }

    setData(datas);
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setCity("");
    setDistrict("");
    setProvince("");
    setCountry("Nepal");
  };

  const deleteHandler = (i) => {
    let copyData = [...data];
    console.log(copyData);
    copyData.splice(i, 1);
    setData(copyData);
  };

  const editHandler = (i) => {
    let copyData = data[i];
    console.log(copyData);
    document.getElementById("name").value = copyData.name;
    document.getElementById("email").value = copyData.email;
    document.getElementById("phone").value = copyData.phone;
    document.getElementById("date").value = copyData.date;
    document.getElementById("city").value = copyData.city;
    document.getElementById("district").value = copyData.district;
    document.getElementById("province").value = copyData.province;
    document.getElementById("country").value = copyData.country;
    setAct(1);
    setIndex(i);
  };

  return (
    <div className="form">
      <h1>Please Provide Your Info</h1>
      <form className="myform" onSubmit={formDataHandler}>
        <div className="field">
          <label htmlFor="Name">Name</label>
          <input
            required
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={changedHandler}
            value={name}
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
            value={email}
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
            value={phone}
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
            value={date}
            className="input"
            onChange={(e) => setDate(e.target.value)}
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
            value={city}
            className="input"
            onChange={(e) => setCity(e.target.value)}
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
            value={district}
            className="input"
            onChange={(e) => setDistrict(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Province">Province</label>
          <select
            id="province"
            onChange={(e) => setProvince(e.target.value)}
            name="province"
            value={province}
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
            value={country}
            className="input"
            onChange={(e) => setCountry(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <table className="data">
        <tr className="table-header">
          <th>SNo.</th>
          <th>
            Name
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="sort"
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
        {data.map((dat, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{dat.name}</td>
            <td>{dat.email}</td>
            <td>{dat.phone}</td>
            <td>{dat.date}</td>
            <td>{dat.city}</td>
            <td>{dat.district}</td>
            <td>{dat.province}</td>
            <td>{dat.country}</td>
            <td>
              <button
                onClick={() => editHandler(i)}
                className="btn-small"
                style={{ padding: "5px 12px" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button onClick={() => deleteHandler(i)} className="btn-small">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Form;
