import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ViewAllCareTips } from "../components/careTips/allCareTips"
import { CreateCareTip } from "../components/careTips/createCareTip"
import { AllPlants } from "../components/plant/allPlants"
import { CreateNewPlant } from "../components/plant/createNewPlant"
import { EditCurrentPlant } from "../components/plant/editMyPlant"
import { ViewMyPlants } from "../components/plant/myPlants"
import { PlantDetails } from "../components/plant/plantDetails"
import { Authorized } from "./Authorized"


export const ApplicationViews = ({ token }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login  />} />
      <Route path="/register" element={<Register  />}  />
      <Route element={<Authorized />} />
      <Route path="/" element={<AllPlants />}/>
      <Route path="/myPlants" element={<ViewMyPlants  />}/>
      <Route path="/newPlant" element={<CreateNewPlant />}/>
      <Route path="/createCareTip" element={<CreateCareTip />}/>
      <Route path="/careTips" element={<ViewAllCareTips />}/>
      <Route path="/plants/:plantId" element={<PlantDetails />}/>
      <Route path="/plants/:plantId/edit" element={<EditCurrentPlant />}/>
    </Routes>
  </>
}
