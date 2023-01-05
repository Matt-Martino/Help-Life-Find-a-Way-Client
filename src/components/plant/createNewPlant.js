import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCareTips } from "../../managers/CareTipManager"
import { addNewPlantCareTips } from "../../managers/PlantCareTipManager"
import { addNewPlant } from "../../managers/PlantManager"
import { getAllPlantTypes } from "../../managers/PlantTypeManager"
import { addNewUserPlantPlantTypes } from "../../managers/UserPlantPlantTypeManager"
import Axios from "axios"


export const CreateNewPlant = () => {
  const navigate = useNavigate()
  let newPlantData = ""
  const [allCareTips, setAllCareTips] = useState([])
  const [allPlantTypes, setAllPlantTypes] = useState([])
  const [selectedImage, setImage] = useState()
  const [savedImage, setSavedImage] = useState("")
  const [plant, setNewPlantDetails] = useState({
    new_plant_care: "",
    plant_age: "",
    plant_name: "",
    plant_image: ""
  })
  const [chosenCareTips, setChosenCareTips] = useState(new Set())
  const [chosenPlantTypes, setChosenPlantTypes] = useState(new Set())

  useEffect(() => {
    getAllCareTips().then((CareTipData) => setAllCareTips(CareTipData))
  }, [])

  useEffect(() => {
    getAllPlantTypes().then((plantTypeData) => setAllPlantTypes(plantTypeData))
  }, [])


  const changePlantState = (domEvent) => {
    const copy = { ...plant }
    copy[domEvent.target.id] = domEvent.target.value
    setNewPlantDetails(copy)
  }

  const careTipsPerPlant = (parsedResponse) => {
    chosenCareTips.forEach((careTip) => {
      const CareTipToAPI = {
        plant: parsedResponse.id,
        care_tip: careTip,
      }
      addNewPlantCareTips(CareTipToAPI)
    })
  }

  const plantTypesPerPlant = (parsedResponse) => {
    chosenPlantTypes.forEach((plantType) => {
      const PlantTypeToAPI = {
        plant: parsedResponse.id,
        plant_type: plantType,
      }
      addNewUserPlantPlantTypes(PlantTypeToAPI)
    })
  }

  const saveImageClick = (event) => {
    event.preventDefault()

    uploadImage()
      .then((response) => { setSavedImage(response.data.url) })
  }

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", selectedImage)
    formData.append("upload_preset", "shgfdsfhd")

    return Axios.post("https://api.cloudinary.com/v1_1/dm0vsswx2/image/upload", formData)
  }



  return (<>
    <h1 className="title is-2 level-item">Create a new plant below!</h1>
    <section className="columns is-3 is-centered">
      <div className="columns">
        <div className="card-content has-background-success">
          <div className="columns">
            <div className="media">
              <div className="media-center">
                <div className="box">
                  <div className="container">
                    <div className="field">
                      <label className="label">Plant Age</label>
                      <div className="control">
                        <input
                          className="input is-success"
                          type="text"
                          id="plant_age"
                          required
                          autoFocus
                          placeholder="What is your plant's age? Seedling, clipping, yearling, bonsai grandpa age?"
                          value={plant.plant_age}
                          onChange={changePlantState}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">plant name</label>
                      <div className="">
                        <input
                          className="input is-success"
                          type="text"
                          id="plant_name"
                          required
                          autoFocus
                          placeholder="Please enter the name of the plant you are adding to your collection."
                          value={plant.plant_name}
                          onChange={changePlantState}
                        />
                      </div>
                      <div>
                        <input className="btn btn-primary"
                          type="file"
                          onChange={(event) => {
                            setImage(event.target.files[0])
                          }}

                        >
                        </input>
                      </div>
                      <div>
                        <button className="btn btn-primary" onClick={(clickEvent) => { saveImageClick(clickEvent) }}
                        >Upload Image</button>
                      </div>
                    </div>
                    <div className="">
                      <label className="label">New Plant Care</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          id="new_plant_care"
                          required
                          autoFocus
                          placeholder="Textarea"
                          value={plant.new_plant_care}
                          onChange={changePlantState}
                        ></textarea>
                      </div>
                    </div>
                    <div className="field ">
                      <label className="label">Please select all Plant care tip's that apply.</label>
                      <div>
                        <label>
                          {allCareTips.map((careTip) => {
                            return (
                              <div key={`careTip--${careTip.id}`}>
                                <label htmlFor="addTags" className="tagLabel">
                                  {careTip.plant_tip_label}
                                </label>
                                <input
                                  type="checkbox"
                                  className="py-6"
                                  value={false}
                                  onChange={(evt) => {
                                    const copy = new Set(chosenCareTips);
                                    if (copy.has(careTip.id)) {
                                      copy.delete(careTip.id)
                                    } else {
                                      copy.add(careTip.id)
                                    }
                                    setChosenCareTips(copy)
                                  }}
                                />
                              </div>
                            )
                          })}
                        </label>
                      </div>
                    </div><div className="field ">
                      <label className="label">Please select any Plant type's that apply.</label>
                      <div>
                        <label>
                          {allPlantTypes.map((plantType) => {
                            return (
                              <div key={`plantType--${plantType.id}`}>
                                <label htmlFor="addTags" className="tagLabel">
                                  {plantType.plant_type}
                                </label>
                                <input
                                  type="checkbox"
                                  className="py-6"
                                  value={false}
                                  onChange={(evt) => {
                                    const copy = new Set(chosenPlantTypes);
                                    if (copy.has(plantType.id)) {
                                      copy.delete(plantType.id)
                                    } else {
                                      copy.add(plantType.id)
                                    }
                                    setChosenPlantTypes(copy)
                                  }}
                                />
                              </div>
                            );
                          })}
                        </label>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button
                          type="submit"
                          onClick={(evt) => {
                            evt.preventDefault()
                            const newPlant = {
                              available: false,
                              plant_age: plant.plant_age,
                              plant_name: plant.plant_name,
                              plant_image: savedImage,
                              new_plant_care: plant.new_plant_care
                            }
                            addNewPlant(newPlant).then(parsedResponse => { newPlantData = parsedResponse }).then(() => { careTipsPerPlant(newPlantData) }).then(() => { plantTypesPerPlant(newPlantData) }).then(navigate("/myPlants"))
                          }}
                          className="button is-small is-success is-light is-outlined"
                        >
                          Add this new plant to your collection!
                        </button>
                      </div>
                      <div className="control">
                        <button className="button is-link is-light">Cancel</button>
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
    </>
  )
}
