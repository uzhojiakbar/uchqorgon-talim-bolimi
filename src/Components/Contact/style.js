import { styled } from "styled-components";
import { media } from "../../utils/media";

const ContactCon = styled.div`
    color: gray;
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px 0;
    transition: .2s;
    .main{
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

const Inputs = styled.div`
    display: grid;
    grid-template-areas:
    "a a b b "
    "c c d d"
    "e e e e"
    ;
    gap: 40px 20px;
    justify-content: center;
    align-items: center;
    ${media.tablet}{
        grid-template-areas:
            "a a a a "
            "b b b b"
            "c c c c"
            "d d d d"
            "e e e e"
        ;
    }
`
const Input = styled.input`
    max-width: 1440px;
    grid-area: ${({ letter }) => `${letter}`};
    padding: 15px 10px;
    border: 1px solid #000;
    width: 20vw;
    color: #000;
    font-family: sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    transition: .2s;
    word-spacing: 4px;
    &::placeholder{
        font-weight:100;
    }
    outline: none;
    &:focus{
        box-shadow: 0 0 10px gray;
    }
    ${media.tablet}{
        width: 80vw;
    }
`
const Text = styled.textarea`
    grid-area: ${({ letter }) => `${letter}`};
    padding: 15px 10px;
    border: 1px solid #000;
    max-width: 1440px;
    color: #000;
    font-family: sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    word-spacing: 4px;
    outline: none;
    &::placeholder{
        font-weight:100;
    }
    &:focus{
        box-shadow: 0 0 10px gray;
    }
    resize: vertical;
`

const Button = styled.button`
    border: none;
    outline: none;
    background-color: var(--blue);
    width: fit-content;
    padding: 15px 40px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    transition: .2s;

    &:hover{
        background-color: var(--blue-2);
    }
    &:active{
        background-color: var(--blue-3);
    }
`

export { Input, Inputs, Text, ContactCon, Button }