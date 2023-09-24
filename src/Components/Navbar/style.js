import { styled } from "styled-components";
import { media } from "../../utils/media";

const NavbarCon = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  color: var(${({ theme }) => (theme === "dark" ? "--white" : "--black")});
  padding: 0 15px;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
`;

const NavBtn = styled.div`
  min-width: 50px;
  min-height: 50px;
  border: ${({ noborder, theme }) =>
    noborder
      ? "none"
      : `1px solid ${theme === "dark" ? "var(--primery)" : "var(--white)"}`};

  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  cursor: pointer;
  transition: 0.3s;
  .fa-solid {
    color: ${({ theme }) =>
      theme === "dark" ? "var(--primery)" : "var(--white)"};
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 15px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-weight: 900;
      color: ${({ theme }) =>
        theme === "dark" ? "var(--primery)" : "var(--white)"};
    }
  }


  ${({ noborder }) =>
    noborder
      ? ""
      : `
    &:hover{
        background-color: var(--yellow);
        .fa-solid{
            color: var(--primery);
            span{
                color: var(--primery);
            }
        }
    }
    `}

  img {
    width: 70px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .view {
    position: relative;
  }
`;

export { NavbarCon, NavBtn, Section };
