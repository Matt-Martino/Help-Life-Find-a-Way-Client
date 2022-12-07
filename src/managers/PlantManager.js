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

export const deletePlant = (plantId) => {
    return fetch(`http://localhost:8000/plants/${plantId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
    }

export const addNewPlant = (plant) => {
    return fetch("http://localhost:8000/plants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(plant)
        
    }).then(res => res.json())
    }