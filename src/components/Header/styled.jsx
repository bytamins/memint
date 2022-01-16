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
  display: flex;
  align-items: center;
`;

export const AddressLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NetworkButton = styled.button`
  background: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  border-radius: 40px;
  img {
    margin-right: 5px;
  }
`;
