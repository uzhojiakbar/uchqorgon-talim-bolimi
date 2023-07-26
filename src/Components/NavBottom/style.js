import { styled } from "styled-components";
import { media } from "../../utils/media";

const NavBottomCon = styled.div`
    background-color: var(--blue-2);
    height: 50px;
    width: 90%;
    margin: 10px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    .link{
        position: relative;
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
    ${media.tablet}{
        display:none;
    }
`

const Child = styled.div`
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;

    background-color: var(--blue-2);
    padding: 0 5px;
    border: 1px solid var(--yellow);
    .child-link{
        padding: 10px 15px;
        text-decoration: none;
        border-bottom: 1px solid white;
        font-size: 16px;
        &:hover{
            background-color: var(--blue-3);
        }
    }
`

export { NavBottomCon, Child }