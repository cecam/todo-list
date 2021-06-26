import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({component: Component, ...props}) => {
    const { user } = useContext(AuthContext) 
    return (  
        <Route 
            {...props} render={ props => !user ? 
                    <Redirect to="/" /> 
                :
                    <Component {...props} />
            }
        />
    );
}
 
export default PrivateRoute;