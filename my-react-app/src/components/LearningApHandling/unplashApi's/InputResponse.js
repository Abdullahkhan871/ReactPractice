import axios from "axios";
import React, { useEffect, useState } from "react";

const InputResponse = ({getData}) => {

  const [searchItem, setSearchItem] = useState([]);

  useEffect(()=>{

    if(getData){
      handleApiImage()
    }

  },[getData])



  async function handleApiImage() {
    try{
        let response = await axios("https://api.unsplash.com/search/photos", {
            headers: {
                "Accept-Version": "v1",
                "Authorization": "Client-ID r0TFtfvwCH7py6UC9ScxSEi6r6s-UOnnZyabaRupN9I",
            },
            params: {
                query:  getData.length > 0 || "human",
            },
          });

        setSearchItem(response.data.results)
    }
      catch{
        console.log('error')
    }
  }




  return (
    <div className="imgBox">
      {
        searchItem.map(item => (

          <div className="box" key={item.id}>
          
              <p>{item.slug}</p>
              <img src={item.urls.small} alt={item.alt_description} />
              
          </div>
        ))
      }
    </div>
  );
};

export default InputResponse;
