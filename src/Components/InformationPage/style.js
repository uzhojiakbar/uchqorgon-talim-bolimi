import { styled } from "styled-components";

export const InformationSt = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 70px;
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    `
export const InfopgImg = styled.div`
    font-size: 50px;
`

export const InfoPgSt = styled.div`
    width: 300px;   
    min-height: 400px;
    background-color: #4758ad;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;    
    margin-top: 30px;
    border-radius: 7px;
    padding: 20px 5px;
`
export const Manzil = styled.div`
    font-size: 18px;
    color: var(--white);
    /* padding-top: 30px;
    padding-bottom: 10px; */
    text-align: center;
    text-transform: uppercase;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
    font-weight: 900;
`

export const Malumotlar = styled.div`
    width: 240px;
    font-size: 14px;
    /* margin-top: -20px; */
    line-height: 30px;
    text-align: center;
    color: var(--gray);
    font-weight: 100;
`
export const InfopgBt = styled.button`
    width: 150px;
    height: 40px;
    background-color: var(--white);
    border: none;
    /* padding: 10px; */
    border-radius: 10px;
    /* margin-top: 70px; */
    color: var(--blue);
    cursor: pointer;
    &:hover{
        background-color: var(--blue);
        color: var(--white);
    }
`