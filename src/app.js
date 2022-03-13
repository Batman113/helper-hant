import React, {useState} from "react";
// import Accordion from './components/accordion';
// import WikiSearch from "./components/wiki-search";

import ColorDown from "./components/color-down";
import Translate from "./components/translate";
import TransLate from "./components/trans-late";
const items = [

    {
        title : 'React',
        content: "Javascript frontend library"
    },
    {
        title : 'Firebase',
        content : "Nosql database"
    },
    {
        title : 'NextJs',
        content : "Advanced react"
    }
];

const options = [
    {
        label : 'A red house',
        value : 'red'
    },
    {
        label: 'A blue house',
        value : 'blue'
    },
    {
        label : 'A white house',
        value : 'white'
    }
];


const App = () =>{
    const [selected,changeColor] = useState(options[0]);
    const [show,setShow] = useState(false);
    return (<div>
        {/* <br /> */}
        {/* <Accordion items={items} /> */}
        {/* <WikiSearch /> */}
        {/* <button onClick={() => setShow(!show)}>
            Dropdown
        </button>
        {
            show === true ?  <ColorDown 
            options={options}
            selected={selected}
            onSelectedChange={changeColor}
        /> : null
        } */}
        {/* <Translate /> */}
        <TransLate/>
    </div>)
};

export default App;