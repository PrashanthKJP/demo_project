import React, { useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {}, [user]);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Welcome to DashBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user && user ? (
              <Button onClick={handleLogout}>Logout </Button>
            ) : (
              <Link to="/login">
                <Button>Signed in </Button>
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
