import React, { useState } from 'react';
import {FaEye,FaEyeSlash} from 'react-icons/fa';
const HtmlValidation = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        phoneNumber: '',
        age: '',
        password: '',
        confirmPassword: ''
      });
    
      const [errors, setErrors] = useState({});
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const validate = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (!formData.email) {
          tempErrors['email'] = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors['email'] = 'Email is invalid';
          isValid = false;
        }
    
        if (!formData.username) {
          tempErrors['username'] = 'Username is required';
          isValid = false;
        }
    
        if (!formData.phoneNumber) {
          tempErrors['phoneNumber'] = 'Phone number is required';
          isValid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
          tempErrors['phoneNumber'] = 'Phone number is invalid';
          isValid = false;
        }
    
        if (!formData.age) {
          tempErrors['age'] = 'Age is required';
          isValid = false;
        } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
          tempErrors['age'] = 'Age must be a number between 18 and 100';
          isValid = false;
        }
    
        if (!formData.password) {
          tempErrors['password'] = 'Password is required';
          isValid = false;
        } else if (formData.password.length < 6) {
          tempErrors['password'] = 'Password must be at least 6 characters';
          isValid = false;
        }
    
        if (!formData.confirmPassword) {
          tempErrors['confirmPassword'] = 'Confirm password is required';
          isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
          tempErrors['confirmPassword'] = 'Passwords do not match';
          isValid = false;
        }
    
        setErrors(tempErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          // Perform submission tasks like sending data to the server
          console.log('Form submitted successfully:', formData);
        }
      };
    
      return (
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {errors.age && <span>{errors.age}</span>}
          </div>
          <div>
            <label>Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Register</button>
        </form>
      );
};

export default HtmlValidation;
