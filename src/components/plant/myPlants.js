import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deletePlant, getCurrentLoggedInUsersPlants } from "../../managers/PlantManager"
import { ClonePlant } from "./clonePlant"



export const ViewMyPlants = () => {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    getCurrentLoggedInUsersPlants().then((plantData) => setPlants(plantData))

  }, [])



  const deletePlantButton = (plantId) => {
    return <>
      <button className="button is-small is-danger is-light is-outlined"
        onClick={() => {
          if (window.confirm('Sorry for your loss')) {
            makeDeleteRequest(plantId)
          }
        }}
      >I killed my plant.
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  }

  const clonePlantButton = (plant) => {
    return <>
      <button className="button is-small is-success is-light is-outlined"
        onClick={() => { ClonePlant(plant) }}
      >Clone plant and make available.
      </button>
    </>
  }

  const makeDeleteRequest = (plantId) => {
    deletePlant(plantId).then(() => {
      window.location.reload(false)
    })
  }


  const renderListOfUserPlants = () => {
    return <>
      {
        plants.map(plant =>
          <section key={`plants--${plant.id}`} className="columns is-3 is-centered">
            <div className="card-content has-background-success">
              <div className="columns">
                <div className="media">
                  <div className="media-center">
                    <div className="box">
                      <div className="box">Expand plant details:
                        <Link className="level-item" to={`/plants/${plant.id}`}>
                          {plant.plant_name}.
                        </Link>
                      </div>
                      <div className="box">
                        <div>Create another copy of this plant:
                          <p className="box">
                            {clonePlantButton(plant)}
                          </p>
                        </div>
                      </div>
                      <div className="card ">
                        <div className="card-image">
                          <figure className="uploaded_image">
                            <img src={plant.plant_image} key={`plants--${plant.id}`} />
                          </figure>
                        </div>
                      </div>
                      <div className="box">
                        <div>Remove:
                          <p className="box">
                            {deletePlantButton(plant.id)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        )
      }
    </>
  }

  return <>
    <h1 className="title is-1 level-item">My Plants</h1>
    {
      (plants.length > 0)
        ? renderListOfUserPlants()
        : <h2> Add some plants to your collection.</h2>
    }
  </>
}
