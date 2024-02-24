import React,{useContext} from 'react'
import { AplContext } from '../context/contextContainer'

function Btn() {

  const {toggletheme,theme} = useContext(AplContext)
  // console.log(toggletheme)

  return (
    <div>
      <button onClick={toggletheme}>{theme === 'light'? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
    </div>
  )
}

export default Btn
