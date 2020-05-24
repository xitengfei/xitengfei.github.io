import React from 'react'
import Tools from '@/utils/common'

const mapStyle = {
    width: '100%',
    height: '220px'
};

class AMap extends React.Component{
    
    componentWillMount(){
        let amapApiUrl = '//webapi.amap.com/maps?v=1.4.6&key=b125d25da25b000c94fae76ff2dc0d01'
        Tools.asyncLoadScript(amapApiUrl, ()=>{
            this.initAMap()
        })
    }

    initAMap(){
        const AMap = window.AMap;
        if(typeof AMap == 'object'){
            var map = new AMap.Map('amap-container', {
                zoom: this.props.zoom,//级别
                center: this.props.position,//中心点坐标
                viewMode: this.props.viewMode//使用3D视图
            });
        
            var marker = new AMap.Marker({
                position: new AMap.LngLat(...this.props.position),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '北京昌平'
            });
        
            // 将创建的点标记添加到已有的地图实例：
            map.add(marker);
        }
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div id="amap-container" style={mapStyle}>
            </div>
        )
    }
}

export default AMap