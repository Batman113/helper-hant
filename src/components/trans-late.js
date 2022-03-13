import React, {useState} from "react";
import Input from "./translate/input";

const TransLate = () => {
    const [input,changeInput] = useState('');
    console.log(input);
    return (
        <div>
            <Input input={changeInput}/>
        </div>
    )
}
export default TransLate;