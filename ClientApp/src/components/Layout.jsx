import React from "react";
import { Container } from "reactstrap";
import { Navbar } from "./navbar";

export const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Container
        className="bg-back-clouds bg-cover"
        tag="main"
      >
        {props.children}
      </Container>
    </div>
  );
};
