import styled from '@emotion/styled'

export const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoginForm = styled.form`
    padding: 15px 20px;
    width: 80%;

    button {
        margin-top: 15px;
        padding: 7px 20px;
        width: 100%;
        background-color: var(--blue);
        border: none;
        border-radius: 10px;
        color: var(--white);
        font-size: 18px;
        cursor: pointer;
    }
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    label {
        font-size: 14px;
        color: var(--darkBlue);
        margin-bottom: 7px;
    }

    input {
        border: solid 1px var(--grey);
        border-radius: 10px;
        font-size: 16px;
        width: 100%;
        padding: 7px 10px;
        transition: .3s ease;
        background: transparent;

        &:hover {
            padding-left: 15px;
            padding-right: 5px;
        }

        &:focus {
            padding-left: 15px;
            padding-right: 5px;
            outline: none;
            border: solid 2px var(--blue);
        }
    }
`