import { Link, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";
import logo from "../../assets/logo.png";
// import rinkeby from "../../assets/rinkeby.png";
// import polygon from "../../assets/polygon.png";
import {
  Address,
  AddressLink,
  // NetworkButton,
  StyledHeader,
  StyledLinks,
} from "./styled";
import c from "./content.json";
const Header = () => {
  const { pathname } = useLocation();
  const { user } = useMoralis();

  const address = user ? user.get("ethAddress") : "";
  return (
    <StyledHeader>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="memint logo" height="28" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <StyledLinks className="navbar-nav">
                {c.pages.authenticated.map((page) => (
                  <li className="nav-item" key={page.path}>
                    <Link
                      className={`nav-link ${
                        pathname.indexOf(page.path) > -1 && "active"
                      }`}
                      to={page.path}>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </StyledLinks>
            ) : (
              <StyledLinks className="navbar-nav">
                {c.pages.public.map((page) => (
                  <li className="nav-item" key={page.path}>
                    <Link
                      className={`nav-link ${
                        pathname.indexOf(page.path) > -1 && "active"
                      }`}
                      to={page.path}>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </StyledLinks>
            )}
            <div className="d-flex align-items-center">
              {/* <NetworkButton
                onClick={() =>
                  setNetwork(network === "Polygon" ? "Rinkeby" : "Polygon")
                }>
                <Address>
                  <img
                    src={network === "Polygon" ? polygon : rinkeby}
                    alt="Network"
                    height="16"
                  />
                  {network}
                </Address>
              </NetworkButton> */}
              {address ? (
                <AddressLink to="/profile">
                  <Address>{`${address.substring(0, 6)}...${address.substring(
                    address.length - 4
                  )}`}</Address>
                </AddressLink>
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
