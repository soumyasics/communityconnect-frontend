import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/BaseUrl";
import "./userLogin.css";
const UserLoginForm = ({ user }) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!email || !password || password.length < 8) {
      console.log("Please fill all the fields");
      return;
    }

    if (!isValidEmail(email)) {
      console.log("Invalid email");
      return;
    }
    sendDataToServer(email, password);
  };

  const sendDataToServer = async (email, password) => {
    if (user === "user" || user === "orphanage" || user === "organization") {
      try {
        const res = await axiosInstance.post(`/${user}/login`, {
          email,
          password,
        });
        console.log("response", res);

        if (res.status === 200) {
          alert("Login successful.");
          setTimeout(() => {
            if (user === "orphanage") {
              const orpDataFromServer = res?.data?.data;
              if (orpDataFromServer) {
                if (orpDataFromServer.password) {
                  delete orpDataFromServer.password;
                }
                localStorage.setItem(
                  "orphanage-data",
                  JSON.stringify(orpDataFromServer)
                );
                navigate("/orphanage");
              } else {
                console.log(
                  "Orphanage data is not saved in local storage",
                  orpDataFromServer
                );
              }
            } else {
              navigate("/");
            }
          }, 1500);
        }
      } catch (error) {
        console.log(error);
        if (error.response?.status === 400) {
          alert(error.response.data.message);
        } else {
          alert(error.message);
        }
      }
    } else {
      console.log("user is different");
      return;
    }
  };
  const redirectUserSignup = () => {
    navigate("/user/signup");
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="user-login-input"
          type="email"
          onChange={handleEmailChange}
          placeholder="Email"
          required
          name="email"
          value={email}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          required
          className="user-login-input"
          type="password"
          minLength={8}
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Form.Control.Feedback type="invalid">
          Please Enter atleast 8 characters.
        </Form.Control.Feedback>
      </Form.Group>
      <div className="user-login-btn-container-2">
        <span className="user-forgot-password mb-3">Forgot Password?</span>
        <p>
          Don’t have an account?{" "}
          <span className="user-forgot-password" onClick={redirectUserSignup}>
            {" "}
            Sign up{" "}
          </span>
        </p>
        <br />

        <Button className="user-login-btn" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};
export default UserLoginForm;
