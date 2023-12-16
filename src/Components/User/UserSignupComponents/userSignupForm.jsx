import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axiosInstance from "../../../BaseUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signupForm.css";
const UserSignupForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "a",
    lastName: "b",
    email: "d@gmail.com",
    password: "123123123",
    gender: "male",
    phoneNumber: "123412341234",
    street: "stre",
    city: "c",
    state: "st",
    pincode: "12343",
    img: null,
  });

  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFilechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.files[0] });
  };
  useEffect(() => {
    // console.log("current user data", userData);
  }, [userData]);
  // form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password ||
      !userData.gender ||
      !userData.phoneNumber ||
      !userData.street ||
      !userData.city ||
      !userData.state ||
      !userData.pincode
    ) {
      console.log("Please fill all the fields");
      return;
    } else {
      if (!agreedToTerms) {
        console.log("Not checked");
        return;
      }
      sendDataToServer(userData);
    }
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  const sendDataToServer = async (data) => {
    console.log("my data", data);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        data,
        config
      );
      console.log("response", response);
      if (response.status === 201) {
        console.log("user created successfully");
        alert("Registration successful.");
        setTimeout(() => {
          navigate("/user/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      alert(error.response.data.message);
    }
  };
  return (
    <Form
      id="user-signup-form-input"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
            value={userData.firstName}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your first name!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="text"
            value={userData.lastName}
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter your lastname.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            required
            as="select"
            type="select"
            name="gender"
            onChange={handleChange}
            value={userData.gender}
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select your gender.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={handleChange}
            name="phoneNumber"
            value={userData.phoneNumber}
            type="number"
            placeholder="Your age"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter your age
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="password"
            minLength={8}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter atleast 8 characters.
          </Form.Control.Feedback>
          <Form.Control.Feedback>
            Your password is strong.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            name="street"
            onChange={handleChange}
            value={userData.street}
            type="text"
            placeholder="Street"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a your street.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="city"
            onChange={handleChange}
            value={userData.city}
            type="text"
            placeholder="City"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your city name.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            name="state"
            onChange={handleChange}
            value={userData.state}
            type="text"
            placeholder="State"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your state name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="pincode"
            onChange={handleChange}
            value={userData.pincode}
            type="number"
            placeholder="Pincode"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your pincode.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control
            name="state"
            onChange={handleChange}
            value={userData.state}
            type="text"
            placeholder="Nationality"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your Nationality
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={handleChange}
            value={userData.phoneNumber}
            name="phoneNumber"
            type="number"
            placeholder="Contact Number"
            required
          />
          <Form.Control.Feedback type="invalid">
            Contact Number is required.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group className="position-relative mt-3">
        <Form.Label>Upload your photo</Form.Label>
        <Form.Control
          onChange={handleFilechange}
          type="file"
          name="img"
          accept="image/*"
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Check
          required
          className="signup-check-box"
          label="Agree to our terms and conditions"
          feedbackType="invalid"
          checked={agreedToTerms}
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      <div className="signup-form-flex-div">
        <Button id="user-signup-btn" type="submit">
          Sign UP
        </Button>
      </div>
    </Form>
  );
};
export default UserSignupForm;
