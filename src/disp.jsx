import React from "react";
import {getCityName, addtodiv} from './script';


//import Script from "./script.js";

//console.log(Script);

export default class Disp extends React.Component{

    render(){
        return(
                <div>
                    <div className="jumbotron text-center"> <h1>Check Weather</h1> </div>
                    <div className="entercity">Enter Your City</div>
                    <div className="cityname"><input type="input" id = "city_name" className="inpclass"></input></div>
                    <div className="buttoncss"><button onClick={getCityName} className="btn btn-success">Check</button></div>
                        <div id="cityConsole"></div>
                </div>
         )
    }
}