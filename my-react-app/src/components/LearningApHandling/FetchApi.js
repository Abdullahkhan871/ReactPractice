import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [api, setApi] = useState([]);

  function handleApi() {
    fetch("https://reqr=bnes.in/api/users?")
      .then((eve) => eve.json())
      .then((eve) => updateApi(eve.data))
      .catch((err) => console.log("error", err));
  }

  function updateApi(eve) {
    setApi(eve);
  }

  useEffect(() => {
    handleApi();
  }, [api]);

  return (
    <>
      {api.map((api) => (
        <div key={api.id}>
          <p>{api.id}</p>
          <img src={api.avatar} alt={api.id} />
          <p>{api.email}</p>
          <p>
            {api.first_name} {api.last_name}
          </p>
        </div>
      ))}
    </>
  );
};

export default FetchApi;

// API IN React == > XML -- JSON
// Fatch and Axios
