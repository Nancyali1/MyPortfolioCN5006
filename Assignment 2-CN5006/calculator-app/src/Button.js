
import './Calculator.css'
import React from "react";
// Create our Button component as a functional component.
const Button = (props) => {
    function Button({ handleClick }) {

    return (
        <div className="button-container">
            {/* Other buttons */}
            <button onClick={() => handleClick("showMe")}>Show Me</button>
        <button class="ButtonStyle" value={props.label}  onClick={props.ClickHandle} > {props.label}  </button>
      </div>
    );
  }
}

  // Export our button component.
  export default Button;
