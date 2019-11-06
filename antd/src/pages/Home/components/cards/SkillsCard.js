import React from 'react'
import Card from './Card'
import ProgressBar from '@/components/widgets/ProgressBar'

function SkillsCard({isActive, skills}){
    return (
        <Card
            id="skills-card"
            title="Skills"
            isActive={isActive}
        >
            {   
                skills.length && skills.map((skill, i) =>(
                    <React.Fragment key={i}>
                        <h3 className="card-sub-title"><i className="fa fa-users" aria-hidden="true"></i>{skill.title}</h3>
                        {skill.items.length && (
                            <ul className="list-view skill-list">
                                {skill.items.map((item, i)=>(<li key={i} className="item"><ProgressBar percent={item.score} label={item.name} /></li>))}
                            </ul>
                        )}
                    </React.Fragment>
                ))
            }
        </Card>
    )
}

export default SkillsCard