import React from 'react'
import {connect} from 'react-redux'
import * as actions from '@/actions/yikatong'
import { Layout, Card } from 'antd'

import FilterBox from './components/FilterBox'
import ResultPanel from './components/ResultPanel'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

class YiKaTong extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checkedItems:['昌平区', '延庆区']
        }

        this.onCheckAreas = this.onCheckAreas.bind(this)
    }
    
    componentDidMount(){
        this.props.getAllData();
    }

    filterItems(){
        const {scenicSpots} = this.props
        const {checkedItems} = this.state
        return scenicSpots.filter((item)=>{
            return checkedItems.indexOf(item.area_name) > -1
        })
    }

    onCheckAreas(checkedItems){
        this.setState({
            checkedItems: checkedItems
        })
    }

    render(){
        console.log('YiKaTong render')
        const dataItems = this.filterItems()
        return (
            <Layout className="layout-yikatong">
                <Header>京津冀一卡通一览表</Header>
                <Content>
                    <FilterBox
                        options={this.props.areas}
                        checkedItems={this.state.checkedItems}
                        onCheckAreas={this.onCheckAreas}
                    />
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
        scenicSpots: store.yikatongStore.scenicSpots,
        areas: store.yikatongStore.areas,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: ()=>{ return dispatch(actions.fetchYiKaTongData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YiKaTong)