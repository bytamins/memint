import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
`;
