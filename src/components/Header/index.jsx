import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Address, StyledHeader, StyledLinks } from "./styled";
import c from "./content.json";
const Header = ({ address }) => {
  const { pathname } = useLocation();
  return (
    <StyledHeader>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            {/* 🍬 memint */}
            <img src={logo} alt="memint logo" height="28" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <StyledLinks className="navbar-nav">
              {c.pages.map((page) => (
                <li className="nav-item" key={page.path}>
                  <Link
                    className={`nav-link ${pathname === page.path && "active"}`}
                    to={page.path}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </StyledLinks>
            <div className="d-flex align-items-center">
              {address ? (
                <Address>{`${address.substring(0, 6)}...${address.substring(
                  address.length - 4
                )}`}</Address>
              ) : (
                <Address>Not Connected</Address>
              )}
            </div>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
