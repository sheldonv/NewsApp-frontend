import { createContext } from 'react'

const ColorModeContext = createContext({ 
    toggleColorMode: () => {},
    color: 'dark',
    getColor: () => {
        
    }
});

export default ColorModeContext;
