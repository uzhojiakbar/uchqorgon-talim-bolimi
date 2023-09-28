import styled from "styled-components";

const Container = styled.div`
  color: black;
  width: 100%;

  .asosiy {
    display: flex;
    flex-direction: row;
    gap: 10px;

    margin: 20px auto;

    .left {
      flex: 0.8;
      border: 1px solid red;
    }
    .right {
      flex: 1;
      color: black;
    }
  }
`;

const Pic = styled.img`
  width: 100%;
`;

const LeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  gap: 30px;

  .leader-name {
    width: 200px;
    line-height: 40px;
    font-size: 33px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 20px;
    > span {
      font-weight: 700;
    }
  }
  .leader-job {
    font-weight: 700;
    font-size: 22px;
    padding: 20px 5px;
    background-color: var(--yellow-full);
  }

  .leader-connection {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
    > .connection {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 22px;
      > .logo {
        padding: 7px 10px;
        background-color: var(--yellow-full);
        border-radius: 50%;
        > i {
          font-size: 28px;
          color: var(--blue);
        }
      }
      > .info {
        font-weight: 300;
        text-decoration: none;
        color: var(--black);
      }
    }
  }

  .leader-social-media {
    padding: 0 20px;
    display: flex;
    gap: 20px;
    .media {
      font-size: 25px;
      padding: 7px 12px;
      border-radius: 50%;

      transition: 0.3s;

      > i {
        color: var(--blue);
      }

      &:hover {
        background-color: var(--yellow-full);
      }
    }
  }

  .leader-bio {
    margin: 0 20px;
    padding: 30px;

    display: flex;
    flex-direction: column;

    min-height: 100px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    transition: all 0.3s;

    > .bio-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 60px;
      user-select: none;

      > .bio-title {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
      }
      > .btn {
        transition: 0.3s;
        font-size: 20px;
        transform: ${({ bio }) => (bio ? "rotate(180deg)" : "rotate(360deg)")};
      }
    }
    > .bio {
      line-height: 25px;

      font-size: 20px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-align: justify;

      margin-top: 20px;
    }
  }

  * {
    color: black;
  }
`;

export { Container, Pic, LeaderInfo };
