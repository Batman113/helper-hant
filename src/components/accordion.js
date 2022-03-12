import React, {useState} from "react";

const Accordion = ({items}) => {
    const [clickedIndex, setClickedIndex] = useState(null);
    const onTitleClick = (index) => {
        // console.log(index);
        setClickedIndex(index);
    }
    
    return (<div className="ui styled accordion">
            {/* <h1>{clickedIndex}</h1> */}
        {
            items.map((item, index) => {
                const active = index === clickedIndex ? 'active' : '' ;

                return (
                <React.Fragment key={item.title}> 
                    <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                        <i className="dropdown icon"></i> 
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>     
                </React.Fragment>
                );
            })
        }
        
    </div>)
}

export default Accordion;