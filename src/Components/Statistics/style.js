import { styled } from "styled-components";

const StatCon = styled.div`
    margin: 20px auto;
    max-width: 1440px;
`


const Options = styled.div`
    overflow: scroll;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    margin: 20px auto;

    &::-webkit-scrollbar {
        width: 2px;
        height: 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(128, 128, 128, 0.486);
        border-radius: 25px;
        cursor: pointer;
    }
`
const Option = styled.div`
    padding: 10px;
    height: 80px;
    max-width: 200px;
    min-width: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    border-right: 2px solid var(--bold-gray);
    .count{
        color: black;
        font-size: 26px;
        color: var(--filter);
        font-family: sans-serif;
        font-weight: 900;
    }
    .info{
        color: var(--filter);
        font-size: 14px;
        color: #000;
        font-family: sans-serif;
        font-weight: 100;
    }
`

export { StatCon, Option, Options }