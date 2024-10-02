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
import { UserProvider } from "../context/UserContext.jsx";
import { NewCardPage } from "../pages/AddCardPage/AddCardPage.jsx";



export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
    const [user, setUser] = useState(null)
    return (
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} user={user} setUser={setUser}/>}>
                        <Route path={routes.exite} element={<ExitPage />} />
                        <Route path={routes.card} element={<CardPage />} />
                        <Route path={routes.add} element={<NewCardPage />} />

                    </Route>
                </Route>
                <Route path={routes.notFound} element={<NotFound />} />
                <Route path={routes.login} element={<LoginPage />} />
                <Route path={routes.register} element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
        </UserProvider>
    )
}
