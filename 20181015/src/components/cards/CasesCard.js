import React from 'react'
import Card from './Card'
import case1 from '../../img/cases/thumb-p1.jpg'

function CasesCard(props){
    return (
        <Card
            id="case-card"
            title="Cases"
            isActive={props.isActive}
        >
            <ul class="list-view">
                <li class="item">
                    <img src={case1} alt="case1" />
                </li>
            </ul>
        </Card>
    )
}

export default CasesCard