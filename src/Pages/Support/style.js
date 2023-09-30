import styled from "styled-components";

const Con = styled.div`
  > .main {
    > .support {
      width: 100%;
      display: flex;
      min-height: 550px;

      background-color: var(--yellow-full);
      .contact {
        flex: 1;

        padding: 70px 50px;

        display: flex;
        flex-direction: column;
        gap: 40px;

        > .item {
          display: flex;
          gap: 20px;
          * {
            color: var(--blue) !important;
          }
          .logo {
            border: 2px solid var(--blue);
            border-radius: 50%;
            width: 55px;
            height: 55px;

            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 22px;
            }
          }
          .info {
            .name {
              font-size: 20px;
            }
            .link {
              text-decoration: none;
              font-size: 22px;
              &:active {
                text-decoration: 2px;
              }
            }
          }
        }
      }
      .map {
        flex: 1;

        > iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export { Con };
