import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
const UserLoginForm = ({ user }) => {
  console.log("user", user);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="user-login-input"
          type="email"
          placeholder="Email"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>

        <Form.Control
          className="user-login-input"
          type="password"
          placeholder="Password"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password
        </Form.Control.Feedback>
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
