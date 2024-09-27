const apiUrl = " https://wedev-api.sky.pro/api/user"

export const signIn = async ({login, password}) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        body: JSON.stringify ({
            login,
            password
        })
    }
);
    if (response.status === 400) {
        throw new Error ("Неверный логин или пароль")
    }
    if (!response.ok) {
        throw new Error ("Ошибка");
    }
    return response.json();
};


export const signUp = async ({login, name, password}) => {
    const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify ({
            login,
            name,
            password
        }),
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Пользователь с таким логином уже существует");
    }
};
