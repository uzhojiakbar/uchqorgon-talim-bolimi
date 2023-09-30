import { styled } from "styled-components";

const View = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  width: 200px;
  min-height: 100px;
  z-index: 9999;

  padding: 10px;
  * {
    user-select: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .options {
    display: flex;
    gap: 10px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  * {
    font-size: 14px;
    color: gray;
  }
`;
const Option = styled.div`
  padding: 10px 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) =>
    type === "gray" ? `var(--bold-gray)` : `var(--filter)`};
  border: 2px solid black;
  cursor: pointer;
`;

export { View, Section, Title, Option };
