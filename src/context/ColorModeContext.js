import React from 'react'
import { createContext } from 'react'

const ColorModeContext = createContext({ 
    toggleColorMode: () => {},
    color: 'dark'
});

export default ColorModeContext;
