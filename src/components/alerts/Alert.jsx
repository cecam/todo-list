import { useContext } from "react";
import styled from "@emotion/styled";

import { AlertContext } from '../../context/AlertContext'

const AlertDiv = styled.div`
    position: absolute;
    top: 75px;
    right: 15px;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    background: #c41f1f;
`

const Alert = () => {
    const { alert } = useContext(AlertContext)

    return ( 
        <AlertDiv>
            {alert}
        </AlertDiv>
    );
}
 
export default Alert;