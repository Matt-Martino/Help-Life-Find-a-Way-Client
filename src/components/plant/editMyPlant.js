import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deletePlantCareTip, getAllCareTips, getCareTipsForSpecificPlant } from "../../managers/CareTipManager"
import { getSinglePlant, UpdatePlantInfo } from "../../managers/PlantManager"
import { getAllPlantTypes } from "../../managers/PlantTypeManager"




export const EditCurrentPlant = () => {
    const { plantId } = useParams()
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
        })
    }, [plantId])


    useEffect(() => {
        getCareTipsForSpecificPlant(plantId).then((data) => setPreviousCareTips(data))
    }, [plant])
    useEffect(() => {
        setPreviousPlantTypes(plant.plant_types)
    }, [plant])


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


    return (
        <>
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
                    <label class="label">plant image **make so you can upload an image**</label>
                    <div class="">
                        <input
                            class="input is-success"
                            type="text"
                            id="plant_image"
                            required
                            autoFocus
                            placeholder="Text input"
                            value={plant.plant_image}
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

{/*                       // FRIDAY NIGHT NOTES!

                                                This works!

                                                But...
                                                I need test more.
                                                Need to make one similar for the plant types.
                                                THis will give the users some options to remove stuff that is listed while
                                                still adding to it with the checkboxes

                                                TODO!!!

                                                Need to do a check so they can't add the same tip / plant type to the
                                                database if it exists 

  */}


                <div className="column level">
                    <span className="level-item">Current plant care tips:{previousCareTips.map(tip => {
                        return  <button onClick={() => {deletePlantCareTip(tip.id)}}>Tip: {tip?.care_tip?.plant_tip_label}</button>                        
                    })}</span>
                </div>




                {/* <div className="column level">
                    <span className="level-item">Current plant care tips:{plant?.plant_type?.map((type) => {
                        return <div> Tip: {type.plant_type}</div>
                    })}</span>
                </div> */}

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
                            }}
                            className="btn btn-primary"
                        >
                            update this plants deets.
                        </button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}