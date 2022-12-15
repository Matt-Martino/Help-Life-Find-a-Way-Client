import { useNavigate } from "react-router-dom"
import { addNewPlantCareTips } from "../../managers/PlantCareTipManager"
import { addNewPlant } from "../../managers/PlantManager"
import { addNewUserPlantPlantTypes } from "../../managers/UserPlantPlantTypeManager"


export const ClonePlant = (plant) => {
    let newPlantData = ""
    

    const clonedPlantToAPI = {
        available: true,
        plant_age: plant.plant_age,
        plant_name: plant.plant_name,
        plant_image: plant.plant_image,
        new_plant_care: plant.new_plant_care
    }




    const careTipsPerPlant = (parsedResponse) => {
        plant.care_tips.forEach((careTip) => {
            const CareTipToAPI = {
                plant: parsedResponse.id,
                care_tip: careTip.id,
            }
            addNewPlantCareTips(CareTipToAPI)
        })
    }

    const plantTypesPerPlant = (parsedResponse) => {
        plant.plant_types.forEach((plantType) => {
            const PlantTypeToAPI = {
                plant: parsedResponse.id,
                plant_type: plantType.id,
            }
            addNewUserPlantPlantTypes(PlantTypeToAPI)
        })
    }

    return (
        <>
            <div>
                {addNewPlant(clonedPlantToAPI).then((parsedResponse) => { newPlantData = parsedResponse }).then(
                    () => { careTipsPerPlant(newPlantData) }).then(
                        () => { plantTypesPerPlant(newPlantData) })}
            </div>

        </>
    )
}