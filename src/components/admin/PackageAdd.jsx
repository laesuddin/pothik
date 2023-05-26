import React, { useEffect, useState } from "react";
import { useAddPackageMutation } from "../../feature/package/packageApi";
import { useNavigate } from "react-router";

function PackageAdd() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [route, setRoute] = useState("");
  const [duration, setDuration] = useState("");
  const [responseError,setResponseError] =useState("")
  const[addPackage,{data,isLoading,error}]=useAddPackageMutation()
  const navigate=useNavigate();

  useEffect(() => {

    if(error?.data){
      setResponseError(error.data)
    }
    if(data?.user && data.accessToken){
      navigate("/")
    }

  }, [data,navigate,setResponseError,error ]);

  const reset =()=>{
    setName("")
    setDescription("")
    setThumbnail("")
    setPrice("")
    setRoute("")
    setDuration("")
  }


 

  const handlePost =(e) =>{
    e.preventDefault()

  
    const data ={
      name,
      description,
      thumbnail,
      price,
      route,
      duration
    }
    addPackage(data)
    reset()
  }


  return (
    <div>
      <h1>ADD Package</h1>
      <form onSubmit={handlePost}>
        <input type="text" required placeholder="Package Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" required placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <br />
        <input type="text" required placeholder="Thumbnail Link"value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
        <br />
        <input type="number" required placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <br />
        <input type="text" required placeholder="Route"value={route} onChange={(e) => setRoute(e.target.value)} />
        <br />
        <input type="date" required placeholder="Duration"value={duration} onChange={(e) => setDuration(e.target.value)} />
        <br />
        <button type="submit" disabled={isLoading}>Post</button>
      </form>
      <div>{responseError}</div>
    </div>
  );
}

export default PackageAdd;
