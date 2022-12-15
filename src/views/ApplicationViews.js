import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ViewAllCareTips } from "../components/careTips/allCareTips"
import { CreateCareTip } from "../components/careTips/createCareTip"
import { AllPlants } from "../components/plant/allPlants"
import { AvailablePlants } from "../components/plant/availablePlants"
import { CreateNewPlant } from "../components/plant/createNewPlant"
import { EditCurrentPlant } from "../components/plant/editMyPlant"
import { ViewMyPlants } from "../components/plant/myPlants"
import { PlantDetails } from "../components/plant/plantDetails"
import { ViewAllUsers } from "../components/user/allUsers"
import { ViewSpecificUsersPlants } from "../components/user/viewUsersPlants"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
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
      <Route path="/users" element={<ViewAllUsers />}/>
      <Route path="/plants/user/:userId" element={<ViewSpecificUsersPlants />}/>
      <Route path="/available" element={<AvailablePlants />} />
    </Routes>
  </>
}
