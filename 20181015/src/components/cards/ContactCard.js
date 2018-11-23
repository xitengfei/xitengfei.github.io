import React from 'react'
import Card from './Card'


class ContactCard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // if(typeof AMap == 'object'){
        //     var map = new AMap.Map('gaode-map-container', {
        //         zoom:11,//级别
        //         center: [116.2888,40.1482],//中心点坐标
        //         viewMode:'3D'//使用3D视图
        //     });
        
        //     var marker = new AMap.Marker({
        //         position: new AMap.LngLat(116.2888,40.1482),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //         title: '北京昌平'
        //     });
        
        //     // 将创建的点标记添加到已有的地图实例：
        //     map.add(marker);
        // }
    }

    render(){
        return(
            <Card
                id="contact-card"
                title="Contact"
                isActive={this.props.isActive}
            >
            <div className="contact-info-list">
                <div id="gaode-map-container"></div>
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