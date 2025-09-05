import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Loader from '../Loader/Loader'

  

function Github() {
      try {
     const [data, setData] = useState([])
     useEffect(() => {
      fetch('https://api.github.com/users/amancreator25-dev')
      .then(response => response.json())
      .then((response) => {
         setData(response)
      })
     }, [])

  return (
    <div className='text-center m-4 my-50 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}  />
    </div>
  )
  
}catch (error) { 
    return <Loader/>
  }
}
export default Github



