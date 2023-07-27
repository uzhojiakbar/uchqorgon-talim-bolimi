import { styled } from "styled-components";
import { media } from "../../utils/media";

const TitleCon = styled.div`
    color: var(--blue) !important;
    font-size: 32px;
    font-family: sans-serif;
    text-align: center;
    font-weight: 900;
    width: fit-content;
    margin: 0 auto;

    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 25px;
        right: 14%;
        z-index: -1;
        width: 70%;
        height: 15px;
        background-color: var(--yellow);
        opacity: .4;
        border-radius: 40px;
    }
    ${media.mobileM}{
        font-size: 20px;
         &::before{
            position: absolute;
            top: 12px;
            right: 14%;
        }
    }
`

export { TitleCon }