import React from "react";
import BsNav from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Navbar(props: any) {
  return (
    <BsNav bg="dark" variant="dark" className="shadow">
      <BsNav.Brand href="#home"><img src="favicon.svg" height="40px" /></BsNav.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/features">Features</Nav.Link>
        <Nav.Link href="/pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </BsNav>
  );
}
