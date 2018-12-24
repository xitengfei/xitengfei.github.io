import React from 'react'
import {Row, Col, Input, Button, Icon, AutoComplete} from 'antd'
import './index.scss'

class HeaderBox extends React.Component{
    state = {
        dataSource: []
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }
    
    handleSearch = (value) => {
        if ( !value || value === '' || value === ' ' ) return []

        const dataItems = this.props.scenicSpots.filter(item => {
            return item.name.indexOf(value) > -1
        })
        const items = dataItems.map(item => {
            return item.name;
        })

        console.log("search, items", value, items)

        this.setState({
            dataSource: items
        });
    }

    render(){
        return (
            <Row gutter={10}>
                <Col span={6}>
                    <h1>京津冀一卡通一览表</h1>
                </Col>
                <Col xs={18} sm={12}>
                    <div className="global-search-wrapper">
                        <AutoComplete
                            className="global-search"
                            size="large"
                            style={{ width: '100%' }}
                            dataSource={this.state.dataSource}
                            onSelect={this.onSelect}
                            onSearch={this.handleSearch}
                            placeholder="请输入景区名称"
                        >
                            <Input
                                suffix={(
                                <Button className="search-btn" size="large" type="primary">
                                    <Icon type="search" />
                                </Button>
                                )}
                            />
                        </AutoComplete>
                    </div>
                </Col>
                <Col span={6} >
                    <div className="filter-btn" onClick={this.props.onClickFilterBtn}>
                        筛选 <Icon type="filter" />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default HeaderBox