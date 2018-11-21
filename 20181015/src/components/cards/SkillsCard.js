import React from 'react'
import Card from './Card'
import ProgressBar from '../widgets/ProgressBar'

function SkillsCard(props){
    return (
        <Card
            id="skills-card"
            title="Skills"
            isActive={props.isActive}
        >
            <h3 className="card-sub-title"><i className="fa fa-users" aria-hidden="true"></i>Professional Skills</h3>
            <ul className="list-view skill-list">
                <li className="item"><ProgressBar percent={"80"} label={"Comunication"} /></li>
                <li className="item"><ProgressBar percent={"90"} label={"Bug Fixing"} /></li>
            </ul>

            <h3 className="card-sub-title"><i className="fa fa-users" aria-hidden="true"></i>Code Skills</h3>
            <ul className="list-view skill-list">
                <li className="item"><ProgressBar percent={"80"} label={"PHP"} /></li>
                <li className="item"><ProgressBar percent={"85"} label={"HTML5/CSS3"} /></li>
                <li className="item"><ProgressBar percent={"85"} label={"Js/jQuery"} /></li>
            </ul>

            <h3 className="card-sub-title"><i className="fa fa-users" aria-hidden="true"></i>Other Skills</h3>
            <ul className="list-view skill-list">
                <li className="item"><ProgressBar percent={"60"} label={"Mysql"} /></li>
                <li className="item"><ProgressBar percent={"60"} label={"Linux"} /></li>
                <li className="item"><ProgressBar percent={"85"} label={"Git"} /></li>
            </ul>
        </Card>
    )
}

export default SkillsCard