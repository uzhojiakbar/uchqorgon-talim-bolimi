import { styled } from "styled-components";

const CountCon = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    padding: 0 10px;

    
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
    min-width: 330px;
    margin: 0 10px;
    height: 200px;
    background-color: var(--opacity-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    .count{
        font-size: 30px;
        font-family: sans-serif;
        font-weight: 900;
    }
    .desc{
        font-size: 16px;
        text-transform: capitalize;
    }
`

export { CountCon, Option }