import React from 'react'
import {connect} from 'react-redux'
import * as actions from '@/actions/yikatong'
import { Layout, Card } from 'antd'

import FilterBox from './components/FilterBox'
import ResultPanel from './components/ResultPanel'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

class YiKaTong extends React.Component{
    componentDidMount(){
        this.props.getAllData();
    }
    filterItems(){
        const {scenicSpots} = this.props
        return scenicSpots.filter((item)=>{
            return item.area_name === '昌平区' || item.area_name === '海淀区'
        })
    }
    render(){
        console.log('YiKaTong render')
        const dataItems = this.filterItems()
        return (
            <Layout className="layout-yikatong">
                <Header>京津冀一卡通一览表</Header>
                <Content>
                    <FilterBox />
                    <Card className="main-card">
                        <ResultPanel 
                            dataItems={dataItems}
                        />
                    </Card>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        scenicSpots: store.yikatongStore.scenicSpots
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: ()=>{ return dispatch(actions.fetchYiKaTongData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YiKaTong)