import { Redirect, Route } from "react-router-dom"


export const PrivateUserRoute = (props) => {
    return !!localStorage.getItem("user_access_token") ? <>
        <Route {...props}>{props.children}</Route>
    </> 
    : <>
        <Redirect to="/" />
    </>
}