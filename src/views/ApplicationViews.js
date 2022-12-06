import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { AllPlants } from "../components/plant/allPlants"
import { ViewMyPlants } from "../components/plant/myPlants"
import { Authorized } from "./Authorized"


export const ApplicationViews = ({ token }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login  />} />
      <Route path="/register" element={<Register  />}  />
      <Route element={<Authorized token={token}/>} />
      <Route path="/" element={<AllPlants token={token} />}/>
      <Route path="/myPlants" element={<ViewMyPlants token={token} />}/>
    </Routes>
  </>
}