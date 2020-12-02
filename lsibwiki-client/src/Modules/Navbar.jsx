import React, { useState } from "react";
import LoginModal from "./LoginModal";

import { Collapse, NavbarToggler, Nav, Button } from "reactstrap";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navBar">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand">LSiB Wiki</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar style={{ paddingLeft: "10px" }}>
                {props.token ? (
                  <Button onClick={props.clearToken}>Logout</Button>
                ) : (
                  <LoginModal updateToken={props.updateToken} />
                )}
              </Nav>
            </Collapse>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default App;
