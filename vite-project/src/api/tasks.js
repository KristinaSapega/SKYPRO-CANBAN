const apiURL = "https://wedev-api.sky.pro/api/kanban"

export const getTasks = async (token) => {
    const response = await fetch(apiURL, {
        method: "GET",
        headers: {
            Authorization:  `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error ("Ошибка, не удалось загрузить данные. Попробуйте позже.");
    }
    return response.json();
};
