import React from "react";
import Nav from "react-bootstrap/Nav";
import BsNav from "react-bootstrap/Navbar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function NavBar(props: any) {
  interface NavBarItem {
    title: string;
    path: string;
    tooltip: string;
  }

  return (
    <BsNav bg="dark" expand="lg" variant="dark" className="shadow">
      <BsNav.Brand href="/">
        <img src="logo.svg" height="30" />
      </BsNav.Brand>
      <BsNav.Toggle aria-controls="basic-BsNav-nav" />
      <BsNav.Collapse id="basic-BsNav-nav">
        <Nav className="mr-auto">
          {props.items.map((item: NavBarItem) => (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>{item.tooltip}</Tooltip>}
            >
              <Nav.Link href={item.path}>{item.title}</Nav.Link>
            </OverlayTrigger>
          ))}
          {["bottom"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom`}>Tooltip on bottom.</Tooltip>
              }
            >
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </OverlayTrigger>
          ))}
        </Nav>
        <a href="/login" className="btn btn-success">
          Login
        </a>
      </BsNav.Collapse>
    </BsNav>
  );
}
