import React from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function Login(props: any) {
  var checkboxChecked = false;
  
  function validate(event: any) {
    if(!checkboxChecked) event.preventDefault();
  }

  return (
    <Card border="secondary" bg="dark" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Discord login</Card.Title>
        <Card.Text>You can login using your Discord account.</Card.Text>

        <Form>
          <div className="mb-3">
            <Form.Check
              custom
              type="checkbox"
              id={`custom-checkbox`}
              onChange={(e) => {
                checkboxChecked = e.target.checked;
              }}
              label={`Check this custom checkbox`}
            />
          </div>
        </Form>
        <div className="btn btn-outline-success w-100">login</div>
      </Card.Body>
    </Card>
  );
}
