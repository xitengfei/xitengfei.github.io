import React from 'react'
import Card from './Card'

function CasesCard(props){
    const {isActive, cases} = props;
    return (
        <Card
            id="case-card"
            title="Cases"
            isActive={props.isActive}
        >
            <ul className="list-view">
                {cases.map(item => {
                    return (
                        <li className="item">
                            <a href={item.link} target={item.target || '_self'}>
                                <h2>{item.title}</h2>
                                <img src={item.cover} alt={item.title} style={{width: '80%'}} />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default CasesCard