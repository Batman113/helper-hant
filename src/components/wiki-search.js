// import React from "react";

// import wikiSearch from "../api/wikiSearch";
// import axios from 'axios';
// // const WikiSearch = () => {
// //     return (<div>
// //         <hi>Hello</hi>
// //     </div>)
// // }
// class WikiSearch extends React.Component{
//     onformSubmit = async (e) =>{
//         console.log(e.target.value);
//         const response = await axios.get('https://en.wikipedia.org/w/api.php',{
//             params:{
//                 srsearch : e.target.value,
//                 action:'query',
//                 origin:'*',
//                 list : 'search',
//                 format:'json'
                
//             }
//         });
//         console.log(response);
//     }
//     render(){
//         return(<div>
//             <form>
//                 <input type="text" onChange={this.onformSubmit}/>
//             </form>
//         </div>)
//     }
// }
// export default WikiSearch;

import React,{useState,useEffect} from 'react';
import WikiInput from './wiki-element/wiki-input';
import WikiResult from './wiki-element/wiki-result';

const WikiSearch = () => {
    const [results,changeResults] = useState([]);
    useEffect(() => {
        console.log(results);
    },[results]);
    return(<div>
        <h1>Hello</h1>
        <WikiInput result={(res)=>{changeResults(res)}}/>
        <WikiResult wikiDisplay={results}/>
    </div>)
}
export default WikiSearch;