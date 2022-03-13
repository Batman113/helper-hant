import React,{useState,useEffect} from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const Result = (props) => {
    const [translatedText,changeText] = useState('');
    useEffect(() =>{
        async function fetchData(){
            const response = await axios.get('https://translation.googleapis.com/language/translate/v2',{
                params:{
                    q:props.inputLan,
                    source:props.LangFrom.value,
                    target:props.LangTo.value,
                    format:'text',
                    key:API_KEY
                }
            });
            // console.log();
            changeText(response.data.data.translations[0].translatedText);
        }
        var id = setTimeout(()=>{
            fetchData();
        },500);
        return ()=>{ 
            clearTimeout(id);
        }
    },[props.inputLan,props.LangFrom,props.LangTo])
    // console.log(props.LangFrom,props.LangTo);
    return(<div style={{width:'80%',margin:'auto'}}>
        {/* <h1> {props.inputLan }</h1> */}
        {/* <h1> {props.LangFrom}</h1>
        <h1> { props.LangTo}</h1> */}
        <h1>OUTPUT</h1>
        <h1>{translatedText}</h1>
    </div>)
}

export default Result;