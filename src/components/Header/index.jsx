import { StyledHeader, StyledLinks } from "./styled";
import { Link } from "react-router-dom";
const Header = ({ address }) => {
  console.log(address);
  return (
    <StyledHeader>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            MeMint
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <StyledLinks className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/minted">
                  Minted
                </Link>
              </li>
            </StyledLinks>
            <form className="form-inline my-2 my-lg-0">
              <small className="pr-4">{address || "Not Connected"}</small>{" "}
              <Link
                to="/login"
                className="btn btn-outline-success my-2 my-sm-0 ml-3">
                Login
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
