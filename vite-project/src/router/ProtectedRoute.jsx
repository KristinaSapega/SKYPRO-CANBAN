import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes"
import { useUserContext } from "../context/useUserContext";


export const ProtectedRoute = () => {
    const {user} = useUserContext();

    return (
        user ? <Outlet/> : <Navigate to={routes.login}/>

    )
}
