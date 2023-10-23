import styled from "styled-components";

const GaleryCon = styled.div`
  width: 100%;
  min-height: 430px;
  background-color: var(--blue);
  margin: 10px;
  border: 7px solid white;
  transition: 0.1s;

  cursor: pointer;
  user-select: none;
  &:hover {
    border: 7px solid var(--bold-gray);
  }
`;

const Poster = styled.div`
  width: 100%;
  > img {
    width: 100%;
    height: 250px;
  }
`;
const Info = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;

  > .name {
    width: 75%;
    font-size: 18px;
  }
  .date {
  }

  > .count {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    right: 20px;
    top: -45px;
    font-size: 32px;
    background-color: yellow;
    color: var(--blue);
    padding: 0 20px;
    height: 120px;

    text-align: center;

    > .foto {
      font-size: 20px;
      color: var(--blue);
    }
  }
`;

export { GaleryCon, Poster, Info };
