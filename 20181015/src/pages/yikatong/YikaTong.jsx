import React from 'react'
import { Layout, Table, Card } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

class YiKaTong extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selectedArea:'海淀区',
            selectedStart:'',
            selectedEnd:'',
        }
    }
    renderContent(scenicSpots){
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '景区名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'A级',
            dataIndex: 'level',
            key: 'level',
        }, {
            title: '票价(元)',
            dataIndex: 'price',
            key: 'price',
        }];

        return (
            <div>
                {scenicSpots.length && scenicSpots.map((area, i)=>(
                    <React.Fragment key={i}>
                        <Card title={area.name}>
                            <Table dataSource={area.items} columns={columns} />
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        )
    }

    render(){
        let scenicSpots = this.props.scenic_spots;
        scenicSpots = scenicSpots || [];

        return (
            <Layout>
                <Header>京津冀一卡通一览表</Header>
                <Content>{this.renderContent(scenicSpots)}</Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default YiKaTong