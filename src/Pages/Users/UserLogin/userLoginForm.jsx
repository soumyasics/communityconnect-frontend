import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLoginForm = ({ user }) => {
  const navigate = useNavigate();
  console.log("user", user);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!email || !password) {
      console.log("Please fill all the fields");
      return;
    }

    sendDataToServer(email, password);
  };

  const sendDataToServer = async (email, password) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5000/user/login",
        {
          email,
          password,
        },
        config
      );
      console.log("response", res);
      if (res.status === 200) {
        alert("Login successful.");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
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
        <Form.Control.Feedback>Your password is strong.</Form.Control.Feedback>
      </Form.Group>
      <div className="user-login-btn-container-2">
        <a href="#">Forgot Password?</a>
        <br />

        <Button className="user-login-btn" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};
export default UserLoginForm;
