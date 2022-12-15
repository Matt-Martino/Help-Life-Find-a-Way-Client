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
    getAllCareTips().then((CareTipData) => setAllCareTips(CareTipData));
  }, [])

  useEffect(() => {
    getAllPlantTypes().then((plantTypeData) => setAllPlantTypes(plantTypeData));
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



  return (
    <section>
      <div className="columns">
        <div className="column level">
          <div className="container">
            <div class="field">
              <label class="label">Plant Age</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  id="plant_age"
                  required
                  autoFocus
                  placeholder="Text input"
                  value={plant.plant_age}
                  onChange={changePlantState}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">plant name</label>
              <div class="">
                <input
                  class="input is-success"
                  type="text"
                  id="plant_name"
                  required
                  autoFocus
                  placeholder="Text input"
                  value={plant.plant_name}
                  onChange={changePlantState}
                />
              </div>
              <div>
                <input className="btn btn-primary"
                  type="file"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}

                >
                </input>
              </div>
              <div>
                <button className="btn btn-primary" onClick={(clickEvent) => { saveImageClick(clickEvent) }}
                >Upload Image</button>
              </div>
            </div>
            <div class="field">
              <label class="label">New Plant Care</label>
              <div class="control">
                <textarea
                  class="textarea"
                  id="new_plant_care"
                  required
                  autoFocus
                  placeholder="Textarea"
                  value={plant.new_plant_care}
                  onChange={changePlantState}
                ></textarea>
              </div>
            </div>
            <div class="field ">
              <label class="label">Plant care tip</label>
              <div class="control">
                <label class="checkbox">
                  {allCareTips.map((careTip) => {
                    return (
                      <>
                        <label htmlFor="addTags" className="tagLabel">
                          {careTip.plant_tip_label}
                        </label>
                        <input
                          type="checkbox"
                          className="addTags"
                          value={false}
                          onChange={(evt) => {
                            const copy = new Set(chosenCareTips);
                            if (copy.has(careTip.id)) {
                              copy.delete(careTip.id);
                            } else {
                              copy.add(careTip.id);
                            }
                            setChosenCareTips(copy);
                          }}
                        />
                      </>
                    );
                  })}
                </label>
              </div>
            </div><div class="field ">
              <label class="label">Plant type</label>
              <div class="control">
                <label class="checkbox">
                  {allPlantTypes.map((plantType) => {
                    return (
                      <>
                        <label htmlFor="addTags" className="tagLabel">
                          {plantType.plant_type}
                        </label>
                        <input
                          type="checkbox"
                          className="addTags"
                          value={false}
                          onChange={(evt) => {
                            const copy = new Set(chosenPlantTypes);
                            if (copy.has(plantType.id)) {
                              copy.delete(plantType.id);
                            } else {
                              copy.add(plantType.id);
                            }
                            setChosenPlantTypes(copy);
                          }}
                        />
                      </>
                    );
                  })}
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
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
                  className="btn btn-primary"
                >
                  Add this new plant to your collection!
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
