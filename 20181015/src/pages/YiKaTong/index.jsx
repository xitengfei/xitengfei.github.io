import React from 'react'
import {connect} from 'react-redux'
import * as actions from '@/actions/yikatong'
import { Layout, Card } from 'antd'

import FilterBox from './components/FilterBox'
import RetrievalBox from './components/RetrievalBox'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

class YiKaTong extends React.Component{
    componentDidMount(){
        this.props.getAllData();
    }
    render(){
        console.log('YiKaTong render')
        return (
            <Layout className="layout-yikatong">
                <Header>京津冀一卡通一览表</Header>
                <Content>
                    <FilterBox />
                    <Card className="main-card">
                        <RetrievalBox />
                    </Card>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        scenic_spots: store.yikatongStore.scenic_spots
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: ()=>{ return dispatch(actions.fetchYiKaTongData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YiKaTong)