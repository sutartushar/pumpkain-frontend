import "./Login.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function userSignInData() {
    try {
      let response = await axios.post(`http://localhost:3000/api/auth/signup`, {
        name: userData.name,
        email: userData.email,
        mobile: userData.mobile,
      });
        setUserData(response.data)
      console.log(response.data);

      // Clear form after successful sign-up
      setUserData({
        name: "",
        email: "",
        mobile: "",
      });

     navigate("/home");
    } catch (error) {
      console.log(`error:${error}`);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    userSignInData();
  }

  return (
    <div className="sub_container">
      <div className="heading_container">
        <img src="/chartImg.png" alt="" />
      </div>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="form_container">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="input_field"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />

          {/* email */}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="input_field"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />

          {/* mobile */}
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className="input_field"
            name="mobile"
            value={userData.mobile}
            onChange={handleInputChange}
          />

          <button className="btn" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;