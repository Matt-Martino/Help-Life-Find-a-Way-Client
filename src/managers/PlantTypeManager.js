export const getAllPlantTypes = () => {
    return fetch("http://localhost:8000/plantTypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const getAllPlantTypesForOnePlant = (plantId) => {
    return fetch(`http://localhost:8000/plantTypes?plant=${plantId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

