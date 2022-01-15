import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  padding: 20px;
  p {
    color: #535f6b;
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  padding: 0.375rem 1.25rem;
`;

export const Icon = styled.div`
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  height: 64px;
  width: 64px;
  line-height: 64px;
  font-size: 26px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 1.5rem;
`;
