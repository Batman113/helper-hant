import React from "react";
// import Accordion from './components/accordion';
// import WikiSearch from "./components/wiki-search";

import ColorDown from "./components/color-down";
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
        label:'Select',
        value:''
    },
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
    return (<div>
        {/* <br /> */}
        {/* <Accordion items={items} /> */}
        {/* <WikiSearch /> */}
        <ColorDown options={options}/>
    </div>)
};

export default App;