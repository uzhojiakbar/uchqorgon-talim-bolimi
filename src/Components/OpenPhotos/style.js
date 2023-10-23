import styled from "styled-components";

const OpenPhotosCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999999999;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`;

const NavPhoto = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    color: var(--gray-och);
  }

  > .close {
    font-size: 25px;

    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    background-color: transparent;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: var(--opacity-gray);
    }
  }
`;

const Photo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 70%;
    max-width: 1100px;
    max-height: 800px;
  }
`;

const Button = styled.div`
  padding: 10px 15px;
  background-color: var(--bold-gray);
  border-radius: 5px;

  cursor: pointer;
  > i {
    color: ${({ disabled }) => (disabled ? "var(--white-2)" : "var(--white)")};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "var(--bold-gray)" : "var(--opacity-gray)"};
  }
  &:active {
    background-color: ${({ disabled }) =>
      disabled ? "var(--bold-gray)" : "var(--opacity-gray2)"};
  }
`;

const OtherImages = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  overflow: auto;
`;

const OthImage = styled.img`
  cursor: pointer;
  transition: 0.3s;
  width: 5%;

  border: 4px solid
    ${({ active }) => (active ? "var(--filter)" : "transparent")};

  opacity: ${({ active }) => (active ? "1" : "0.7")};
  &:hover {
    opacity: 1;
  }
`;

export { OpenPhotosCon, NavPhoto, Photo, Button, OtherImages, OthImage };
