import React from 'react'

function Card(props){
    return (
        <div className="xui-card" id={props.id} active-page={props.isActive ? 'true':'false'} >
            <h2 className="card-title">Resume</h2>
            {props.children}
        </div>
    )
}

export default Card