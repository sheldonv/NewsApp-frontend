import {createContext, useState} from 'react'

const authContext = createContext({
    loggedIn: false,
    logOut: () => {

        },
    logIn: () => {
        console.log('reached')
    },
    firstVisit: false,
    userId: null
})

export default authContext