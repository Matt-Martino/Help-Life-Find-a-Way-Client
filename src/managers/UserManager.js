export const getAllUsers = () => {
    return fetch("http://localhost:8000/helplifeusers", {
    headers:{
        "Authorization": `Token ${localStorage.getItem("help_token")}`
    }
})
    .then(res => res.json())
    }

export const getUserById = (id) => {
    return fetch(`http://localhost:8000/helplifeusers/${id}`, {
    headers:{
        "Authorization": `Token ${localStorage.getItem("help_token")}`
    }
    })
        .then(res => res.json())
    }


export const updateUser = (user) => {
return fetch(`http://localhost:8000/helplifeusers/${user.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("help_token")}`
    },
    body: JSON.stringify(user)
})
}

export const deleteUser = (userId) => {
return fetch(`http://localhost:8000/users/${userId}`, {
    method: "DELETE",
})
}

export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/helplifeusers?currentUser`, {
    headers:{
        "Authorization": `Token ${localStorage.getItem("help_token")}`
    }
    })
        .then(res => res.json())
    }

export const UpdateUserInfo = (user) => {
    return fetch(`http://localhost:8000/helplifeusers/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(user)
        
    })
    }