import React from 'react'

export default function DropFilter (props){
    
    var options = props.options;

    return(
            <select 
                name={props.name} 
                defaultValue="DEFAULT"
                onChange={(e) => props.filter(e, 1)} >
                    <option  value="DEFAULT">{props.children}</option>
                    {options.map((opt) => {
                        return(
                            <option key={opt}value={opt}>{opt}</option>
                        )
                    })}
            </select>
    )


}