import React, { useState } from 'react'

export default function SimpleCounter() {
    const [plus, setPlus] = useState(0)
    
  return (
    <div>
     <p className="numbers">
        click {plus} times
     </p>
     <button onClick={ ()=> setPlus(plus + 1) } >click +1 </button>
     <button onClick={()=> setPlus(plus - 1)} >click -1 </button>
    </div>
  )
}
