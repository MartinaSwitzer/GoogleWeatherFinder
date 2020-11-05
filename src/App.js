import React,{useState} from 'react';
import './App.css';
import Input from './components/input';
import axios from "axios";
import Result from "./components/Result";

function App() {
  const [input,setInput] = useState("");
  const [temp,setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async ()=>{
    const apiKey ="";//enter your API key from openweathermap.org
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q=" +input +"&appid=" +apiKey +"&units" +unit;
    const response= await axios.get(url);
    console.log(response);
    const temp = response.data.main.temp;
    const weatherDescription=response.data.weather[0].description;
    const icon = response.data.weather[0].icon;
    const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(temp,weatherDescription,imageURL);
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imageURL);
    setInput("");
  }

  return (
    <div className="app">
      {temp === "" ? (
      <Input input={input} setInput={setInput} findWeather={findWeather} /> 
      ) : (
      <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
      ) }
    </div>
  );
}

export default App;
