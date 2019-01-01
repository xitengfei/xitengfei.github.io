import React from 'react'
import {Input, Button, Icon, AutoComplete} from 'antd'
import './index.scss'

class HeaderBox extends React.Component{
    state = {
        dataSource: [],
        keyWord: null,
    }

    handleSelect = (value) => {
        this.props.onSearch(value)
    }

    handleSearchBtnClick = () => {
        this.props.onSearch(this.state.keyWord)
    }
    
    handleSearch = (value) => {
        if ( !value || value === '' || value === ' ' ) return []

        // search in scenicSpots
        const dataItems = this.props.scenicSpots.filter(item => {
            return item.name.indexOf(value) > -1
        })
        const items = dataItems.map(item => {
            return item.name;
        })

        // search in areas
        const areas = this.props.areas.filter(item => {
            return item.indexOf(value) > -1
        })
        areas.map(area => {
            items.push('查看区域：' + area + '的全部结果')
        })

        this.setState({
            dataSource: items,
            keyWord: value,
        });
    }

    render(){
        return (
            <div className="yikatong-header">
                <div className="brand">
                    <div className="logo">
                        <img className="hidden-sm"  src={require("../../img/yikatong-logo.png")} alt="京津冀旅游一卡通" />
                        <img className="hidden-md"  src={require("../../img/yikatong-logo-sm.png")} alt="京津冀旅游一卡通" />
                    </div>
                </div>
                <div className="main">
                    <div className="global-search-wrapper">
                        <AutoComplete
                            className="global-search"
                            size="large"
                            style={{ width: '100%' }}
                            dataSource={this.state.dataSource}
                            onSelect={this.handleSelect}
                            onSearch={this.handleSearch}
                            placeholder="请输入景区名称"
                        >
                            <Input
                                suffix={(
                                    <Button 
                                        className="search-btn" 
                                        size="large" 
                                        type="primary"
                                        onClick={this.handleSearchBtnClick}
                                    >
                                        <Icon type="search" />
                                    </Button>
                                )}
                            />
                        </AutoComplete>
                    </div>
                </div>
                <div className="right">
                    <div className="filter-btn" onClick={this.props.onClickFilterBtn}>
                        筛选 <Icon type="filter" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBox