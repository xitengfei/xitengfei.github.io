import React from 'react'
import Card from './Card'
import case1 from '../../img/cases/thumb-p1.jpg'
import { Link } from "react-router-dom"

function CasesCard(props){
    return (
        <Card
            id="case-card"
            title="Cases"
            isActive={props.isActive}
        >
            <ul className="list-view">
                <li className="item">
                    <img src={case1} alt="case1" />
                </li>
                <li>
                    <Link to="/yikatong">京津冀一卡通2019版</Link>
                </li>
            </ul>
        </Card>
    )
}

export default CasesCard