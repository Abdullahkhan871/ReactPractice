import React, { useEffect, useState } from 'react'
import InputResponse from './InputResponse'
import UserInput from './UserInput'

const ImageFetch = () => {
  const [getData, setGetData] = useState([])

  return (
    <div className="unplash-searching">
        <UserInput setGetData={setGetData}/>
        <InputResponse getData={getData}/>
    </div>
  )
}

export default ImageFetch