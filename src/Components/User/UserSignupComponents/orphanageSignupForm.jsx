import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./signupForm.css";
const OrphanageSignupForm = () => {
  const [orphanageData, setOrphanageData] = useState({
    name: "",
    yearOfEstablishment: "",
    street: "",
    city: "",
    purpose: "",
    state: "",
    pincode: "",
    contact: "",
    email: "",
    password: "",
    description: "",
    img: null,
  });
  const handleChange = (e) => {
    setOrphanageData({ ...orphanageData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("orp", orphanageData);
  }, [orphanageData]);
  // form validation
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
    <Form
      id="user-signup-form-input"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control required type="text" placeholder="Orphanage Name" />
          <Form.Control.Feedback type="invalid">
            Please enter your orphanage name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Your Of Establishment"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter your established year
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control required type="email" placeholder="Email" />
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
            required
            as="select"
            type="select"
            name="purpose"
            onChange={handleChange}
            value={orphanageData.purpose}
          >
            <option value="">Purpose</option>
            <option value="value-1">value 1</option>
            <option value="vallue-2">value 2</option>
            <option value="other">Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select your gender.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control type="text" placeholder="Street" required />
          <Form.Control.Feedback type="invalid">
            Please provide a your street.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide your city name.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="signup-form-flex-div">
        <Form.Group>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide your state name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" placeholder="Pincode" required />
          <Form.Control.Feedback type="invalid">
            Please provide your pincode.
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group className="position-relative mt-3">
        <Form.Label>Upload your photo</Form.Label>
        <Form.Control type="file" name="file" accept="image/*" />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Check
          required
          className="signup-check-box"
          label="Agree to our terms and conditions"
          feedbackType="invalid"
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
export default OrphanageSignupForm;
