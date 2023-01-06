import { useEffect, useState } from "react"
import { getAllPlants } from "../../managers/PlantManager"
import { AllPlantsSingleView } from "./allPlantSingleView"



export const AllPlants = () => {
    const [allPlants, setAllPlants] = useState([])


    useEffect(() => {
        getAllPlants()
        .then((allPlantsArray) => {
            setAllPlants(allPlantsArray)
        })
    }, [])

    const renderPlants = () => {

        return (
          <>
                {allPlants.map((plant) => (
                <AllPlantsSingleView
                key={`plants--${plant.id}`}
                username={plant.user.username}
                userId={plant.user.id}
                profilePic={plant.user.profile_image_url}
                available={plant.available}
                new_plant_care={plant.new_plant_care}
                plant_age={plant.plant_age}
                plant_name={plant.plant_name}
                plant_image={plant.plant_image}
                care_tips={plant.care_tips}
                plant_types={plant.plant_types}
                id= {plant.id}
                />
                ))}
          </>
        )
    
      }

    return <>
    <main className="container is-primary">
      <h1 className="title is-1 level-item">All The Plants!</h1>
        {renderPlants()}
    </main>
    </>
    }