import React from 'react'
import Content from './component/Content'
import Btn from './component/Btn'
import Themeprovider from "./context/contextContainer"

function App() {
  
  return (
    <>
    <Themeprovider>
      
      <Content/>
      <Btn/>
    
    </Themeprovider>
    </>
  )
}

export default App

