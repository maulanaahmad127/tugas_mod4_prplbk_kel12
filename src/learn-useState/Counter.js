import React, { useContext, useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import { UserContext } from "../learn-useContext/index";
export default function Counter() {
    const { values, setValues } = useContext(UserContext);
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const [formValue, setValue] = useState("");
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    const hideImage = () => {
        setShowImage(!showImage);
    };
    return (
        <div>
            <h2>UserContext</h2>
            <div>{values}</div>
            <button onClick={() => setValues("hey")}> ganti value</button>
            <div className="Main">
                <p className="Text">Counter with useState</p>
                <p>KELOMPOK 12</p>
                <form >
                    <label htmlFor="value">Value : </label>
                    <input type="text" name="value" value={formValue} onChange={(event) => { setValue(event.target.value) }} ></input>
                </form>
                <p className="Text">{formValue}</p>
                <div className="ViewImage">
                    <div className="ViewImage1">
                        <img className="App-logo"
                            style={{
                                display: showImage === true ? "flex" :
                                    "none"
                            }}
                            src={logo}
                            alt="logo" />
                    </div>
                    <button className="Button" onClick={hideImage}>
                        {showImage !== true ? "show" : "hide"}
                    </button>
                </div>
                <p className="Text">{count}</p>
                <div className="ViewButton">
                    <div className="ViewButton2">
                        <button className="Button" onClick={countUp}>
                            Up
                        </button>
                    </div>
                    <div className="ViewButton1">
                        <button className="Button" onClick={countDown}>
                            Down
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}