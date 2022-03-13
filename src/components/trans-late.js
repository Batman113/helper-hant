import React, {useState} from "react";
import Input from "./translate/input";
import ColorDown from "./color-down";
import Result from "./translate/ResultLanguage";
import './css/translate.css';
var Language = [
    {
        label:'Japenese',
        value:'ja'
    },
    {
        label:'Danish',
        value:'da'
    },
    {
        label:'English',
        value:'en'
    },
    {
        label:"African",
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'South Korean(Hangul)',
        value:'ko'
    }
];

const TransLate = () => {
    const [input,changeInput] = useState('');
    const [selected,changeLanguage] = useState(Language[0]);
    const [chLanguage,setchLan] = useState(Language[0]);
    // console.log(input);
    return (
        <div id="translate-box">
            <Input input={changeInput}/>
            <ColorDown options={Language} selected={selected} onSelectedChange={changeLanguage}/>
            <ColorDown options={Language} selected={chLanguage} onSelectedChange={setchLan} /> 
            <Result inputLan={input} LangFrom={selected} LangTo={chLanguage}/>
        </div>
    )
}
export default TransLate;