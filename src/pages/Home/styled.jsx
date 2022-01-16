import styled from "styled-components";

export const MainHeader = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 80%;
`;

export const SecondaryHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CallOutSection = styled.section`
  background: #70baa0;
  padding: 20px 0px;
`;

export const CallOutText = styled.h5`
  font-size: 3rem;
  ${(props) => props.faded && `opacity: 0.5;`}
`;

export const CallOutContainer = styled.div`
  border: 2px dashed black;
  padding: 20px 60px;
  border-radius: 20px;
`;
