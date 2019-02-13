import React from 'react'
import Card from './Card'
import case1 from '@/pages/Home/img/yikatong-cover.jpg'
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
                    <Link to="/yikatong"><img src={case1} alt="case1" /></Link>
                </li>
            </ul>
        </Card>
    )
}

export default CasesCard