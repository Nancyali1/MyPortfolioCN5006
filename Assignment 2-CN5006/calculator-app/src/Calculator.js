import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

function KeyPadComponent() {
    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false); // State to toggle image visibility

    const ClickHandle = (e) => {
        const value = e.target.value;
        if (value === "C") {
            setText("");
        } else if (value === "=") {
            try {
                setText(evaluate(text1).toString());  // Use math.js to evaluate the expression
            } catch {
                setText("Error");
            }
        } else if (value === "Show Me") {
            setShowImage(true); // Show image on button click
        } else if (value === "Square") {
            try {
                const num = parseFloat(text1);
                setText((num * num).toString());
            } catch {
                setText("Error");
            }
        } else {
            setText(text1 + value);
        }
    };

    const closeImage = () => {
        setShowImage(false); // Close the image when clicked
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            <div className="button-row">
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>
            <div className="button-row">
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div className="button-row">
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div className="button-row">
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>
            <div className="button-row">
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>
            <div className="button-row button-group">
                <Button label="Show Me" ClickHandle={ClickHandle} />
                <Button label="Square" ClickHandle={ClickHandle} />
            </div>

            {/* Image Popup */}
            {showImage && (
                <div className="popup">
                    <img
                        id="myImage"
                        src={cc}
                        alt="A beautiful portrait"  // Update alt text to be more descriptive without redundant words
                        className="popup-image"
                    />

                    <button className="close-button" onClick={closeImage}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;
