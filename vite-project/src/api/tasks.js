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

export const addTask = async (newCard, token) => {
    const response = await fetch (apiURL, {
        method: "POST",
        headers: {
            Authorization:  `Bearer ${token}`,
        },
        body: JSON.stringify(newCard)
    });

    if (!response.ok) {
        throw new Error ("Ошибка, не удалось добавить задачу. Попробуйте позже.");
    }
    return response.json();
};


