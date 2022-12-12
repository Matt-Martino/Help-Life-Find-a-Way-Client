export const getCareTipsForSpecificPlant = (plantId) => {
    return fetch(`http://localhost:8000/plantCareTips?plant=${plantId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const deletePlantCareTip = (plantCareTipId) => {
    return fetch(`http://localhost:8000/plantCareTips/${plantCareTipId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
    }


export const addNewPlantCareTips = (CareTipToAPI) => {
    return fetch("http://localhost:8000/plantCareTips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(CareTipToAPI)
        
    }).then(res => res.json())
    }