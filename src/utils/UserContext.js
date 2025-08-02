import { createContext } from "react";

const UserContext = createContext({
    userName: "default",
    location: "default"
})

export default UserContext;