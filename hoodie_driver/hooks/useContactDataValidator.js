'use client'
import { useState, useEffect } from "react"



const useContactDataValidator =(data, pattern)=>{
const [isDataValid, setIsDataValid]=useState(false);
const [isFocus, setIsFocus]=useState(false)

const dataValidator = () => {
    const isValid = pattern.test(data);
   setIsDataValid(isValid)
  };

  useEffect(()=> dataValidator(), [data,pattern])

  const handleFocus =()=> {
   setIsFocus(!isFocus)
    
  }

return [isDataValid, isFocus, handleFocus]
};

export default useContactDataValidator