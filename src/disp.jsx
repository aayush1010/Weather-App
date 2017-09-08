import React from "react";
import {getCityName, addtodiv} from './script';


//import Script from "./script.js";

//console.log(Script);

export default class Disp extends React.Component{

    render(){
        return(
                <div>
                    <h1>Check Weather</h1>
                    <h3> Enter Your City</h3>
                    <input type="input" id = "city_name"></input>
                    <button onClick={getCityName}>Check</button>
                    <div id="cityConsole"></div>
                </div>
         )
    }
}