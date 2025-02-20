import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Aman-Puskar')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
    }, [] ) 
  return (
    <div className='text-center m-4 bg-gray-300 text-black'>GitHub followers: {data.followers}
    <img src={data.avatar_url} alt="Git Image" />
    </div>
  )
}

export default GitHub;