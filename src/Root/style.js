import { styled } from "styled-components";

export const Main = styled.div`
  filter: ${({ background }) =>
    background === "gray" ? `grayscale(80%)` : `grayscale(0%)`};
`;
