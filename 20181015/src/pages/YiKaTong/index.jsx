import React from 'react'
import {connect} from 'react-redux'
import * as actions from '@/actions/yikatong'
import { Layout, Drawer, Card, Spin } from 'antd'

import HeaderBox from './components/HeaderBox'
import FilterBox from './components/FilterBox'
import ResultPanel from './components/ResultPanel'
import YiKaTongTools from './tools.js'
import {simpleDeepClone} from '@/tools/objectHelper.js'

import './index.scss'

const { Header, Footer, Content } = Layout;

class YiKaTong extends React.Component{
    defaultFilters = {
        checkedAreas: ['昌平区', '延庆区'],
    }

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
        this.props.getAllData()
    }

    componentWillReceiveProps(nextProps){
        console.log('YiKaTong -- componentWillReceiveProps')
        if(nextProps.scenicSpots){
            this.applyFiltersUpdate(this.defaultFilters)
        }
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

    applyFiltersUpdate = (filters) => {
        this.setState({
            inFiltering: true,
            filters: filters,
        })

        setTimeout(()=>{
            // start filtering
            const filterResult = YiKaTongTools.filterItems(simpleDeepClone(this.props.scenicSpots), filters)

            // set current Items
            this.setState({
                inFiltering: false,
                filterResult: filterResult,
            })
        }, 1000)
    }

    handleSearch = (key) => {
        this.setState({
            inFiltering: true,
        })

        setTimeout(()=>{
            // start filtering
            const filterResult = this.props.scenicSpots.filter(item => { return item.name.indexOf(key) > -1 })

            // set current Items
            this.setState({
                inFiltering: false,
                filterResult: filterResult,
            })
        }, 1000)
    }

    render(){
        const {inFiltering, filterResult} = this.state
        return (
            <Layout className="layout-yikatong">
                <Header>
                    <HeaderBox 
                        onClickFilterBtn={this.openFilterBox}
                        scenicSpots={this.props.scenicSpots}
                        onSearch={this.handleSearch}
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
                    placement="right"
                    closable={false}
                    width={600}
                    onClose={this.closeFilterBox}
                    visible={this.state.showFilterBox}
                >
                    <FilterBox
                        defaultFilters={this.defaultFilters}
                        onCancle={this.closeFilterBox}
                        onConfirm={this.closeFilterBox}
                        onFiltersChange={this.applyFiltersUpdate}
                    />
                </Drawer>
            </Layout>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    console.log('YiKaTong mapStateToProps', store);
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