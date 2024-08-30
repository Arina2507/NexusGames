import { useContext } from "react";
import { userContext } from "../../../context/userContext"

export default function Dashboard() {
    const {user} = useContext(userContext)
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}

