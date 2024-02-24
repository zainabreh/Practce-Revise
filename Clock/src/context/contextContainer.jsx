import React,{createContext,useState} from 'react'

export const AplContext = createContext();


const Themeprovider= ({children})=>{

    const [theme,setTheme] = useState('dark');

    function toggletheme(){

        setTheme((pretheme) => (pretheme === 'light'? 'dark' : 'light'))
    }

        return(
            <AplContext.Provider value={{toggletheme,theme}}>
                {children}
            </AplContext.Provider>
        )
        }

    export default Themeprovider