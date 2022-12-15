import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deletePlant, getCurrentLoggedInUsersPlants } from "../../managers/PlantManager"



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
  const clonePlantButton = (plantId) => {
    return <>
      <button className="button is-small is-info is-focused"
        onClick={() => {
          if (window.confirm('Clone your plant, and make it available for adoption?')) {
            makeDeleteRequest(plantId)
          }
        }}
      >Clone plant and make available.
        <i className="fa-solid fa-trash-can"></i>
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
            <div >
              <div className="level">
                <div className="columns level-item">
                  <div className="card column is-three-quarters">
                    <div className="card-image">
                    </div>
                    <div className="card-content">
                      <div className="columns">
                        <div className="column">
                          <div className="media">
                            <div className="media-left">
                              <img src={plant.plant_image} className="uploaded_image" key={`plants--${plant.id}`} />
                            </div>
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
                              {clonePlantButton(plant.id)}
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
