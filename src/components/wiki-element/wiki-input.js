import {React, useState, useEffect} from 'react';
import axios from 'axios';
const WikiInput = (props) => {
    const [term,changeterm] = useState('');
    useEffect(() =>{
        async function fetchDate(){
            const response = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    srsearch:term,
                    action: 'query',
                    origin:'*',
                    list:'search',
                    format : 'json'
                }
            });
            // console.log(response);
            // response = this.JSON(response)
            props.result(response.data.query.search);
        }
        const Id = setTimeout(()=>{
            fetchDate();
        },500);
        return () => {
            clearTimeout(Id);
        }
    },[term])
    return (<div className="ui form">
        <div className="field">
            <input 
                className="input"
                value={term}
                onChange={(e) => changeterm(e.target.value)} 
            />
        </div>
        </div>)
}
export default WikiInput;