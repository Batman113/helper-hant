import React,{useState,useEffect} from "react";

const Input = (props) => {
    const [term,changeTerm] = useState('');
    // console.log(term);
    useEffect(() =>{
        async function changeResult(){
            props.input(term);
        }
        changeResult();
    },[term]);
    return (<div className="ui form">
        <div className="field">
            <input className="input" value={term} onChange={(e) => changeTerm(e.target.value)}/>
        </div>
        
    </div>)
}
export default Input;