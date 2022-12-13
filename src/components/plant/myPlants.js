import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deletePlant, getCurrentLoggedInUsersPlants } from "../../managers/PlantManager"



export const ViewMyPlants = () => {
  const navigate = useNavigate()
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

  const makeDeleteRequest = (plantId) => {
    deletePlant(plantId).then(() => {
      window.location.reload(false)})
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
                                <img src={plant.plant_image} className="uploaded_image" />
                                </div>
                                <div className="media-content">
                                  <div>
                                    <p className="title is-4"> {plant.user?.full_name}</p>
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
              : <> <h1 className="title">You have currently have No Plants.</h1>
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
