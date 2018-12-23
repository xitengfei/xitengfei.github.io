import React from 'react'
import {connect} from 'react-redux'
import * as actions from '@/actions/yikatong'
import { Layout, Drawer, Card, Spin } from 'antd'

import HeaderBox from './components/HeaderBox'
import FilterBox from './components/FilterBox'
import ResultPanel from './components/ResultPanel'
import YiKaTongTools from './tools.js'

import './index.scss'

const { Header, Footer, Content } = Layout;

class YiKaTong extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showFilterBox: false,
            inFiltering: false,
            filters:{},
            filterResult: [],
        }

        this.onCheckAreas = this.onCheckAreas.bind(this)
    }
    
    componentDidMount(){
        this.props.getAllData();
    }

    closeFilterBox = () => {
        this.setState({
            showFilterBox: false,
        })
    }
    openFilterBox = () => {
        this.setState({
            showFilterBox: true,
        })
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

    handleFiltersChange = (filters) => {
        this.setState({
            inFiltering: true,
            filters: filters,
        })

        // start filtering
        const items = JSON.parse(JSON.stringify(this.props.scenicSpots))
        const filterResult = YiKaTongTools.filterItems(items, filters)

        setTimeout(()=>{
            // set current Items
            this.setState({
                inFiltering: false,
                filterResult: filterResult,
            })
        }, 500)
    }

    render(){
        const {inFiltering, filterResult} = this.state
        return (
            <Layout className="layout-yikatong">
                <Header>
                    <HeaderBox 
                        onClickFilterBtn={this.openFilterBox} 
                    />
                </Header>
                <Content>
                    <Card className="main-card">
                        { inFiltering ? (<Spin />) : (<ResultPanel 
                            dataItems={filterResult}
                        />)}
                    </Card>
                </Content>
                <Footer>Footer</Footer>

                <Drawer
                    // title=""
                    placement="right"
                    closable={false}
                    width={600}
                    onClose={this.closeFilterBox}
                    visible={this.state.showFilterBox}
                >
                    <FilterBox
                        options={this.props.areas}
                        onCancle={this.closeFilterBox}
                        onConfirm={this.closeFilterBox}
                        onFiltersChange={this.handleFiltersChange}
                    />
                </Drawer>
            </Layout>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        scenicSpots: store.yikatongStore.scenicSpots,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllData: ()=>{ return dispatch(actions.fetchYiKaTongData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YiKaTong)