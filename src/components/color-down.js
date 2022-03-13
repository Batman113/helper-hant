import React, {useState, useEffect, useRef} from 'react';
import './css/color-down.css';

const ColorDown = ({options, selected, onSelectedChange}) => {
    //set the state which tells if the dropdown is active or not
    const [active,setActive] = useState(false);
    //reference to any specific dom element or react component
    const ref = useRef();

    //contains the elements for the option of the dropdown
    //used map to iterate the elements
    const renderedElements = options.map(option => {
        //if option is selected we pass the option
        if(option !== selected){
            return <div 
                        className="item" 
                        key={option.value} 
                        onClick={() => onSelectedChange(option)}
                    >{option.label}</div>; 
        }
        //else return null to not show any element
        else{
            return null;
        }
    });
    //Toggle class to change the active state of sropdown
    const toggleClass = ()=>{
        setActive(!active);
    }
    //used useeffect hook to handle event listener only one time
    useEffect(() => {
        //main function which execute when we click anywhere in body
        const onBodyClick = (e) => {
            //this checks if ref.current which is ref dom element contains that target on which we clicked
            //if yes then return to not change the active state to false
            /*Basically for part when we click outside the dropdown*/
            if(ref.current.contains(e.target)){
                return;
            }
            setActive(false);//set active state to false
      };
    // Event listener to handle the event click
    document.body.addEventListener("click",onBodyClick,
      { capture: true }
    );
    //cleanup function
    return () => {
        document.body.removeEventListener("click",onBodyClick,{capture:true});
    }
  }, []);//used [] as this to call when we render the component first time

    return (
        <div className="color-drop">
            {/* Hello */}
            {/* <select name="skills" multiple="" class="ui fluid dropdown">{renderedElements}</select> */}
            <div className="ui form" ref={ref}> 
                <div className='field'>
                    <label className="label"> Select the color </label>
                    <div 
                        className={`ui selection dropdown ${active ? 'visible active' : ''}`} 
                        id="remove" 
                        onClick={toggleClass}
                    >
                        <i className='dropdown icon'></i>
                        <div className='text' id='text' >{selected.label}</div>
                        <div 
                            className={`menu ${active ? 'visible transition' : ''}`}  
                            id='removeCss'
                        >
                            {renderedElements}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ColorDown;
