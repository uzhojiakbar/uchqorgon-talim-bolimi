import { styled } from "styled-components";
import { media } from "../../utils/media";

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    ${media.tablet}{
        flex-direction: column;
        align-items: center;
    }
    ${media.tablet}{
        padding: 0 5px;
        gap: 40px;
    }

`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    img{
        width: 120px;
        height: auto;
        border-radius: 50%;
    }
    .big{
        width: 400px;
        font-size: 35px;
        font-family: sans-serif;
        font-weight: 900;
    }
    ${media.tablet}{
        flex-direction: column;
        gap: 0;
        img{
            width: 120px;
        }
        .big{
            width: 100%;
            text-align: center;
            font-size: 30px;
            line-height: 30px;
        }
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    .small{
        color: var(--gray);
        font-size: 20px;
        width: 120%;
    }
    ${media.tablet}{
        flex-direction: column;
        align-items: flex-start;
        justify-content: left;
        .small{
            width: 100%;
            font-size: 18px;
            text-align: left;
        }
    }
`
export { Container, Left, Right }
