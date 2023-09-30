import styled from "styled-components";

const Container = styled.div`
  > .main {
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    gap: 40px;

    > ul > li {
      color: black;
      margin: 10px 0;
    }
  }
`;

export { Container };
