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

export const deleteTask = async (_id, token) => {
    if (!_id) {
        throw new Error("Идентификатор задачи отсутствует");
    }
    const response = await fetch(`${apiURL}/${_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Не удалось удалить задачу. Попробуйте позже");
    }

    // Поскольку сервер возвращает обновлённый список задач, возвращаем JSON
    const data = await response.json();
    return data.tasks; // Возвращаем обновленный массив задач
};

export const updateTask = async (id, updatedData, token) => {
    const response = await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
        throw new Error("Не удалось изменить задачу. Попробуйте позже");
    }
    return response.json();
};