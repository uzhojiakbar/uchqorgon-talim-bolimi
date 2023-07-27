import { styled } from "styled-components";
import { media } from "../../utils/media";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    ${media.tablet}{
        flex-direction: column;
        align-items: ce;
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
        width: 200px;
        font-size: 35px;
        font-family: sans-serif;
        font-weight: 900;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    .small{
        color: var(--gray);
        font-size: 20px;
        width: 500px;
    }
`
export { Container, Left, Right }
