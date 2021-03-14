import React from 'react'

export default function PageController (props){

    const actualpage = props.totalpage ? props.actualpage :"";

    function handleChange(e) {
        const {value} = e.target;
        console.log(value)
    }


    return(
            <div className="pagecontroller">
               <button onClick={() => 
                (actualpage) && props.pagerequest(1)}
                className="btn first">
                <svg version="1.1" id="Capa_1" x="0px" y="0px"
                            width="30.725px" height="30.725px" viewBox="0 0 532.153 532.153">
                        <path d="M224.334,510.96c8.758,13.709,23.586,21.193,38.721,21.193c8.458,0,17.014-2.338,24.67-7.228
                                c21.358-13.647,27.619-42.032,13.966-63.391l-124.879-195.46l124.879-195.46c13.647-21.365,7.393-49.744-13.966-63.391
                                c-21.354-13.642-49.744-7.393-63.392,13.966L83.66,241.362c-9.627,15.067-9.627,34.357,0,49.425L224.334,510.96z"/>
                        <path d="M230.454,290.787L371.128,510.96c8.765,13.709,23.587,21.193,38.722,21.193c8.458,0,17.014-2.338,24.67-7.228
                                c21.358-13.647,27.613-42.032,13.966-63.391l-124.885-195.46l124.891-195.46c13.642-21.359,7.393-49.744-13.966-63.391
                                c-21.353-13.642-49.743-7.393-63.391,13.966L230.454,241.362C220.821,256.43,220.821,275.72,230.454,290.787z"/>
                </svg>

                   </button>     
               <button onClick={() => 
                (actualpage > 1) && props.pagerequest(actualpage-1)}
                className="btn previous">
                    <svg version="1.1" id="Capa_1" x="0px" y="0px"
                            width="30.725px" height="30.725px" viewBox="0 0 30.725 30.725" >
                            <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731
                                L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z"/>

                    </svg>
               </button>
               <input readOnly={true} type="number" value={actualpage} onChange={(e) => handleChange} max={props.totalpage}/>
               <textarea readOnly={true} name="max-pages" id="max-pages" value={`/ ${props.totalpage}`}></textarea>   
               <button onClick={() => 
                (actualpage < props.totalpage )&& (props.pagerequest(actualpage+1))}
                className="btn next">
               <svg version="1.1" id="Capa_1" x="0px" y="0px"
                            width="30.725px" height="30.725px" viewBox="0 0 30.725 30.725" >
                            <path d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731
		                    c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0
                            L24.813,15.366z"/>
                    </svg>
                   </button>     
               <button onClick={() => 
                actualpage && props.pagerequest(props.totalpage)}
                className="btn last">
                    <svg version="1.1" id="Capa_1" x="0px" y="0px"
                        width="30.725px" height="30.725px" viewBox="0 0 532.153 532.153">
                        <path d="M355.349,266.078L230.464,461.539c-13.648,21.364-7.393,49.743,13.966,63.391c7.656,4.89,16.212,7.228,24.67,7.228
                             c15.141,0,29.963-7.491,38.721-21.193l140.675-220.173c9.626-15.067,9.626-34.358,0-49.425L307.821,21.192
                            C294.173-0.172,265.789-6.421,244.43,7.227c-21.365,13.647-27.614,42.032-13.966,63.391L355.349,266.078z"/>
                        <path d="M122.305,532.157c15.141,0,29.964-7.491,38.721-21.193l140.674-220.173c9.627-15.067,9.627-34.358,0-49.425
                            L161.026,21.192C147.373-0.172,118.995-6.421,97.636,7.227C76.271,20.874,70.022,49.259,83.67,70.618l124.885,195.46
                            L83.67,461.539c-13.648,21.364-7.393,49.743,13.966,63.391C105.292,529.825,113.848,532.157,122.305,532.157z"/>
                    </svg>       
                   </button>     

            </div>
    )


}