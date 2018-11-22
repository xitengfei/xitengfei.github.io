import React from 'react'

function Card(props){
    let {classes, id, isActive} = props
    return (
        <div
            className={`xui-card ${classes}`}
            id={id} 
            active-page={isActive ? 'true':'false'} 
        >
            { props.title && (<h2 className="card-title">Resume</h2>) }
            {props.children}
        </div>
    )
}

export default Card