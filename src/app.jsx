import React from "react";
import ReactDOM from "react-dom";
import Disp from "./disp.jsx";


class App extends React.Component{
    render(){
        return(
            <div>
                <Disp/>
            </div>
        )
    }
}

var node = document.getElementById("app");

ReactDOM.render(<App/>, node);
