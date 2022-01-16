import { ByMoralis } from "react-moralis";
import { StyledFooter, LeftColumn } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <span>
            © 2022 memint &middot; a project by{" "}
            <a href="https://www.bytamins.com" target="_blank" rel="noreferrer">
              bytamins
            </a>
          </span>
        </div>
        <LeftColumn className="col-md-6 text-right">
          <ByMoralis width={160} variant="light" />
        </LeftColumn>
      </div>
    </StyledFooter>
  );
};

export default Footer;
