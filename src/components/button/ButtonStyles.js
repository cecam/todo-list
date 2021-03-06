import styled from "@emotion/styled";

export const Icon = styled.button`
    border: none;
    background: transparent;
    font-size: 40px;
    color: ${({color}) => color };
    margin-left: 5px;
    cursor: pointer;

    @media(max-width: 650px) {
        font-size: 30px;
    }
`