import { styled } from "styled-components";
import { media } from "../../utils/media";

const NavbarCon = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    color: var(--white);
    padding: 0 15px;

    height: 80px;

    display: flex;
    align-items:center;

    ${media.tablet}{
        display: flex;
        align-items: center;
        padding: 10px 15px;
    }
`

const NavBtn = styled.div`
    width:  50px;
    height:  50px;
    border: 1px solid white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: .3s;
    .fa-solid{
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            font-size: 15px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: 900;
        }
    }


    &:hover{
        background-color: var(--yellow);
        .fa-solid{
            color: var(--primery);
            span{
                color: var(--primery);
            }
        }
    }
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .view{
        position: relative;
    }
`


export { NavbarCon, NavBtn, Section }