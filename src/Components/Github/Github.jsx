import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx'

  

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
    <div className="text-center m-6 bg-gray-700 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-4">My GitHub Profile</h2>
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        width={120}
        className="mx-auto rounded-full mb-4"
      />
      <p className="text-xl font-bold">{data.name}</p>
      <p className="text-gray-300">{data.bio}</p>
      <p className="mt-2">Followers: {data.followers}</p>
      <p>Public Repos: {data.public_repos}</p>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Visit GitHub
      </a>
    </div>
  
  )
  
}catch (error) { 
    return <Loader/>
  }
}
export default Github



