import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "./Axios";
function BootstrapForm() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fetching, setFetching] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phoneNumber: "",
    age: "",
    gender:"",
    password: "",
    confirmPassword: "",
  });

  const gender = ['male', 'female','other'];

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }

    if (!formData.username) {
      tempErrors["username"] = "Username is required";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      tempErrors["phoneNumber"] = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors["phoneNumber"] = "Phone number is invalid";
      isValid = false;
    }

    if (!formData.age) {
      tempErrors["age"] = "Age is required";
      isValid = false;
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      tempErrors["age"] = "Age must be a number between 18 and 100";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors["password"] = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      tempErrors["confirmPassword"] = "Confirm password is required";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors["confirmPassword"] = "Passwords do not match";
      isValid = false;
    }
    if (!formData.gender) {
        tempErrors["gender"] = "gender is required";
        isValid = false;
        }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform submission tasks like sending data to the server
      formData.age = parseInt(formData.age);
      formData.phoneNumber = parseInt(formData.phoneNumber);
      console.log("Form submitted successfully:", formData);
      try {
        setFetching(true);
        const usersRes = await axiosInstance.post("/users/register",formData);
        //const usersRes = await axios.put("http://localhost:5001/api/users/6690b139ac460960afbb0034",user);
        setSuccess(true);
        console.log('success');
      } catch (err) {
        setError(true);
        console.log(err.response.data);
      }
    }
    setFetching(false);
  };

  return (
    <>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-6">
      <h2 className="text-center my-2">Registration</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.email}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && (
                  <small id="usernameHelp" className="form-text text-danger">
                    {errors.username}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">phoneNumber</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                {errors.phoneNumber && (
                  <small
                    id="uphoneNumberHelp"
                    className="form-text text-danger"
                  >
                    {errors.phoneNumber}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="age">age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  placeholder="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                {errors.age && (
                  <small id="ageHelp" className="form-text text-danger">
                    {errors.age}
                  </small>
                )}
              </div>
              <div className="form-group my-2">
                <select className="form-select" name="gender" onChange={handleChange} value={formData.gender} aria-label="Default select example">
                  <option defaultValue={'select'}>Open this select menu</option>
                  {
                    gender.map((rec)=>(<option key={rec} value={rec}>{rec}</option>))
                  }
                </select>
                {errors.gender && (
                  <small
                    id="genderHelp"
                    className="form-text text-danger"
                  >
                    {errors.gender}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                </span>
                {errors.password && (
                  <small id="passwordHelp" className="form-text text-danger">
                    {errors.password}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">confirmPassword</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span   
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.confirmPassword && (
                  <small
                    id="confirmPasswordHelp"
                    className="form-text text-danger"
                  >
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BootstrapForm;
