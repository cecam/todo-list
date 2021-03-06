import styled from '@emotion/styled'

export const Card = styled.div`
    display: grid;
    grid-template-rows: 150px 1fr 80px;
    background-color: var(--white);
    width: 90%;
    height: 600px;
    max-width: 1000px;
    max-height: 1000px;
    border-radius: 15px;
    transition: .3s ease;
    overflow: hidden;

    @media (max-width: 600px) {
        grid-template-rows: 100px 1fr 80px;
    }
`

export const TitleSection = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
    color: var(--blue);
    border-bottom: solid 1px var(--grey);
    max-width: 90vw;
`

export const TaskSection = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    min-height: 300px;

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        font-size: 30px;
    }

    ::-webkit-scrollbar {
       width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--blue);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`

export const TaskElement = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 100px;
    max-width: 90vw;
    border-top: solid 1px var(--grey);
    border-bottom: solid 1px var(--grey);
    transition: .5s ease;
    -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: flip-in-hor-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    div {
        display: flex;
        align-items: center;

        &:nth-child(1) {
            justify-content: center;
            border: solid 1px var(--grey);
        }
        
        &:nth-child(2) {
            padding: 0 20px;
            justify-content: space-between;
        }

        p {
            font-size: 18px;
            color: ${({color}) => color ? 'var(--grey)' : 'var(--darkBlue)'};
        }

        input {
            font-size: 18px;
            padding: 5px 0 5px 5px;
            border: none;
            border-bottom: solid 2px var(--grey);
            background: transparent;
            width: 100%;

            :focus {
                outline: none;
            }
        }
    }

    @media (max-width: 600px) {
        grid-template-columns: 70px 1fr;

        div {
            &:nth-child(2) {
                display: flex;
                padding: 0 10px;
                justify-content: space-between;
            }
        }
    }

    @-webkit-keyframes flip-in-hor-top {
        0% {
            -webkit-transform: rotateX(-80deg);
                    transform: rotateX(-80deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0);
                    transform: rotateX(0);
            opacity: 1;
        }
    }
    @keyframes flip-in-hor-top {
        0% {
            -webkit-transform: rotateX(-80deg);
                    transform: rotateX(-80deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0);
                    transform: rotateX(0);
            opacity: 1;
        }
    }
`

export const NewTaskSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90vw;
    padding:  10px 50px;
    background-color: var(--blue);
    color: var(--white);

    @media(max-width: 650px) {
        padding: 10px 20px;
    }
`

export const TaskForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    input {
        border: none;
        background: transparent;
        width: 400px;
        font-size: 18px;
        color: var(--white);

        &::placeholder { 
            color: var(--white);
            opacity: 1; 
        }

        &:focus {
            outline: none;
        }
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }
`