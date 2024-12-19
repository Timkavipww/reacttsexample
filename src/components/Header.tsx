import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const Header = () => {
    const {isLoggedIn,} = useContext(AuthContext);

    return <h1>{isLoggedIn ? "Privet, timur" : "to start auth"}</h1>
}