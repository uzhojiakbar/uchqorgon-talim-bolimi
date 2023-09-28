import styled from "styled-components";

const Con = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 50px 5px;

  height: 180px;
  width: 100%;

  background-color: var(--primery-2);

  .title {
    width: 100%;
    font-size: 30px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      background-color: var(--yellow-full);
      width: 100px;
      height: 5px;
      z-index: 2;
    }
  }
`;

export { Con };
