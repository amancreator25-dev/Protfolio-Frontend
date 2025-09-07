import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Loader from '../Loader/Loader'

  

function Linkdin() {
      try {
     const [data, setData] = useState([])
     useEffect(() => {
      fetch('www.linkedin.com/in/aman-kumar-singh-901216321')
      .then(response => response.json())
      .then((response) => {
         setData(response)
      })
     }, [])

  return (
    <Loader/>
  )
  
}catch (error) { 
    return <Loader/>
  }
}
export default Linkdin
