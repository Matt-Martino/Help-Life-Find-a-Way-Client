export const getAllPlants = () => {
    return fetch("http://localhost:8000/plants", {
    headers:{
        "Authorization": `Token ${localStorage.getItem("help_token")}`
    }
})
    .then(res => res.json())
    }

export const getPlantsByUserId = (token) => {
    return fetch(`http://localhost:8000/plants?user=${token}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }