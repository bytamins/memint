import styled from "styled-components";

export const Card = styled.div`
  ${(props) =>
    props.resetBorder &&
    `
    && {
        border-color: 1px solid rgba(0, 0, 0, 0.125)!important;
    }
  `}
`;
