import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem("token");
    console.log(rest)

    return <Route {...rest} render={props => {
        if(token){
            return <Component {...props} />
        } else {
            return <Redirect to={"/login"}/>
        }
        }
    }/>
};

export default PrivateRoute;