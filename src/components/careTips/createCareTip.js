import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addNewCareTip } from "../../managers/CareTipManager"



export const CreateCareTip = () => {
    const navigate = useNavigate()
    const [careTipToBeMade, setNewCareTipDetails] = useState({
        plant_tip_label: "",
        description_of_tip: ""
    })



    const changeCareTipState = (domEvent) => {
        const copy = { ...careTipToBeMade };
        copy[domEvent.target.id] = domEvent.target.value;
        setNewCareTipDetails(copy);
      }


    return (

        <form className="CareTipForm">
            <h1 class="title is-3">Create a new CareTip</h1>

            <div class="field">
              <label class="label">New care tip name:</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  id="plant_tip_label"
                  required
                  autoFocus
                  placeholder="Text input"
                  value={careTipToBeMade.plant_tip_label}
                  onChange={changeCareTipState}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description of care tip:</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  id="description_of_tip"
                  required
                  autoFocus
                  placeholder="Text input"
                  value={careTipToBeMade.description_of_tip}
                  onChange={changeCareTipState}
                />
              </div>
            </div>


            <div className="control">   
            <button
                  type="submit"
                  onClick={(evt) => {
                    evt.preventDefault()
                    const newCareTipToAPI = {
                        plant_tip_label: careTipToBeMade.plant_tip_label,
                        description_of_tip: careTipToBeMade.description_of_tip
                    }
                    addNewCareTip(newCareTipToAPI).then(navigate("/careTips"))
                  }}
                  className="btn btn-primary"
                >
                  Add this new plant care tip
                </button>
            </div>
        </form>
    )
}