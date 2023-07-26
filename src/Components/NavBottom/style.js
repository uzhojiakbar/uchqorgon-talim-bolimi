import { styled } from "styled-components";

const NavBottomCon = styled.div`
    background-color: var(--blue-2);
    height: 40px;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    .link{
        cursor: pointer;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 40px;
        font-size: 13px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 900;
        &:hover{
            background-color: var(--blue-3);
        }
    }
`

export { NavBottomCon }