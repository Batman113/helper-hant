import React from 'react';
const WikiResult = (props) => {
    const result = props.wikiDisplay;
    return (<div className="ui celled list" style={{width:'80%',margin:'auto'}}>
            {
                result.map((res)=>{
                    return (
                        <div className="item">
                            <div className="content">
                                <div className='right floated content'>
                                    <a
                                        href={`https://en.wikipedia.org/?curid=${res.pageid}`}
                                        className="ui right floated inverted red button"
                                    >
                                        Go
                                    </a>
                                </div>
                        <h1>{res.title}</h1>
                        <span>{res.snippet}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>)
}
export default WikiResult;