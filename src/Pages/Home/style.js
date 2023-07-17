import { styled } from "styled-components";

import back from '../../Assets/imgs/back1.jpg'

const HomeStyle = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 800px;
    margin: 0 auto;
    background-image: url(${back});
    background-repeat: repeat-x;
    position: relative;
    background-size: cover;
    z-index: 1;
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color:  rgba(6, 45, 199, 0.200);
    }
`


export { HomeStyle }