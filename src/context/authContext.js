import {createContext} from 'react'

const authContext = createContext({
    loggedIn: false,
    logOut: () => {
        
    }
})

export default authContext