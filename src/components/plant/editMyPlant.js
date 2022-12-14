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
            for (const careTip of singlePlant.care_tips) {
                chosenCareTips.add(careTip.id)
            }
            for (const plantType of singlePlant.plant_types) {
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
        getAllCareTips().then((CareTipData) => setAllCareTips(CareTipData))
    }, [])

    useEffect(() => {
        getAllPlantTypes().then((plantTypeData) => setAllPlantTypes(plantTypeData))
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
        <section key={`plant--${plant.id}`} className="columns is-3 is-centered">
            <div className="card-content has-background-success">
                <div className="columns">
                    <div className="media">
                        <div className="media-center">


                            <div className="box">
                                <div className="field">
                                    <label className="label">Plant Age</label>
                                    <div className="control">
                                        <input
                                            className="input is-success"
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

                                <div className="field">
                                    <label className="label">plant name</label>
                                    <div className="">
                                        <input
                                            className="input is-success"
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

                                <div className="field">
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
                                    <label className="label">Check to add more plant care tips</label>
                                    <div className="control">
                                        <label className="checkbox">
                                            {allCareTips.map((careTip) => {
                                                return (
                                                    <div key={`careTip--${careTip.id}`}>
                                                        <label htmlFor="addTags" className="tagLabel">
                                                            {careTip.plant_tip_label}
                                                        </label>
                                                        <input
                                                            type="checkbox"
                                                            className="addTags"
                                                            value={false}
                                                            checked={chosenCareTips.has(careTip.id)}
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
                                                    </div>
                                                )
                                            })}
                                        </label>
                                    </div>
                                </div>

                                <div className="column level" >
                                    <span className="level-item">Click to remove care tip's associated with this plant: {previousCareTips.map(tip => {
                                        return (<div key={`careTip--${tip.id}`}>
                                            <button className="button is-small is-danger is-light is-outlined" onClick={() => deletePlantCareTip(tip.id).then(() => {
                                                window.location.reload(false)
                                            })}>Remove: {tip?.care_tip?.plant_tip_label}</button>
                                        </div>)
                                    })}</span>
                                </div>

                                <div className="field ">
                                    <label className="label">Check to add more plant types</label>
                                    <div className="control">
                                        <label className="checkbox">
                                            {allPlantTypes.map((plantType) => {
                                                return (
                                                    <div key={`plantType--${plantType.id}`}>
                                                        <label htmlFor="addTags" className="tagLabel">
                                                            {plantType.plant_type}
                                                        </label>
                                                        <input
                                                            type="checkbox"
                                                            className="addTags"
                                                            value={false}
                                                            checked={chosenPlantTypes.has(plantType.id)}
                                                            onChange={() => {
                                                                const copy = new Set(chosenPlantTypes)
                                                                if (copy.has(plantType.id)) {
                                                                    copy.delete(plantType.id)
                                                                } else {
                                                                    copy.add(plantType.id)
                                                                }
                                                                setChosenPlantTypes(copy)
                                                            }}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </label>
                                    </div>
                                </div>

                                <div className="column level">
                                    <span className="level-item">Click to remove plant type's associated with this plant: {previousPlantTypes.map((type) => {
                                        return (<div key={`plantTip--${type.id}`}>
                                            <button className="button is-small is-danger is-light is-outlined" onClick={() => {
                                                deletePlantType(type.id).then(() => {
                                                    window.location.reload(false)
                                                })
                                            }}>Remove: {type?.plant_type?.plant_type}</button>
                                        </div>)
                                    })}</span>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
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
                                            className="button is-small is-success is-light is-outlined"
                                        >
                                            update this plants deets.
                                        </button>
                                    </div>

                                    <div className="control">
                                        <button onClick={() => navigate("/myPlants")} className="button is-small is-danger is-light is-outlined">Cancel</button>
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
  