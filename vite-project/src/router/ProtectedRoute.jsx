import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes"
import { useUserContext } from "../context/useUserContext";


export const ProtectedRoute = () => {
    const {user} = useUserContext();
    console.log(user)

    // const isAuthhenticated = user && user.token;
    // return (
    //     isAuthhenticated ? <Outlet/> : <Navigate to={routes.login}/>

    //)
    return (
        user ? <Outlet/> : <Navigate to={routes.login}/>

    )
}
