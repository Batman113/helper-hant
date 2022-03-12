import React from 'react';
import './css/color-down.css';
const ColorDown = (props) => {
    const renderedElements = props.options.map(option => {
        return <div className="item" key={option.value}>{option.label}</div>;
    });
    return (
    <div className="color-drop">
            {/* Hello */}
            {/* <select name="skills" multiple="" class="ui fluid dropdown">{renderedElements}</select> */}
            <div className="ui form"> 
                <div className='field'>
                    <label className="label">Select the color</label>
                    <div className='ui selection dropdown visible active'>
                        <i className='dropdown icon'></i>
                        <div className='text'>Select the color </div>
                        <div className="menu visible transition">{renderedElements}</div>
                
                    </div>
                </div>
            </div>
    </div>
    );
}
export default ColorDown;