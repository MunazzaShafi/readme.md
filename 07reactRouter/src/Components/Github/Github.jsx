import React from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data =useLoaderData()
//     const [data,setData]=useState(0)
// useEffect(()=>{
//     fetch('https://api.github.com/users/munazzashafi')
//     .then(Response =>Response.json()
// .then(data=>{
//     console.log(data);
//     setData(data)
   
// })
// )
// },[])

   return(
    <>
    <div className="text-center m-4bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img className=" mx-auto flex justify-center items-center" src={data.avatar_url} alt="Github Image" width={300}/>
        </div>
    </>
   )
}

export default Github;

export const  githubInfoLoader =async()=>{
   const response=  await fetch('https://api.github.com/users/munazzashafi')

   return response.json()
}