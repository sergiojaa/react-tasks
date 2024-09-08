
// import DynamicGreeting from './components/FavoriteColorPicker'
// import SimpleCounter from './components/SimpleCounter'
// import ToDoList from './components/ToDoList'
// import ToggleVisibilty from './components/ToggleVisibilty'

import Rate from "./components/Rate"
import Result from "./components/Result"
import { useState } from "react"
function App() {
  const [submit, setSubmit] = useState(false)
  const [rate, setRate] = useState()


  return(
    <div  >
      { submit 
      ?       
      <Result rate={rate} /> 
      : 
      <Rate
       rate={rate} 
       setRate={setRate} 
       setSubmit={setSubmit} />}
    </div>


  )
      

 

}

export default App
