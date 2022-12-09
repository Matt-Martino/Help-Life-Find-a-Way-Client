export const getAllCareTips = () => {
    return fetch("http://localhost:8000/careTips", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const addNewCareTip = (careTip) => {
    return fetch("http://localhost:8000/careTips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(careTip)
        
    }).then(res => res.json())
    }