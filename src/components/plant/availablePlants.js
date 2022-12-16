import { useEffect, useState } from "react"
import { AdoptThisPlant, getAvailablePlants } from "../../managers/PlantManager"


export const AvailablePlants = () => {
    const [availablePlants, setAvailablePlants] = useState([])

    useEffect(() => {
        getAvailablePlants().then((plantData) => setAvailablePlants(plantData))

    }, [])



    const adoptPlantButton = (plant) => {
        return <>
          <button className="button is-small is-info is-focused"
            onClick={() => {AdoptThisPlant(plant) }}
          >Adopt this available plant.
          </button>
        </>
      }
    
      

    return <>
        {availablePlants.map((plant) =>
            <section key={`plants--${plant.id}`}>
                <div className="level">
                    <div className="columns level-item">
                        <div className="card column is-three-quarters">
                            <div className="card-content">
                                <div className="columns">
                                    <div className="column">
                                        <div className="media">
                                            <div className="media-center">
                                                <div className="column level">
                                                    <div className="level-item" >{plant.plant_name}</div>

                                                    <div className="level-item">{plant?.user?.username}</div>

                                                    <img src={plant.plant_image}></img>

                                                    <span className="level-item">{plant.new_plant_care}</span>
                                                    {adoptPlantButton(plant)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

            </section>
        )}
    </>
}