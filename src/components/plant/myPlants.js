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
      <button className="button is-small is-danger is-focused"
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
      <button className="button is-small is-info is-focused"
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
          <section key={`plants--${plant.id}`}>
            <div className="is-outlined">
              <div className="level">
                <div className="columns level-item">
                  <div className="card column is-three-quarters">
                    <div className="card-content">
                      <div className="columns">
                        <div className="column">
                          <div className="media">
                            <figure className="media-left">
                              <img src={plant.plant_image} className="uploaded_image" key={`plants--${plant.id}`} />
                            </figure>
                            <div className="media-content">
                              <div>
                                <p key={`plants--${plant.id}`} className="title is-4"> {plant.user?.full_name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div className="content">
                            <div className="title is-3">
                              <Link to={`/plants/${plant.id}`}>
                                {plant.plant_name}.
                              </Link>
                              {clonePlantButton(plant)}
                              {deletePlantButton(plant.id)}
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
