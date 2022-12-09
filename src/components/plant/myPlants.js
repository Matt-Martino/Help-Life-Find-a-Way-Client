import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deletePlant, getPlantsByUserId } from "../../managers/PlantManager"



export const ViewMyPlants = ({ token }) => {
  const [plants, setPlants] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getPlantsByUserId().then((plantData) => setPlants(plantData))

  }, [])



  const deletePlantButton = (plantId) => {
    return <>
      <button className="button is-small is-danger is-focused"
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this plant?')) {
            makeDeleteRequest(plantId)
          }
        }}
      >I killed my plant.
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  }

  const makeDeleteRequest = (plantId) => {
    deletePlant(plantId).then(() => {
      getPlantsByUserId(token)
    })
  }


  const renderListOfUserPlants = () => {
    return (
      <>
        <h1 className="title is-1 level-item">My Plants</h1>
        {
          plants.map(plant =>
            plants.length > 0
              ? <>
                <div key={`plant--${plant.id}`}>
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

                                </div>
                                <div className="media-content">
                                  <div>
                                    <p className="title is-4">{plant.user?.full_name}</p>
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </>
              : <> <h1 className="title">You have currently have No Plants bitch.</h1>
              </>
          )
        }
      </>
    )
  }

  return <>
    {renderListOfUserPlants()}
  </>
}
