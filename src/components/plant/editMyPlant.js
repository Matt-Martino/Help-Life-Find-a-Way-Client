import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllCareTips } from "../../managers/CareTipManager"
import { addNewPlantCareTips, deletePlantCareTip, getCareTipsForSpecificPlant } from "../../managers/PlantCareTipManager"
import { getSinglePlant, UpdatePlantInfo } from "../../managers/PlantManager"
import { addNewUserPlantPlantTypes, deletePlantType, getPlantTypesForSpecificPlant } from "../../managers/UserPlantPlantTypeManager"
import { getAllPlantTypes } from "../../managers/PlantTypeManager"



export const EditCurrentPlant = () => {
    const { plantId } = useParams()
    const navigate = useNavigate()
    const [plant, setThePlant] = useState({
        id: "",
        available: false,
        new_plant_care: "",
        plant_age: "",
        plant_name: "",
        plant_image: "",
        care_tips: [],
        plant_types: []

    })
    const [allCareTips, setAllCareTips] = useState([])
    const [allPlantTypes, setAllPlantTypes] = useState([])
    const [previousCareTips, setPreviousCareTips] = useState([])
    const [previousPlantTypes, setPreviousPlantTypes] = useState([])
    const [chosenCareTips, setChosenCareTips] = useState(new Set())
    const [chosenPlantTypes, setChosenPlantTypes] = useState(new Set())

    useEffect(() => {
        getSinglePlant(plantId).then((singlePlant) => {
            setThePlant(singlePlant)
            for (const careTip of singlePlant.care_tips){
                chosenCareTips.add(careTip.id)
            }
            for (const plantType of singlePlant.plant_types){
                chosenPlantTypes.add(plantType.id)
            }
        })
    }, [plantId])


    useEffect(() => {
        getCareTipsForSpecificPlant(plantId).then((data) => setPreviousCareTips(data))
    }, [plantId])

    useEffect(() => {
        getPlantTypesForSpecificPlant(plantId).then((data) => setPreviousPlantTypes(data))
    }, [plantId])


    useEffect(() => {
        getAllCareTips().then((CareTipData) => setAllCareTips(CareTipData));
    }, [])

    useEffect(() => {
        getAllPlantTypes().then((plantTypeData) => setAllPlantTypes(plantTypeData));
    }, [])

    const changePlantState = (domEvent) => {
        const copy = { ...plant }
        copy[domEvent.target.id] = domEvent.target.value
        setThePlant(copy)
    }

    const POSTcareTipsPerPlant = (plantId) => {
        chosenCareTips.forEach((careTip) => {
            const CareTipToAPI = {
                plant: plantId,
                care_tip: careTip,
            }
            addNewPlantCareTips(CareTipToAPI)
        })
    }

    const POSTplantTypesPerPlant = (plantId) => {
        chosenPlantTypes.forEach((plantType) => {
            const PlantTypeToAPI = {
                plant: plantId,
                plant_type: plantType,
            }
            addNewUserPlantPlantTypes(PlantTypeToAPI)
        })
    }


    return (
        <>
            <section>
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
                        <label class="label">Add more plant care tips</label>
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
                                                checked={chosenCareTips.has(careTip.id)}
                                                defaultChecked={plant.care_tips.find(tip => tip.id === careTip.id) ? true : false}
                                                onChange={() => {
                                                    const copy = new Set(chosenCareTips)
                                                    if (copy.has(careTip.id)) {
                                                        copy.delete(careTip.id)
                                                    } else {
                                                        copy.add(careTip.id)
                                                    }
                                                    setChosenCareTips(copy)
                                                }}
                                            />
                                        </>
                                    );
                                })}
                            </label>
                        </div>
                    </div>
                    <div className="column level">
                        <span className="level-item">Current plant care tips attached to this plant.  Click to remove tips.: {previousCareTips.map(tip => {
                            return <button onClick={() => deletePlantCareTip(tip.id).then(() => {
                                window.location.reload(false)
                            })}>Tip: {tip?.care_tip?.plant_tip_label}</button>
                        })}</span>
                    </div>
                    <div class="field ">
                        <label class="label">Add more plant types</label>
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
                                                checked={chosenPlantTypes.has(plantType.id)}
                                                defaultChecked={plant.plant_types.find(type => type.id === plantType.id) ? true : false}
                                                onChange={() => {
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
                    <div className="column level">
                        <span className="level-item">Current plant types attached to this plant.  Click to remove types.:{previousPlantTypes.map((type) => {
                            return <button onClick={() => {
                                deletePlantType(type.id).then(() => {
                                    window.location.reload(false)
                                })
                            }}>Type: {type?.plant_type?.plant_type}</button>
                        })}</span>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button
                                type="submit"
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    const updatedPlant = {
                                        id: plant.id,
                                        available: false,
                                        plant_age: plant.plant_age,
                                        plant_name: plant.plant_name,
                                        plant_image: plant.plant_image,
                                        new_plant_care: plant.new_plant_care
                                    }
                                    { UpdatePlantInfo(updatedPlant) }
                                    { POSTcareTipsPerPlant(plantId) }
                                    { POSTplantTypesPerPlant(plantId) }
                                    { navigate("/myPlants") }
                                }}
                                className="btn btn-primary"
                            >
                                update this plants deets.
                            </button>
                        </div>
                        <div class="control">
                            <button onClick={() => navigate("/myPlants")} class="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}