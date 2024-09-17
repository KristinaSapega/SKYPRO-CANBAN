import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { NotFound } from "../pages/NotFound/NotFound.jsx";
import { MainPage } from "../pages/Main/MainPage.jsx";
import { LoginPage } from "../pages/Login/LoginPage.jsx";
import { RegisterPage } from "../pages/Register/RegisterPage.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { useState } from "react";
import { ExitPage } from "../pages/Exite/ExitPage.jsx";
import { CardPage } from "../pages/CardPage/CardPage.jsx";



export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute isAuth={isAuth} />}>
                    <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} />}>
                        <Route path={routes.exite} element={<ExitPage setIsAuth={setIsAuth}/>} />
                        <Route path={routes.card} element={<CardPage />} />

                    </Route>
                </Route>
                <Route path={routes.notFound} element={<NotFound />} />
                <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth} />} />
                <Route path={routes.register} element={<RegisterPage />} />


            </Routes>
        </BrowserRouter>
    )
}
