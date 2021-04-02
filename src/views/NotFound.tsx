import React from "react";
import Container from 'react-bootstrap/Container';
export default function NotFound() {
  return (
    <Container>
      <h1>Error 404</h1>
      <hr />
      <p>The requested page '{window.location.pathname}' could not be found on our servers. If you think this is a bug, then please contact us <a href="/contact">here</a>.</p>
    </Container>
  );
}