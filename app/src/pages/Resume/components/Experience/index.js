import React from 'react';
import './index.less';

const ExperienceItem = function(props){
    const {mode = 'simple', name, period, role, description, achievement} = props;

    return (
        <div className="experience-item">
            <div className="meta">
                <span className="name">{name}</span>
                <span className="period">{period}</span>
                <span className="role">{role}</span>
            </div>
            <div className="content">
                {'simple' === mode ? (
                    <p>{description}</p>
                ):(
                    <React.Fragment>
                        <div className="experience-desc">
                            <h3>工作内容</h3>
                            <div className="detail" dangerouslySetInnerHTML={{__html: description}}></div>
                        </div>
                        {achievement && (<div className="experience-achievement">
                            <h3>工作成果</h3>
                            <div className="detail" dangerouslySetInnerHTML={{__html: achievement}}></div>
                        </div>)}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}


const Experience = function(props){
    const {dataSource, mode} = props;

    return(
        <section className="resume-experience">
            {dataSource.map((item, index) => {
                return (
                    <ExperienceItem
                        key={index} 
                        mode={mode}
                        {...item}
                    />
                );
            })}
        </section>
    )
}

export default Experience;