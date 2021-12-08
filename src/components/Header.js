import {
  Button,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";
import React, {useContext} from "react";
import {NumbersCountContext} from "../contexts";
import {Link} from "react-router-dom";

const Header = () => {
  const ctx = useContext(NumbersCountContext);

  return (
    <>
      <Navbar expand="md" container>
          <NavbarBrand>
            <Link to="/" className="nav-link"><h1>Number Counter</h1></Link>
          </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/chart" className="nav-link"><NavLink>Chart</NavLink></Link>
          </NavItem>
        </Nav>
        <Button onClick={ctx.resetNumbersCount} color="danger text-uppercase">
          reset
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
