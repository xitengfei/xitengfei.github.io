import React from 'react'

const ProgressBar = (props) => {
    return (
        <div className="xui-progress">
            <div className="xui-progress-bar" data-percent={props.percent+'%'} style={{width: props.percent + '%', background: props.color}}></div>
            <span className="xui-progress-label">{props.label}</span>
            <span className="xui-progress-completed">{props.percent}%</span>
        </div>
    )
}

export default ProgressBar