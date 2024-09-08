import React, { useState } from 'react'
import starIcon from '../assets/Star.png'
const numbers = [1,2,3,4,5]

export default function Rate({setSubmit, setRate, rate}) {
    
  return (
    <div class="bg-cyan-950 w-96 h-96 mx-auto mt-[200px] " >
        <div class="bg-[#262e38]  max-w-max" >
            <img class="w-5  mt-8 " src={starIcon} alt="" />
        </div>
        <div>
            <h1 class="text-3xl text-white mt-8 ml-8" >How did we do?</h1>
        </div>
        <div>
            <p class=" ml-8 w-80 text-sm text-slate-1000  mt-4  	 " >Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div>
            {numbers.map((number)=> <button class={`w-12 text-white ${rate === number ? 'bg-orange-600' : 'bg-[#262e38]'} mt-10 ml-6 rounded-3xl h-10 `}  key={number} onClick={()=>setRate(number)} >{number}</button> )}
        </div>
        <div class="bg-orange-600  max-w-max mt-7 mx-[24px] rounded-3xl	h-10" >
            <button class="text-white text-lg w-96   " onClick={()=> rate &&  setSubmit(true)} >SUBMIT</button>
        </div>
      
    </div>
  )
}
