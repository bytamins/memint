import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #ffffff;
  padding: 20px;
`;

export const StyledLinks = styled.ul`
  margin-right: auto;
  margin-left: auto;
`;

export const Address = styled.div`
  background-color: #fff;
  border: 2px solid #edeef2;
  border-radius: 40px;
  padding: 10px 20px;
  margin-right: 15px;
`;

export const AddressLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
