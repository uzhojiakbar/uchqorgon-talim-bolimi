import { styled } from "styled-components";

import back from '../../Assets/imgs/back1.jpg'
import { media } from "../../utils/media";

const HomeStyle = styled.div`
   height: 90vh;
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
        background-color: var(--filter);
        opacity: .6;
        z-index: -1;
   }
   .center{
      max-width: 90%;
      height: 100%;
      margin: 0 auto;
      padding: 10px 0;

      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 120px;
   }

   ${media.tablet}{
        height: 98vh;
    }
`


export { HomeStyle }