import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Image from '../images/GoogleLogo.png';
import './input.css';

const input = ({input,setInput,findWeather}) => {

    const handleChange =(event) =>{
        setInput(event.target.value)

    };
    console.log(input);
    const handleClick = (event)=>{
        event.preventDefault();
        findWeather()
    }

    return (
        <div className="inputBox">
            <div className="inputBox__field">
                <h1>Google Weather App</h1>
                <p>powered by</p>
                <img src={Image}
                alt="logo"></img>
                <form>
                <Input placeholder="enter city" onChange={handleChange} value={input}/>
                <br/>
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                Search
                </Button>
                </form>
            </div>
            
        </div>
    );
};

export default input;
