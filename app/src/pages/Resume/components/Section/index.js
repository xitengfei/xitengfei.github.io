import React from 'react';
import './index.less';

const Section = function(props){
    const {icon, title, className} = props;
    
    return(
        <section className={`resume-section ${className}`}>
            <div className="section-header">
                <h2>
                    <span className="icon">{icon}</span>
                    <span className="title">{title}</span>
                </h2>
            </div>
            <div className="section-content">
                {props.children}
            </div>
        </section>
    )
}

export default Section;