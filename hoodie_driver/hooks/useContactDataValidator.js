'use client'
import { useState, useEffect } from "react"



const useContactDataValidator =(data, pattern)=>{
const [isDataValid, setIsDataValid]=useState(false);

const dataValidator = () => {
    const isValid = pattern.test(data);
   setIsDataValid(isValid)
  };

  useEffect(()=> dataValidator(), [data,pattern])

return isDataValid
};

export default useContactDataValidator