import { useEffect, useState } from "react"
import  './index.css' 
function App() {
  const[inputvalue,setinputvalue]=useState('');
  const[data,setdata]=useState({cod:404})
  const [value,setvalue]=useState("");
  var api=import.meta.env.REACT_APP_API_KEY;
async function fetchdata()
{
  
  try{
    let resp=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=${api}`)
  
    const result=await resp.json();
     setdata(result);
     
}
  catch(error)
  {
          console.log('hy',error);
  }
  setinputvalue("");
  setvalue("please enter correct city")
  
  
}
  return (
    <>
    <h1>Weather App</h1>
    <div id="inputval">
      <input type="text" title="cityname"placeholder="enter city name" value={inputvalue}required onChange={(e)=>setinputvalue(e.target.value)}/>
      
      <button onClick={fetchdata}>submit</button>
    </div>
    
      
      {
        
        (data.cod!=404)?(
        <div id="result">
          
          <h4>Pressure: {data.main.pressure} hPa</h4>
          <h4>Temprature: {data.main.temp} &#x2103;</h4>
          <h4>Humidity: {data.main.humidity}%</h4>
          <h4>Country: {data.sys.country}</h4>
          <h4>Wind: {data.wind.speed} m/s</h4>
          <h4>feels_like: {data.main.feels_like} &#x2103;</h4>




        </div>):(<h3>{value}</h3>)
      }
     
          
      
       
</>
  )
}

export default App
