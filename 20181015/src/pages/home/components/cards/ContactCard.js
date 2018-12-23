import React from 'react'
import Card from './Card'
import AMap from '../widgets/AMap' 

class ContactCard extends React.Component{
    render(){
        return(
            <Card
                id="contact-card"
                title="Contact"
                isActive={this.props.isActive}
            >
            <div className="contact-info-list">
                <div id="gaode-map-container">
                    <AMap
                        position={[116.2888,40.1482]}
                        zoom={11}
                        viewMode={'3D'}
                    />
                </div>
                <h3 className="card-sub-title">Address</h3>
                <p>ChangPing, Beijing, China</p>
                <h3 className="card-sub-title">Phone</h3>
                <p>+86 15652203404</p>
                <h3 className="card-sub-title">Email</h3>
                <p>447360803@qq.com</p>
            </div>
        </Card>
        )
    }
}

export default ContactCard