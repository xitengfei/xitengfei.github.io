import React from 'react'
import Card from './Card'

function ContactCard(props){
    return (
        <Card
            id="contact-card"
            title="Contact"
            isActive={props.isActive}
        >
            <div class="contact-info-list">
                <div id="gaode-map-container"></div>
                <h3 class="card-sub-title">Address</h3>
                <p>ChangPing, Beijing, China</p>
                <h3 class="card-sub-title">Phone</h3>
                <p>+86 15652203404</p>
                <h3 class="card-sub-title">Email</h3>
                <p>447360803@qq.com</p>
            </div>
        </Card>
    )
}

export default ContactCard