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


  return (<>
    <h1 className="title is-2 level-item">Create a new CareTip</h1>
    <section className="columns is-3 is-centered">
      <div className="columns">
        <div className="card-content has-background-success">
          <div className="columns">
            <div className="media">
              <div className="media-center">
                <div className="box">
                <form className="CareTipForm">


                  <div className="field">
                    <label className="label">New care tip name:</label>
                    <div className="control">
                      <input
                        className="input is-success"
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
                  <div className="field">
                    <label className="label">Description of care tip:</label>
                    <div className="control">
                      <input
                        className="input is-success"
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
                      className="button is-small is-success is-light is-outlined"
                    >
                      Add this new plant care tip
                    </button>
                  </div>
                </form>
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
