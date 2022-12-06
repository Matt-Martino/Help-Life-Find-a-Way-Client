import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { useEffect, useState } from "react"
import { getAllUsers } from "./managers/UserManager"


export const HelpLife = () => {
  const [token, setTokenState] = useState(localStorage.getItem('help_token'))
  const [users, setUserState] = useState([])
  
  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  useEffect(() => {
    if (token) {
      getAllUsers().then((usersFromAPI) => {
        setUserState(usersFromAPI)
      })
    }
}, [])

  const loggedInUser = users.find(user => user.tokenNumber === token)
  return <>
    <NavBar token={token} setToken={setToken}/>
    <ApplicationViews token={token} setToken={setToken} loggedInUser={loggedInUser}/>
  </>
}