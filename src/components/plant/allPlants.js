import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
              <section className="box">
                {allPlants.map((plant) => (
                <AllPlantsSingleView
                key={`plant--${plant.id}`}
                username={plant.user.username}
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
              </section>
          </>
        );
    
      }

    return <>
    <main className="container is-primary">
      <h1 className="title is-1 level-item">All The Plants!</h1>
        {renderPlants()}
    </main>
    </>
    }