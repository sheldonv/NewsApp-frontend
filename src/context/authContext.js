import {createContext} from 'react'

const authContext = createContext({
    loggedIn: null,
    logOut: () => {

        },
    logIn: () => {
    
    },
    firstVisit: false,
    userId: null,
    user: {}
})

export default authContext