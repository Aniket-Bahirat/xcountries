import { useEffect, useState } from "react"


const CountryCard=({name,flag,alttext})=>{
    return(
        <div  style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              gap:"4px",
              border:"1px solid black",
              borderRadius:"8px",
              height:"200px",
              width:"200px",
              margin:"10px",
              padding:"10px",
              textAlign:"center",
         }}
        >
           
            <img src={flag} alt={alttext} style={{
                width:"100px",
                height:"100px",
            }}/>
            <h2>{name}</h2>
        </div>
    )
}

const API_URL="https://xcountries-backend.azurewebsites.net/all"

function Countries(){
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{

            try{
                const response=await fetch(API_URL)
                const jsonResponse=await response.json();
                setCountries(jsonResponse)
            }
            catch(error){
                console.error("Error fetching data: ",error)

            }
        
        }
        fetchData();
    },[]);

    /*

    // with functional /promise chaining

      useEffect(()=>{

        fetch(API_URL).then(res=>res.json()).then(data=>setCountries(data)).catch(error=>console.error("Error fetching data: ",error))
       },[]);
    */


  
    return(
    <div style={{
        display:"flex",
        flexWrap:"wrap",


    }}>{
        countries.map(country=>
            <CountryCard 
            kay={country.abbr} 
            name={country.name} 
            flag={country.flag} 
            alttext={country.abbr}/>)
       }</div>
    
    )
}

export default Countries;