import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import "./Offcanvas.css";
import { useSelector } from "react-redux";

export const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const category = useSelector((state) => state.categories.categories);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {"Меню"}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Выберите что вам нужно</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {category.map((item) => {
            return <div>{item.name}</div>;
          })}{" "}
        </Offcanvas.Body>
        <Nav.Link href="#features">О нас</Nav.Link>
        <Nav.Link href="#pricing">Связаться с нами</Nav.Link>
      </Offcanvas>
    </>
  );
};
