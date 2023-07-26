import { styled } from "styled-components";

import back from '../../Assets/imgs/back1.jpg'

const HomeStyle = styled.div`
   height: 98vh;
   background-image: url(${back});
   background-size: cover;
   background-repeat: no-repeat;

   position: relative;
   z-index: 0;

   &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #062dc7;
        opacity: .5;
        z-index: -1;
   }
   .center{
      max-width: 90%;
      margin: 0 auto;
   }
   svg path{
      color: white;
      fill: white;
   }
`


export { HomeStyle }